
import Navbar from '../components/Navbar'
import {Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const SingleBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [book,setbook ] = useState([])
    const fetchBook = async ()=>{
        const response = await axios.get(`http://localhost:3000/book/${id}`)
        if(response.status === 200){
            setbook(response.data.data)
        }
    } 
    useEffect(()=>{
        fetchBook()
    },[])
    
    
    const  handleDelete = async()=> {
          const api =`http://localhost:3000/book/${id}`;
          const response = await axios.delete(api)
          if(response.status === 200){
            alert('the boot has been deleted')
          }
          setbook(((value)=>{
            value.filter((data)=>{
              return data.id !== id
            })
          }))
          navigate("/")
    }
    
  return (
    <>
    <Navbar/>


      <img className=" mt-20 w-100 h-40 " src= {book.imageUrl ? book.imageUrl : "https://th.bing.com/th/id/OIP.S1Acr290KfA4gxDLDvKojwHaE8?w=284&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">
         Rs. {book.bookPrice}
        </p>
        <p className="text-black-700 text-base">
          {book.isbnNumber}
        </p>
        <p className="text-black-700 text-base">
          {book.isbnNumber}
        </p>
        <p className="text-black-700 text-base">
          {book.authorName}
        </p>
        <button className='bg-blue-300 p-2' onClick={handleDelete}>Delete</button>
        <br />
        <Link to={`/editBook/${book._id}`}>
        <button className='bg-blue-300 p-2 mt-5'>Edit</button>
        </Link>
        
      </div>
    
    </>
  )
}

export default SingleBook