# Why Strawberry is the future of Python+GraphQL

At work we started implemented a GraphQL API to overcome some of the shortcomings of our REST*ish* API.

At first we chose graphene as it was the library with most active development and contributors, but soon it became obvious that our approach of mapping resolvers to sql views was not going to be performant enough so we took a step back and reassessed our options.

Finally, we chose an in-house solution that decorates python classes to the corresponding sqlalchemy model, in order to generate `one` sql query per `graphql` query. That way we avoided subselects that could kill performance. Although that approach works, and there are a [few](https://hasura.io/) [companies](https://www.graphile.org/postgraphile/) around that approach. The [best practices](https://productionreadygraphql.com/blog/2020-05-21-graphql-to-sql) seems to discourage this approach and instead recommend the [DataLoader pattern](https://xuorig.medium.com/the-graphql-dataloader-pattern-visualized-3064a00f319f) to efficiently avoid the n+1 problem.

Within that context, it is reasonable to expect that a Library with good dataloader integration will be a good investment in the scalability of our GraphQL API.

But wait, both graphene and strawberry offer support for DataLoaders. So in what way is strawberry different?
I will try to explain it with an example. Let's suppose we are creating an API for the next Python Conference and we want to empower different users to get the data they need to build custom integrations, and ultimately, increase the attendance and networking effects of the conference.

Our API should first help attendees to choose talks based on their content or author. Following Design First Practices, our API should look something like this:

```graphql
type Query {
    talks: [Talk!]!
}

type Talk {
    title: String!
    author: Author!
    topic: Topic!
    description: String!
    when: DateTime!
}
```

 Now let's try to build it with Graphene and with Strawberry to compare them.

Strawberry:

```
from typing import List
import strawberry

@strawberry.type
class Author:
    name: str


@strawberry.type
class Talk:
    title: str
    author: Author


@strawberry.type
class Query:

    @strawberry.field
    def talks(self) -> List[Talk]:
        return [Talk(title="Some Pycon Talk", author=Author('Ms. Speaker'))]

schema = strawberry.Schema(query=Query, types=[Talk, Workshop])
```

Graphene

```python
from graphene import ObjectType, String, Field, Schema, List


class Author(ObjectType):
    name = String()


class Talk(ObjectType):
    title = String()
    author = Field(Author)


class Query(ObjectType):
    events = List(Talk)
    
    def resolve_events(self, info):
        return [Talk(title='Some Title', author=Author('Mr. Speaker'))]

schema = Schema(query=Query)
```



They look somewhat similar, but the fact that strawberry uses type hints to decorate types  integrations of strawberry gives much better integration with IDEs for suggestions and bug detection. Besides that, i personally like that approach more because it's much more readable and one can focus on the problem domain instead of the library syntax.

This case was the trivial one, but once you start using more advanced features, graphene starts diverging more and more from the `Schema Definition Language`, so following Design First on your API gets more difficult as developers may have a tendency to first code and then see what the generated schema is. I believe this ends deteriorating the final product (a.k.a The API).

Let's show an example of a more complex example with interfaces and unions to see how they look

```graphql
type Query {
    events: [Event!]!
}

interface Event {
    title: String!
    when: DateTime!
}

type Talk implements Event {
    speaker: Speaker!
}

type Workshop implements Event {
    prerequisites: String!
    max_participants: Int!
}

type Activity = Talk | Workshop | SponsorSlot
```

In Strawberry it looks like this

```python
from datetime import datetime

from typing import List
import strawberry


@strawberry.interface
class Event:
    title: str
    when: datetime

@strawberry.type
class Talk(Event):
    title: str
    when: datetime
    duration_in_minutes: int

@strawberry.type
class Workshop(Event):
    title: str
    when: datetime
    max_participants: int


@strawberry.type
class Query:

    @strawberry.field
    def events(self) -> List[Event]:
        return [
            Talk('One Talk', datetime.utcnow(), duration_in_minutes=30),
            Workshop('One Workshop', datetime.utcnow(), max_participants=50),
        ]


schema = strawberry.Schema(query=Query, types=[Talk, Workshop])

```

In graphene, interfaces are a little bit more weird as they don't use normal inheritance but a special attribute on the `Meta` class

```
from datetime import date, datetime
import graphene


class Event(graphene.Interface):
    title = graphene.String()
    when = graphene.DateTime()

    @classmethod
    def resolve_type(cls, instance, info):
        return instance.__class__.__name__


class Talk(graphene.ObjectType):
    class Meta:
        interfaces = (Event,)

    duration_in_minutes = graphene.Int()


class Workshop(graphene.ObjectType):
    class Meta:
        interfaces = (Event,)

    max_participants = graphene.Int()


class Query(graphene.ObjectType):
    events = graphene.List(Event)

    def resolve_events(root, info):
        return [
            Talk('Talk #1', datetime.utcnow(), duration_in_minutes=30),
            Workshop('Workshop #1', datetime.utcnow(), max_participants=50),
        ]


schema = graphene.Schema(query=Query, types=[Talk, Workshop])

```

It might be too subjective, but i find Strawberry's API much more intuitive and _pythonic_. Mainly due to the type hint + inheritance vs Custom Classes + Meta Class.

Another advantage of strawberry is it's builtin debug server that opens a graphiql instance to quickly explore and prototype your API.



In an effort to be as objective as possible i've enumerated the reasons why i believe strawberry is a better choice than graphene.

	- It favors **Design First** practices
	- It has an **Active Community**, while Graphene is looking for maintainers to recover from stagnation
	- It supports **async** resolvers
	- It supports **Apollo Federation**
	- It has **integrations with Django, Flask**, Sanic and many more Web Frameworks
	- Con: It's still not considered stable (v1.0.0)

## Design First

GraphQL has two main development philosophies. Mainly Schema First vs Code First. Many have written really extensible about that topic so i will not get into that but i leave some links here: #1 #2 #3

What i will say is that i'm a follower of the code first approach, but i recognise the advantage of writing the schema first in terms of avoiding coupling your schema to your fetching layer. In that sense, i really like strawberry as it's dataclasses are really similar to the final SDL. So as we're still using Code-First approach, we're not blocked by syntax if we want to follow a Design-First Approach.

I tried Ariadne, a Schema-First Python Library for GraphQL but i didn't find it intuitive or fast to prototype and develop. But you may think differently so take a look at that and decide for yourself! I recommend to do a small poc on both libs and see what's the experience like and how complete is the support for integrations with Django, SQLAlchemy, or any other software you may already be relying on. 

> So i like strawberry because it's Code First but helps following Design First practices unlike Graphene and offers better development experience than Ariande.

## Active Community

Discord with really helpful author and development team that helps diagnosing bugs, and is welcoming to new ideas and contributors.

To give a concrete example, the library internal code is being revamped by a user that's not the original author, and one of the main graphene maintainers has migrated his development efforts to strawberry. It seems the tide is turning :stuck_out_tongue:

On the other hand, Graphene has many unresolved issues and the v3 effort seems to be stagnated, lacking people to push the effort required to release the version. It seems working for free is not a viable model when the lib grows too complex to be enjoyable

## Async Support

Async is the new cool feature of Python. SQLAlchemy, Django, FastApi and most of the most popular libs are offering the possibility of being used in an async fashion.

I will not argue in favor or against using async for your API, but it's useful to have the possibility of doing it if your team decides it's the best choice

## Apollo Federation

 Apollo Federation is a paradigm to compose mutiple schemas into a single one without performance penalities. It's a spec that GraphQL servers must adhere too in order to be composed into a larger graph and strawberry supports it.

## Integrations

A not so minor detail is that you can easily use Strawberry with Django, Flask, or 



## :disappointed: It's still not v1

Although API will not have major changes as per the author words, it doesn't promise production stability yet. 

