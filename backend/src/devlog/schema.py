import textwrap
from pathlib import Path
from typing import List

import strawberry

from devlog.domain import Author, Me, Post, Project, Talk


@strawberry.type
class Query:

    @strawberry.field
    def posts(self) -> List[Post]:
        return [
            Post(
                topic='Python',
                title="Ambro",
                preview='...',
                content='Lorem Ipsum',
                reading_time=5,
                author=Author('Me')),
            ]



schema = strawberry.Schema(query=Query)


schema_file = Path(__file__).parent / 'schema.gql'
with schema_file.open(mode='w+', encoding='utf-8') as f:
    f.write(schema.as_str())
