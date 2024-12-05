import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponents from './MyRecipesComponent';



//https://api.edamam.com/api/recipes/v2?type=user&q=avocado&app_id=e9229251&app_key=d3f0afa463de730e402670194047e66b

function App() {

const MY_ID = "e9229251";
const MY_KEY = "d3f0afa463de730e402670194047e66b";
 
const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);


useEffect(() => {
const getRecipe = async () => {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=user&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
setMyRecipes(data.hits);
}
getRecipe()
}, [])


const myRecipeSearch = (e) => {
  console.log(e.target.value)
 setMySearch(e.target.value)
}

  return(
  <div className="App">
   <div className="container">
    <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
   </div>

   <div className="container">
     <form>
         <input className='search' onChange={myRecipeSearch} value={mySearch}/>
     </form>
   </div>

   <div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
   </div>

   {myRecipes.map(element => (
    <MyRecipesComponents/>
   ))}

  </div>
  );
}

export default App;
