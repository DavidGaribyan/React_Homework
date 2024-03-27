import { createContext } from 'react';
import Button1 from './button1.jsx';
import Main1 from './main1.jsx';
export const context1 = createContext(null);

export default function comp1() {
  return (
    <>
      <context1.Provider value={'aaaaaaaaaaaaaa'}>
        <div>
          <Button1 />
          <Main1 />
        </div>
      </context1.Provider>
    </>
  );
}
