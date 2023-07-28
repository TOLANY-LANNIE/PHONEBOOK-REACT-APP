import Navbar from "./pages/NavBar"
import AddEntry from "./pages/AddEntry";
import AddPhoneBook from "./pages/AddPhonebook";
import PhoneBook from "./pages/PhoneBook";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PhoneBook />} />
          <Route path="/addEntry" element={<AddEntry />} />
          <Route path="/addPhoneBook" element={<AddPhoneBook />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
