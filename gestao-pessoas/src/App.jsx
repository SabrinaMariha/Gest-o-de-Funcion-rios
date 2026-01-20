import { useState } from 'react'
import './App.css'

import Helper from './components/Modals/Helper'
import helpHome from './assets/help-tela-boas-vindas-rh.png'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [showHelper, setShowHelper] = useState(true)

  function handleCloseHelper() {
    setShowHelper(false)
  }

  return (
    <div className="app-container">
      
      {showHelper && (
        <Helper
          image={helpHome}
          title = "Bem-vindo(a)"
          label="Estamos muito contentes de ter você em nossa plataforma de pagamentos. Aqui, você encontrará uma solução simples e segura para realizar seus trabalhos de uma forma simples, ágil e mais confiança!"
          onClose={handleCloseHelper}
        />
      )}
      
      <Sidebar/>
      <main className="content">
       
      </main>

    </div>
  )
}

export default App
