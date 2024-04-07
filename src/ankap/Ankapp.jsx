import { useState } from 'react';

export default function Ankap({ to, linkName, children, elementt }) {
  const [element, setElement] = useState(children);

  const handleRoute = (e) => {
    e.preventDefault();
    setElement(elementt);
  };
  return (
    <>
      <div>
        <button href={to} onClick={handleRoute}>
          {linkName}
        </button>
        {element}
      </div>
    </>
  );
}
