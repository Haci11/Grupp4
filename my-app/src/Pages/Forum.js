<<<<<<< HEAD
=======

>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import CategoryTable from '../CategoryTable';
import Threads from '../Threads';
import Comments from '../Comments';
//import {Link} from 'react-router-dom';




const Forum = () => {


  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState (true)
  
  useEffect(() => {
     const fetchItems = async () => {
       const result = await axios(`https://forum-api-jkrop.ondigitalocean.app/sandbox/Group4/category
       `)

       console.log(result.data)

       setItems(result.data)
       setIsLoading(false)
     }

     fetchItems()
  },  [])
  
  return (
      <div className='container'>
<<<<<<< HEAD
=======
          <h1>Category List</h1>
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
          <CategoryTable isLoading={isLoading} items={items} />
          <Threads />
          <Comments/>
          
        
      </div>
    ) 
  }
    
  
  export default Forum;