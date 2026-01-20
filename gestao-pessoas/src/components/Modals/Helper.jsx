import './Modal.css'
import { X } from 'lucide-react'
import IconButton from '../Button/IconButton'


function Helper({ image, label, onClose }) {
  return (
    <div className="helper modal-content">
      <IconButton
        icon={<X size={18} />}
        ariaLabel="Fechar ajuda"
        onClick={onClose}
      />

      <img src={image} alt={label} />
      <p>{label}</p>
    </div>
  )
}

export default Helper
