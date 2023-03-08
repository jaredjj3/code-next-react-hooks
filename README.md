# code-next-react-hooks

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-hooks)

In this lesson, engineers will

- learn hooks provided from React
- know the Rules of Hooks
- know how to compose their own hooks

## useEffect

The next most important hook at readily at your disposal is the `useEffect` hook. It's used to cause side effects in your application.

>NOTE: You can see the hooks React provides in the [React docs](https://reactjs.org/docs/hooks-reference.html).

```jsx
const Foo = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  const [taken, setTaken] = useState(false);

  const take = () => {
    setTaken(true);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTotal(Math.pow(2, count));
  }, [count]);

  return (
    <div>
      <div>count: {count}</div>
      <div>total: {total}</div>
      <div>status: {taken ? 'TAKEN' : 'NOT TAKEN'}</div>

      <br />

      <button disabled={taken} onClick={take}>
        take it
      </button>
      <button disabled={taken} onClick={incrementCount}>
        double it and give it to the next person
      </button>
    </div>
  );
};
```

Notice that `useEffect` takes two parameters. The first one is a function that contains effectful code, and the second one is a dependency array. The dependency array should contain the state that should trigger the function when the value _changes_. If all the values in the dependency array are the same, the effectful code will not run.

### YOUR TURN