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

  const inputStyles = {
    formContainer : {
      width: "400px",
      margin: "0 auto",
    },
    container : {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title : {
      fontSize: "16px",
      textAlign: "left",
      color: "white",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  }

  const buttonStyle = {
    padding: "15px 20px",
    minWidth: "200px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1e9638",
    color: "white",
    fontWeigth: "bolder",
    fontSize: "18px",
  }

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
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
            <div style={inputStyles.title}>Title</div>
            <input style={inputStyles.input} type="text" onChange={(e)=>onHandleInputChange(e, setTitle)} name="title" value={title}/>
        </div>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Author</div>
          <input style={inputStyles.input} type="text" onChange={(e)=>onHandleInputChange(e, setAuthor)} name="author" value={author}/>
        </div>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input style={inputStyles.input} type="file" onChange={onHandleOnchangeFile} name="cover"/>
          <div>{ cover ? <img src={cover} width="200" alt="Preview"/> : ''}</div>
        </div>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Introduction</div>
          <input style={inputStyles.input} type="text" onChange={(e)=>onHandleInputChange(e, setIntro)} name="intro" value={intro}/> 
        </div>
        <div>
          <div style={inputStyles.title}>Completed</div>
          <input type="checkbox" onChange={onHandleCompleted} name="completed" value={completed}/> 
        </div>        
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Review</div>
          <input style={inputStyles.input} type="text" onChange={(e)=>onHandleInputChange(e, setReview)} name="review" value={review}/>
        </div>
        <input style={buttonStyle} type="submit" value="Register book"/>
      </form>
    </Layout>
  )
}

export default Create