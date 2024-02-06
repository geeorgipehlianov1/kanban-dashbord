const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
