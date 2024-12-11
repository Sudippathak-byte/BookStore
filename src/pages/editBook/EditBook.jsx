import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"



 const EditBook = () => {
    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate()
    const [data,setData] = useState({
        bookName: '',
        bookPrice: '',
        isbnNumber : null,
        authorName: '',
        publishedAT:'',
        publication:'',

    })
    const [image,setImage] = useState(null)

   const handleChange = (e)=>{
     const {name,value} = e.target
     setData({
        ...data,
        [name] : value
     })
   }

   const handleSubmit =async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    
    Object.entries(data).forEach(([key,value])=>{
        formData.append(key,value)
    })
    formData.append('image',image)
     const response =await axios.patch(`https://node-module-crud-1.onrender.com/book/${id}`,formData)
     if(response.status === 200){
        navigate("/book/" + id)
     }
     else{
        alert("something went wrong")
     }
   }

   const fetchBook = async()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if (response.status === 200){
        console.log(response.data.data)
        setData(response.data.data)
    }
   }
   useEffect(()=>{
    fetchBook()
   },[])

    
    

  return (
    <>
    <Navbar/>
    <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md mt-52">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Edit Book</h2>
        <form onSubmit={handleSubmit} >
            <div className="mb-4">
                <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" id="bookName" value={data.bookName}name="bookName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
                <input type="number" id="bookPrice"  name="bookPrice" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.bookPrice} onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">isbnNumber</label>
                <input type="number" id="isbnNumber" 
                value={data.isbnNumber}name="isbnNumber" className="mt-1 p-2 w-full border rounded-md text-gray-800"onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">authorName</label>
                <input type="text" id="authorName" 
                value={data.authorName}name="authorName" className="mt-1 p-2 w-full border rounded-md text-gray-800"onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publication" className="block text-sm font-medium text-gray-600">publication</label>
                <input type="text" id="publication" value={data.publication}name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800"onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">publishedAt</label>
                <input type="date" id="publishedAt" 
                value={data.publishedAT}name="publishedAt" className="mt-1 p-2 w-full border rounded-md text-gray-800"onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label htmlFor="bookImage" className="block text-sm font-medium text-gray-600">bookImage</label>
                <input type="file" id="bookImage" name="image" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>

            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Edit Book</button>
        </form>
    </div>
    </>
  )
}

export default EditBook