import { useState } from 'react'
import './App.css'
import { X } from 'lucide-react'
import {IconButton} from 


function Helper({ image, label, onClose }) {
  return (
    <div className="helper">
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
