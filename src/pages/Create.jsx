import React, { useState } from 'react'

const Create = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [intro, setIntro] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const onHandleInputChange = ( e, state ) => {
    const name = e.target.name;
    console.log(name)
    state(e.target.value)
  }
  const onHandleOnchangeFile = () => {

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
  }

  return (
    <div>
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
          <div></div>
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
    </div>
  )
}

export default Create