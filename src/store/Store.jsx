import React, {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});


const Store = ( { children } ) => {

  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      title: "Harry potter and the deathly hallows",
      author: "J.K Rowling",
      cover: "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg",
      intro: "A fantasy story to enjoy in your free time",
      completed: false,
      review: "It is a very good book. I'm really looking forward to reading another one",
    },
    {
      id: crypto.randomUUID(),
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      cover: "https://m.media-amazon.com/images/I/71YoFJSz3LL.jpg",
      intro: "Magical realism",
      completed: true,
      review: "The best book I have ever read",
    },
    {
      id: crypto.randomUUID(),
      title: "The Lord of the Rings",
      author: "J.R.R Tolkien",
      cover: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71VjmMcE-rL.jpg",
      intro: "A fantastic story that will blow your mind",
      completed: false,
      review: "It's the best book of the saga",
    },
    {
      id: crypto.randomUUID(),
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      cover: "https://m.media-amazon.com/images/I/91n1850EZaL.jpg",
      intro: "A book that all the people should know",
      completed: false,
      review: "It's the best book to introduce kids to reading more",
    },
    
  ]);

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