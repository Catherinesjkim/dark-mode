// ## STEP 1 - useLocalStorage
// Write a custom hook that sets this class on the body tag. 
// That hook is going to compose a `useLocalStorage` inside it to accomplish that
// Let's write the localStorage one first.
/* This is going to be a pretty cool hook. It will be used pretty much the same way as `useState`, but with a key and value passed into it - ie `const [name, setName] = useLocalStorage('name', 'Dustin')`. You can use `setName` to update the value of `name` on localStorage!
- Create a new directory called `hooks`, and a new file in it called `useLocalStorage`.
- Build a function called `useLocalStorage`. Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add `key` and `initialValue` as parameters to the hook. */

import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error(
      'Invalid Parameters: useLocalStorage should receive a string for the first argument'
    );
  }

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    catch(error){
      return (storedValue)
    }
  });

  const setValue = value => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue];
};


