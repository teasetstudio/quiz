const Button = ({ className, onClick, children, bgClass = 'bg-green-500', variant }) => {
  const classes = `${className} ${bgClass} filter hover:brightness-110 active:brightness-100
    ${variant === 1 ? 'text-white font-bold text-2xl py-4 w-full rounded-lg'
    : variant === 2 ? 'mx-auto block px-5 py-2 rounded' : ''}`

  return (
    <>
      <button
          className={classes}
          onClick={onClick}
        >
        {children}
      </button> 
    </>
  )
}

export default Button
