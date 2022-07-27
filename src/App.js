import React, {useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() { 
  const [count, setCount] = useState(0)
  const [name,setName] = useState('josh')
  const [post,setPost] = useState([])
  const [movies,setMovies] = useState([])
  const changeName = () =>{
    setName('kim')
  }
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    setCount(count-1)
  }
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      setPost(response.data);
      console.log(response.data)
    })
    console.log("comonent rendered")
  }, [])
  useEffect(() => {
    Axios.get("https://api.themoviedb.org/3/movie/550?api_key=999bbd53fa99dbb16324841ca2c577a1").then((response)=>{
      setMovies(response.data.production_companies);
      console.log(response.production_companies)
    })
  }, [])
  // https://api.themoviedb.org/3/movie/550?api_key=999bbd53fa99dbb16324841ca2c577a1
  
  return (
    <div className="App">
      <Navbar />
      <ul>
        {
          post.map(post => <li key={post.id}>{post.title}</li>
          
          )
        }
      </ul>
      <ul>
        {
          movies.map(movies => <li key={movies.id}>{movies.name}</li>
          
          )
        }
      </ul>
      <p>COUNT IS {count}</p>
    
      <p>chnage my name {name}</p>
      <button onClick={changeName} className='btn btn-warning'>changename</button>
      <button onClick={increment} className='btn btn-success'>add</button>
      <button onClick={decrement} className='btn btn-danger'>minus</button>
      <Product name='Iphone6 Pro'image='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-plus-03.jpg' description='The best phone in town' price='$1000' />
      <Product name='Iphone9 Pro' image="https://www.ryanandtroy.com/wp-content/uploads/2022/05/IPhone-11-Pro-256-GB-Space-Grey-510x510.png" description='ngori sana' price='$2000' />
      <Product name='Iphone10 Pro' image='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg' description='The badest of dem all' price='$4000' />
      <Product name='Iphone12 Pro'image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022219953'description='kitu safi' price='$6000' />
      
    </div>
  );
}

export default App;
