import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);



  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item, 
    saveItem, 
    loading, 
    error,
    };
}

export { useLocalStorage }

// localStorage.removeItem('TASK_V1');

// const defaultTask = [
//   { text: 'To cut onions', completed: true },
//   { text: 'You do homework', completed: false },
//   { text: 'Cry with the Crybaby', completed: true },
//   { text: 'Your do clean your Carrot', completed: false },
//   { text: 'Onions', completed: true },
// ];

// localStorage.setItem('TASK_V1', JSON.stringify(defaultTask));

