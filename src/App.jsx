import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"






function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
