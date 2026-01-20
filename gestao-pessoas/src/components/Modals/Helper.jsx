import './Modal.css'
import { X } from 'lucide-react'
import IconButton from '../Button/IconButton'


function Helper({ image,title, label, onClose }) {
  return (
    <div className="helper modal-content">
      <IconButton
        icon={<X size={18} />}
        ariaLabel="Fechar ajuda"
        onClick={onClose}
      />

      <img src={image} alt={label} />
      <h1>{title}</h1>
      <p>{label}</p>
    </div>
  )
}

export default Helper
