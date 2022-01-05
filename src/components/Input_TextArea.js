import { useRef } from 'react'

const TextArea = ({ className = '', placeholder, onChange, rows = 5 }) => {
  const inputRef = useRef(null)

  return (
    <textarea 
      ref={inputRef}
      className={`${className} appearance-none border resize-y rounded w-full py-2 px-3 text-gray-700 leading-tight`}
      placeholder={placeholder}
      rows={rows}
      onChange={() => onChange(inputRef.current.value)}
    />
  )
}

export default TextArea
