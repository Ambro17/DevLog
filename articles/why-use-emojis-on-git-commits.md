# Why i use emojis on my git commits

Hello, today i will explain when i started adding emojis to my commits and why i believe it's a great idea to do it

I don't like reading long texts so i'll keep it compact.

I first heard of this idea when a visiting a github repo and it was full of them. After some exploration i discovered [gitmoji](https://gitmoji.dev/) was the origin of all those colorful icons.

So i went ahead and tried to create my own subset of them because i felt they were too many and i wouldn't remember all of them.

The emojis i use the most are:

🔧 When i fix something that wasn't working

✨ When i add a new feature

 📚 When i add some documentation

🖌️ When i add some style changes to my code

🔄 When i merge one branch into another

🧹 When i clean up dead code/comments

🐞 When i fix a bug

🏗 When i commit code that is work-in-progress



**The main reason i do this is because commit messages must be readable and semantic.** Good phrasing is a great step to have an explorable git history, and having images/emojis is another step on the same direction. 

With emojis, it's quicker for me to read the git history and choose which commits i should pay attention to  instead of having to read each message, perhaps see the diff, and then judge if it's relevant or not

There are also [other conventions](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) that use a prefix instead like `fix:` but i like emojis a little more because colors are more recongnisable and take less time than reading (even a few chars), and also, they look much nicer!

**Prefixes are for machines, emojis are for humans :)**



At last, i wanted to share my git `commit-msg` hook that replaces my placeholders for the relevant emoji to write my commit messages more quickly. So if i write a commit message like `:bug: some message` i get `🐞 some message` as a result

```python
#!/usr/bin/python3.6
import re


full_regex = re.compile(
    r'(:(wip|new|fix|bug|art|tdd|doc|merge|rock):)',
    re.IGNORECASE
)

replacement_icons = {
    'wip': '🏗',
    'new': '✨',
    'fix': '🔧',
    'bug': '🐞',
    'art': '🖌️',
    'tdd': '✔️',
    'merge': '🔄',
    'doc': '📚',
    'rock': '🚀',
    'clean': '🧹'
}

# the commit message is saved into a file that is
# passed as the first argument to the commit-msg hook
message_filepath = sys.argv[1]


def add_commit_intention(commit_file):
    with open(commit_file, 'r') as f:
        commit_message = f.read()

    for match in set(full_regex.findall(commit_message)):
        full_match = match[0]
        icon_name = match[2]
        commit_message = commit_message.replace(
            full_match,
            replacement_icons[icon_name.lower()],
        )

    with open(commit_file, 'w') as f:
        f.write(commit_message)


add_commit_intention(message_filepath)
```

With that setup i can get more explorable commits for merge requests and also i find the important changes to a file quicker when i can filter all those changes that are cosmetic and leave only the ones that add functionality.

This is an example of how the commits look on one of my projects :) 

![image-20210226193757293](/home/nambrosini/.config/Typora/typora-user-images/image-20210226193757293.png)



Hope you give it a try and see if it helps you too, see you on next post 😉