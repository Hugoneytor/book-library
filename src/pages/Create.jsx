import React, { useState } from 'react'
import { useAppContext } from '../store/Store';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [intro, setIntro] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const store = useAppContext();
  const navigate = useNavigate();

  const onHandleInputChange = ( e, state ) => {
    state(e.target.value)
  }

  //FUNCION PARA SUBIR IMAGEN AL NAVEGADOR
  const onHandleOnchangeFile = (e) => {
    const element = e.target;

    const file = element.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setCover(reader.result.toString())
    }
  }
  
  const onHandleCompleted = (e) => {
    setCompleted(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    }

    //TODO para registrar libro
    store.createItem(newBook)
    navigate("/")
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input type="text" onChange={(e)=>onHandleInputChange(e, setTitle)} name="title" value={title}/>
        </div>
        <div>
          <div>Author</div>
          <input type="text" onChange={(e)=>onHandleInputChange(e, setAuthor)} name="author" value={author}/>
        </div>
        <div>
          <div>Cover</div>
          <input type="file" onChange={onHandleOnchangeFile} name="cover"/>
          <div>{ cover ? <img src={cover} width="200" alt="Preview"/> : ''}</div>
        </div>
        <div>
          <div>Introduction</div>
          <input type="text" onChange={(e)=>onHandleInputChange(e, setIntro)} name="intro" value={intro}/> 
        </div>
        <div>
          <div>Completed</div>
          <input type="checkbox" onChange={onHandleCompleted} name="completed" value={completed}/> 
        </div>        
        <div>
          <div>Review</div>
          <input type="text" onChange={(e)=>onHandleInputChange(e, setReview)} name="review" value={review}/>
        </div>
        <input type="submit" value="Register book"/>
      </form>
    </Layout>
  )
}

export default Create