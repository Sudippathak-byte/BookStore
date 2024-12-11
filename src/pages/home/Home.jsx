
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Home = () => {
  const [books,setBooks] = useState([])
  const fetchBooks = async()=>{
   const response = await axios.get('https://node-module-crud-1.onrender.com/book')
   if(response.status === 200){
    setBooks(response.data.data)
   }
   
  }

   useEffect(()=>{
     fetchBooks()
   },[])
   console.log(books)
  return (
    <>
        <Navbar/>
        <div className='flex flex-wrap justify-evenly mt-24'>
         {
          books.length > 0 && books.map((book)=>{
            return(
              <Card book={book}/> 
            )
          })
         }
        </div>
    </>

  )
}

export default Home