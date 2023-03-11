import React from 'react'
import Book from '../components/Book'
import Layout from '../components/Layout'
import { useAppContext } from '../store/Store'

const Index = () => {
  const store = useAppContext();


  
  return (
    <Layout>
      {store.items.map((item)=>{
        return <Book key={item.id} item={item}/>
      })}
    </Layout>
  )
}

export default Index