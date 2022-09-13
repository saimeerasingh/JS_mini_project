import React,{ useState,useRef } from "react";

const FormContainer = () => {

    const [userName, setUserName] = useState("");
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState('cat')
    const [petImage, setPetImage] = useState("")
    const imageRef = useRef();
    const handleNameChange = (event) => {
      setUserName(event.target.value);  
    }

    const handlePetNameChange = (event) => {
        setPetName(event.target.value)
    }

    const handlePetTypeChange = (event) => {
        const target = event.target;
    if (target.checked) {
      setPetType(target.value);
    }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        getPetImage();
    }

    const getPetImage = function(){
       
        if(petType == 'dog'){
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setPetImage(data.message))
        } else{
            console.log('the else block')
            fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => setPetImage(data.message))
            
        }
     }

        
        

    return(
     
        <form onSubmit={handleOnSubmit}>
        <label>
        Your Name <input type= "text" value={userName} onChange={handleNameChange}/> 
        </label>
        <label>
        Your Pet's Name  <input type="text" value={petName} onChange={handlePetNameChange}/>  
        </label>
        
        <input
          type="radio"
          value="dogs"
          checked={petType === 'dog'}
          onChange={handlePetTypeChange}
        /> Dog
        
        <input
          type="radio"
          value="cats"
          checked={petType === 'cat'}
          onChange={handlePetTypeChange}
        /> Cat
        <input type="submit" onChange={handleOnSubmit}/>
        <img id="pet-img" src={petImage} />
        
        </form>
     
    )


}

export default FormContainer;