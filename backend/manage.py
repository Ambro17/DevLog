# Collect all static posts
import json
from pathlib import Path

from devlog.schema import schema

DATA = Path(__file__).parent / 'data'


def save_posts():
    result = schema.execute_sync(
        """
        {
            posts {
            topic
            title
            preview
            readingTime
            content
            author {
                name
            } 
            }
        }
        """
    )
    if result.errors:
        raise ValueError(result.errors[0].message)

    with open(DATA/'posts.json', 'w', encoding='utf-8') as f:
        json.dump(result.data['posts'], f, indent=4, ensure_ascii=False)


save_posts()