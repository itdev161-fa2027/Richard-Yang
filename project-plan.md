# Final Project Plan

## Milestone 1: Plan

Path: B

### Enhancement: Search Function

What the user will see:
Users will see a search box on the home page that allows them to search for blog posts. A clear button will reset the search, and a message will appear when no posts match.

Back-end changes: 
Update GET /api/posts to accept a search query parameter. Search both the title and body fields. Return every post when the parameter is empty or missing

Front-end changes:
Add a search input and a clear button to Home.jsx, or create a SearchBar.jsx component. Update getPosts in api.js to send the search text

New packages: None

What I will test:

- Search results refresh once the user stops typing.
- Posts are found when the search term appears in the title & body
- Search is case-insensitive & special characters
- Clicking the clear button displays all posts again.
- A message is displayed when no matching posts are found.


### Enhancement: Post Categories 

What the user will see:
Users will be able to select a category when creating or editing a blog post. The home page will include a category filter that allows users to display posts from a specific category or select "All" to see every post. Selected category will appear on page.

Back-end changes: 
Add a category field to the Post schema. Add category to the validation on the POST and PUT post routes. Update GET /api/posts to filter by a query parameter


Front-end changes:
Add the category select to PostForm.jsx. Display the category in PostCard.jsx and PostDetail.jsx. Add filter buttons or a select to Home.jsx

New packages: None

What I will test:

- Users can select a category when creating or editing a post.
- The selected category appears on post cards and individual post pages.
- Selecting a category filter displays only posts assigned to that category.
- Selecting "All" displays posts from every category.
- Posts created before categories were added continue to display correctly.


### Task List

1. Verify that Activity 9 works correctly and previous work is merged into main - Project Week 1
2. Create the final-project branch and project-plan.md - Project Week 1
3. Implement the Search functionality, including title and body searching - Project Week 2
4. Implement the Search front-end functionality, including the search input, clear button,and error messages - Project Week 2
5. Add the category field to the Post schema and implement category validation and filtering in server.js - Project Week 3
6. Update PostForm.jsx, PostCard.jsx, and PostDetail.jsx to support categories functionalities - Project Week 3
7. Test Search and Post Categories together, verify existing blog features still work, and fix any remaining issues - Project Week 4
8. Record the required 1–3 minute demonstration video - Project Week 4
9. Git commits, push final changes, and merge final-project into main - Project Week 4

### Questions or Risks

I am worried how efficient the implementations would be since I feel like I may add a lot more unnecessary things to them. Another concern is how to deal with posts that were created before the category function is added. One way I could try to fix this problem is simply removing them or find a way to put them as their own category, for example "Uncategorized". Another concern is using both the search and category functions at the same time. I find this quite difficult and it can cause another unexpected outcome.

## AI Usage

Tools: ChatGPT

What I used them for: 
- Helped clarify concepts so I could better understand the implementation.

How I checked the result: 
- Reviewed both enhancements met project requirements
- Reviewed the code to make sure I understood
