import React from 'react'
import Book from '../components/Book'
import Layout from '../components/Layout'
import { useAppContext } from '../store/Store'

const Index = () => {
  const store = useAppContext();

  const booksContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: "10px",
  }

  console.log(store.items)

  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.map((item)=>{
          return <Book key={item.id} item={item}/>
        })}
      </div>
    </Layout>
  )
}

export default Index