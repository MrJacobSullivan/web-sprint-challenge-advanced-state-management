# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

```
The Context API helps to solve managing application state. It can be used in place of a third party library such as Redux which can be cumbersome and verbose.
```

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

```
Actions are the specific ways the application data can be manipulated and replaced.
Reducers are the functions used to replace old state with new state. Reducers use actions to determine the new state.
Store is the state storage container. It contains the immutable state of the application.
```

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

```
redux-thunk is middleware that allows action-creators to return functions as well as actions.
```

4. What is your favorite state management system you've learned in this sprint? Please explain why!

```
I really like the Context API. Using Context API along with custom hooks seems so much more powerful than Redux.
```
