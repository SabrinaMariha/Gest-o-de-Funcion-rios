import {
  Home,
  Users,
  Clock,
  Percent,
  DollarSign,
  Lock,
  Settings,
  LogOut,
} from 'lucide-react'

import IconSidebar from '../../assets/icons/ButtonSidebar.png'
import './Sidebar.css'
import { useState } from 'react'

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true)

  function handleToggleSidebar() {
    setShowSidebar(prev => !prev)
  }
  return (
    <aside className={`sidebar ${!showSidebar ? 'collapsed' : ''}`}>

      
      <button className="icon-sidebar" onClick={handleToggleSidebar}>
        <img src={IconSidebar} alt="Icon-sidebar" />
      </button>
      
      <div className="sidebar-header">
        <span className="logo">NewGo</span>
      </div>

      <nav className="sidebar-menu">
        <button className="menu-item active">
          <Home size={18} />
          <span>Início</span>
        </button>

        <button className="menu-item">
          <Users size={18} />
          <span>Colaboradores</span>
        </button>

        <button className="menu-item">
          <Clock size={18} />
          <span>Horas trabalhadas</span>
        </button>

        <button className="menu-item">
          <Percent size={18} />
          <span>Descontos</span>
        </button>

        <button className="menu-item">
          <DollarSign size={18} />
          <span>Pagamentos</span>
        </button>

        <button className="menu-item">
          <Lock size={18} />
          <span>Acessos</span>
        </button>

        <button className="menu-item">
          <Settings size={18} />
          <span>Configurações</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <button className="menu-item logout">
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
