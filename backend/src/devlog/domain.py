from typing import List
import strawberry


@strawberry.type
class Me:
    name: str
    intro: str
    about: str


@strawberry.type
class Author:
    name: str


@strawberry.type
class Post:
    title: str
    content: str
    author: Author


@strawberry.type
class Talk:
    title: str
    description: str
    tags: List[str]
    video_url: str


@strawberry.type
class Project:
    name: str
    description: str
    url: str