import textwrap
from pathlib import Path
from typing import List

import strawberry

from devlog.domain import Author, Me, Post, Project, Talk


@strawberry.type
class Query:

    @strawberry.field
    def me(self) -> Me:
        return Me(
            name='Nahuel',
            intro=textwrap.dedent("""\
                I'm a software engineer who ❤ Python & GraphQL.
                📚 My programming interests are now mainly focused on
                API Design, Serverless Architectures, and DevOps
                💼 I currently work at Onapsis as a Sr Python Developer
                And on my free time i like to learn Frontend development with Vue 🧪
            """),
            about=textwrap.dedent("""\
                I'm a software engineer who loves to work on complex problem domains, 
                follower of Domain Driven Design (DDD) practices because i believe 
                it helps to generate a synergic workflow between project owners and developers.
                Having deep domain knowledge and a good communication system helps delivering high quality software,
                that's flexible to changes, and has predictable delivery times.
            """)
        )

    @strawberry.field
    def posts(self) -> List[Post]:
        return [Post(title="Ambro", content='Lorem Ipsum', author=Author('Me'))]

    @strawberry.field
    def post_by_id(self, id: str) -> Post:
        return Post(title="Ambro", content='Lorem Ipsum', author=Author('Me'))

    @strawberry.field
    def talks(self) -> List[Talk]:
        return [
            Talk(
                title='Pythonic APIs with GraphQL',
                description='Build easy to use APIs with GraphQL',
                tags=['Python', 'GraphQL', 'API', 'Design'],
                video_url='https://www.youtube.com/watch?v=ePSRREuTZq4'
            )
        ]

    @strawberry.field
    def projects(self, id: str) -> List[Project]:
        return [Project(name='Slackify', description='Build modern slack bots', url='https://github.com/Ambro17/slackify')]


schema = strawberry.Schema(query=Query)


schema_file = Path(__file__).parent / 'schema.gql'
with schema_file.open(mode='w+', encoding='utf-8') as f:
    f.write(schema.as_str())
