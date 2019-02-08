# Review and Hack Day

## Agenda

* `JSON.parse` and `JSON.stringify`
  * `JSON.stringify` an object
  * `JSON.stringify` an array
  * `JSON.parse` to an object
  * `JSON.parse` to an array
* `window.localStorage`
  * `window.localStorage.setItem`
  * `window.localStorage.getItem`
  * `window.localStorage.removeItem`
  * `window.localStorage.clear`
* Array `.push`
* `window.location`
  * `window.location.hostname`
  * `window.location.pathname`
  * `window.location.search`
  * `URLSearchParams`
* git
  * fork?
  * branch?
  * travis?
* TDD

## Git and GitHub

Git it a distributed version control system. It is a tool used to manage the changes
made to a software project. It allows us to see who made changes and what changes they
made. Additionally, it allows us to rollback changes to an earlier state.

It is designed to allow multiple developers to work on the same project by managing how
changes will `merge` together.

GitHub is a place to store git projects. In addition, GitHub provides a nice UI on top
of git.

### Fork

When you want to make changes to a GitHub repository that you don't own, you must
fork that repository. Forking is a way to copy all the current code in a repository
and create a new repository under your ownership.

### Branch

Branching is a way to take the current code in your repository and make changes to
that code without effecting the code on other branches.

### Pull Requests

Pull requests allow us to review code made by other developers before we merge it into
our main code base.

### Travis

Travis is a tool we use to automatically run our tests. Eventually it will be used
to automatically deploy our code if all tests pass.

## TDD

Test Driven Development is a development process.

1. A developer writes a (failing) test that specifies how some code should work.
1. After a test is written, code is written to make the test pass.
1. After the test passes, we refactor our code.

## Hack day ideas

* Rewrite coin-toss, but keep track of wins and loses
  * use localStorage to store wins and loses
* Create an inventory tracker
  * `inventory.html` - displays a list of all items
    * STRETCH: provide an optional query string that allows to filter
      the list of items by category. For example, `?category=food`
      would only display items with the food category
  * `create-item.html` - create a new inventory item (name and category)
  * `item-detail.html` - display the items details (name, category, and quantity)
    * have a button to decrease the quantity
    * have a button to increase the quantity
    * have a button to delete the item
    * STRETCH: have a button to update the item
* Create a blog
  * `posts.html` - display a list of posts by title
  * `create-post.html` - create a new post (title and body)
  * `post-detail.html` - display a post's title, body and list of comments
    * at the bottom of the post have a form with a `<textarea>`
    * when the form is submitted add a comment to an array of comments
    * display a list of all added comments
    * HINT: a post object looks like:
    ```js
    {
      title: 'My First Post'
      body: 'I like blogging'
      comments: ['great post!', 'Wow great read']
    }
    ```
* **HARD**: Refactor job-site
  * change how job-site uses localStorage
  * instead of storing an array in the `applicants` key, store
    a new entry for every job applicant.
    (i.e. `window.localStorage.setItem('applicant1', applicant)`,
    `window.localStorage.setItem('applicant2', anotherApplicant)`)
  * use `window.localStorage.key` and `window.localStorage.length`
    to iterate through all applicants
    ```js
    for(let index = 0; index <= window.localStorage.length; index++) {
      const json = window.localStorage.key(index);
      const applicant = JSON.parse(json);
    }
    ```
