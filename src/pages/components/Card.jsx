import { Link } from "react-router-dom"

const Card = ({book}) => {
  console.log(book)
  return (
    
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key={book._id}>
      <img className="w-full" src={book.imageUrl ? book.imageUrl : "https://th.bing.com/th/id/OIP.S1Acr290KfA4gxDLDvKojwHaE8?w=284&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">
         Rs. {book.bookPrice}
        </p>
        <p className="text-black-700 text-base">
          {book.isbnNumber}
        </p>
        <Link to={`/book/${book._id}`}>See More</Link>
      </div>
    </div>
    

  )
}

export default Card