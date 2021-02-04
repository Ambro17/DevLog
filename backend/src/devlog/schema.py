from typing import List
import strawberry
from pathlib import Path


@strawberry.type
class Author:
    name: str

@strawberry.type
class Post:
    title: str
    content: int
    author: Author


@strawberry.type
class Query:

    @strawberry.field
    def posts(self) -> List[Post]:
        return [Post(title="Ambro", content='Lorem Ipsum')]

    @strawberry.field
    def post_by_id(self, id: str) -> Post:
        return Post(title="Ambro", content='Lorem Ipsum')


schema = strawberry.Schema(query=Query)

schema_file = Path(__file__).parent / 'schema.gql'
with schema_file.open(mode='w+', encoding='utf-8') as f:
    f.write(schema.as_str())