import { useState } from "react";
import '../../styles/CreateMeme.css'
import memesData from './memesData.json';


const CreateMemes = () => {
 
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "and take my money!",
    randomImage: "http://i.imgflip.com/3si4.jpg",
  });
  const [allMemes, setAllMemes] = useState(memesData.data.memes);
 
  function getMemeImage() {
 
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function changeText(event){
  const {name, value } = event.target;
  setMeme(prevText =>({
    ...prevText,
    [name]: value,
  }))
  }

  return (
    <div className="content-container">
      <div className="input-container">
        <input
        name="topText"
        value={meme.topText}
        onChange={changeText}
        maxLength={30}
        className="input-left"></input>
        <input
        name="bottomText"
        value={meme.bottomText}
        onChange={changeText}
        maxLength={30}
        className="input-right"></input>
      </div>
      <button onClick={getMemeImage} className="btn-meme">
        Get a new meme image       
      </button>
      <div className="image_meme_container">
      <h1 className="image_meme_first_phrase" >{meme.topText}</h1>
      <h1 className="image_meme_second_phrase">{meme.bottomText}</h1>
      <img
        src={meme.randomImage}
       
        className="img-content"
        alt=" just a meme"
      />
      
      </div>
     
    </div>
  );
}

export default CreateMemes;