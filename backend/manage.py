# Collect all static posts
from devlog.schema import schema

schema.execute_sync(
    """
    {
        posts {
            
        }
    }
    """
)