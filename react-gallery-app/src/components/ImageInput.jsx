
import { useState } from "react"

function ImageInput({ addImage }) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (url.trim()) {
      addImage(url.trim())
      setUrl("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row items-center gap-2 w-full max-w-md mx-auto">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter image URL"
        className="border p-2 w-full sm:flex-grow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
      >
        Add Image
      </button>
    </form>
  )
}

export default ImageInput
