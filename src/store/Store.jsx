import React, {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});


const Store = ( { children } ) => {

  const [items, setItems] = useState([]);

  const createItem = (item) => {
    setItems([...items, item])
  }
  const getItem = (id) => {
    const item = items.find( (book) => book.id === id )

    return item;
  }

  const updateItem = (item) => {
    const index = items.findIndex( (i) => i.id === item.id)
    
    const temp = [ ...items ];
    temp[index] = { ...item };
  }

  return (
    <AppContext.Provider value={{
      items,
      createItem,
      getItem,
      updateItem
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(){
  return useContext(AppContext)
}

export default Store;