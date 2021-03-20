# New Post
When adding a new post we should follow this steps:
0. Write the blogpost itself in markdown format
1. Extract html from that 

For now, typora seems the best solution for that as it has a great writing experience and it exports to unstyled html easily
2. Store html statically inside the repo
3. Run `make collect-articles` to dump those htmls into a vue-compatible format
...
4. Run `make frontend` and check post styling, and post listing result
5. Adjust styles until it looks nice.
6. Push to production with `git push`
7. Check new version at www.nambrosini.com.ar