import { useState } from 'react'
import './App.css'

import Helper from './components/Modals/Helper'
import helpHome from './assets/help-tela-boas-vindas-rh.png'

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
          label="Aqui você pode gerenciar suas tarefas"
          onClose={handleCloseHelper}
        />
      )}

      <main className="content">
        <h1>Bem-vinda 👋</h1>

        <div className="card">
          <p>Este é o conteúdo principal da página.</p>
        </div>
      </main>

    </div>
  )
}

export default App
