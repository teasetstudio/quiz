import { useRef } from 'react'

const Input = ({ className = '', type = 'text', placeholder, onChange }) => {
  const inputRef = useRef(null)

  return (
    <input
      ref={inputRef}
      className={`${className} appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight`}
      type={type}
      placeholder={placeholder}
      onChange={() => onChange(inputRef.current.value)}
    />
  )
}

export default Input
