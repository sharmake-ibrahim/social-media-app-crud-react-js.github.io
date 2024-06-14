import { useState } from 'react'

import './App.scss'

function App() {
  const [texts, setTexts] = useState([]);
  const [newTxt, setNewTxt] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = ()=> {
    if(newTxt === "") {
            setTexts( (pretxt)=> [...pretxt])
            setIsOpen(!isOpen);
    }  else {
      setTexts([...texts, newTxt]);
    } 

    setNewTxt("");
    
  }

    const handleDelete = (index)=> {
        setTexts(texts.filter((_, i)=> i !== index));
    }

    const handleUpdate = (text, index)=> {
      setNewTxt(text);
      setTexts(texts.filter( (_, i)=> i !== index))
    }

  return (
    <section>
      

        <article>
        <h1>Social Media App</h1>
              <div className="right-div">
                <p>Write your post here</p>
                <div className= { `pop-up ${isOpen ? "show" : ""}`}>
                  <p> Your input is empty !!!</p>
                </div>
                <textarea 
                value={newTxt}
                onChange={ (e)=> setNewTxt( e.target.value) }
                >

                </textarea>
                <button className='post-btn' onClick={handleClick}> Post</button>
              </div>
              
              <div className='left-div'>
                <h2>Your posts here</h2>

                {texts.map( (text, index)=>{
                      return(
                        <div className="displaytxt" key={index}>
                        <p> {text}</p>
                        <button onClick={()=>  handleUpdate(text, index)}>edit</button>
                        <button onClick={()=> handleDelete(index)}>delete</button>
                      </div>
                      )  
                     
                })}
                
              </div>
        </article>
    </section>
  )
}

export default App
