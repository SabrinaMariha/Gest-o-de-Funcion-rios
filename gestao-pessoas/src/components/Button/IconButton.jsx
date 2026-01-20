import './IconButton.css'

function IconButton({ icon, ariaLabel, ...props }) {
  return (
    <button
      className="icon-btn"
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
