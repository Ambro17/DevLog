from typing import List
import datetime
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
    topic: str
    title: str
    preview: str
    reading_time: int
    content: str
    published_on: datetime.datetime
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