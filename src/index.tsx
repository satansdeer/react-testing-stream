import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { CartProvider } from "./CartContext"
import "./index.css"

ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
  document.getElementById("root")
)
