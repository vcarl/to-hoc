# ToHoc

Convert render props to higher order components.

```js
// Takes a render prop, like <RenderButts render={({ butts }) => } />
const RenderButts = ({render}) =>
  <div>{render({butts: 'many'})}</div>

// Convert it to a higher order component
const WithButts = ToHoc(RenderButts)

// Helper component that renders all its props as a list
const ShowProps = (props) =>
  <ul>
    {Object.keys(props).map(x => <li>{x}: {JSON.stringify(props[x])}</li>)}
  </ul>

const ShowButts = WithButts(ShowProps)
```

Now we have `ShowButts` that's wrapped in a `WithButts` higher order component. This is essentially the code from [react-router's `WithRouter` HOC](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/withRouter.js), but generalized for any component that expects a `render` prop.

