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

Open `src/UseEffect.js` and practice.

## Cleanup

`useEffect` also has a way to perform cleanups. This is useful when a dependency changes and invalidates the side effect or when the component goes out of scope. Cleanup happens [before](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect) the next effect is executed.

For example, let's say we have a chat application and we wanted to subscribe to all the messages going into a channel.

```jsx
import { client } from 'some-chat-application-library';

const ChatLog = (props) => {
  const [messages, setMessages] = useState([]);
  const channelId = props.channelId;

  useEffect(() => {
    const subscription = client.subscribe(channelId, (message) => {
      setMessages((messages) => [...messages, message]);
    });
    return () => {
      // When the channelId changes, we no longer want to receive notifications
      // about the old channelId.
      subscription.unsubscribe();
      setMessages([]);
    };
  }, [channelId]);

  return (
    <ul>
      {messages.map((message) => <li key={message.id}>{message.text}</li>)}
    </ul>
  );
};
```

Another example is using `setInterval`. You don't want the interval to run when the component goes out of scope.

```jsx
const SecondsAgo = () => {
  const [secondsAgo, setSecondsAgo] = useState(0);

  // NOTE: An empty dependency array will cause the effect to only be run once.
  // the cleanup will run when the component goes out of scope.
  useEffect(() => {
    const startMs = Date.now();
    const handle = setInterval(() => {
      const endMs = Date.now();
      const ms = endMs - startMs;
      const sec = Math.round(ms / 1000);
      setSecondsAgo(sec);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return <div>{secondsAgo} seconds ago</div>;
};
```

### YOUR TURN

Open `src/Cleanup.js` and practice.

## Custom Hooks

Hooks are highly composable and portable. This means you can create your own hooks and use them in several different components.

```jsx
const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => {
    setValue((value) => !value);
  }, [])

  return [value, toggle];
};

const Foo = () => {
  const [value, toggle] = useToggle();

  return (
    <>
      <div>value: {value}</div>
      <button onClick={toggle}>toggle</button>
    </>
  );
};

const Bar = () => {
  const [value, toggle] = useToggle(true);

  return (
    <>
      <div>value: {value}</div>
      <button onClick={toggle}>toggle</button>
    </>
  );
};

```

However, React has rules you must follow when creating and using hooks. Open and bookmark https://reactjs.org/docs/hooks-rules.html.

Read it once. Read it twice. Try to explain it in your own words.

Violating these rules will lead to _undefined_ behavior. Sometimes it might work favorably, but often times it will not. There's also no guarantee that it will continue working as libraries change.

### YOUR TURN

Open `src/CustomHooks.js` and practice.
