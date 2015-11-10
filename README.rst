What the application must do
============================

The application must allow a user to add, list, modify and delete todos. A todo
is constituted by :

- An id (mandatory, generated)
- A title (mandatory)
- A status (new, to do, started, in review, done) (mandatory, default to new)
- A description (optional)
- A creation date (mandatory, automatically set)
- A modification date (mandatory, automatically set)
- An end date (optional)

#. Page one: activity feed. This page allows the user to:

   #. enter a todo.

   #. view the list of the 10 most recent to do (creation or modification
      date). Only the title of the to do are displayed. If the status of a to do
      is *done*, then its title is crossed.

#. Page two: list. This page allows the user to:

   #. Enter a todo
   #. List all todos. Only the title is displayed by default. Next to each
      title, there is a svg file containing three icons: view, edit,
      delete. When the use passes the mouse over one icon, it is highlighted. If
      the user clicks on it, the corresponding action happens.

#. Page three: the kaban list. This page allows the user to:

   #. Enter a todo
   #. Modify the status of a todo
