import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/checkout" element={ <CheckOut /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
