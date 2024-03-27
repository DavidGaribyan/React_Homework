import { useContext, useState } from 'react';
import { context1 } from './comp1';
export default function Button1() {
  let theme = useContext(context1);
  let [state, setState] = useState(theme);
  return (
    <>
      <button
        onClick={() => {
          setState('hello');
          console.log(state);
        }}
      >
        click
      </button>
    </>
  );
}
