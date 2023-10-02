import { useState } from "react";
import "./components/fetchAPi/fetchDemo";
import FetchDemo from "./components/fetchAPi/fetchDemo";
import Shop from "./components/Shop/Shop";
import AddBooks from "./components/Books/AddBooks";
import './App.css'
import DeleteBook from "./components/Books/DeleteBooks";
import UpdateBook from "./components/Books/UpdateBooks";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import RegistrationForm from "./components/form/Demo_form";

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
      {/* <FetchDemo/> */}
      <div className="my-container">
      <h1>All Books</h1>
        <Shop />
      </div>
      <div className="my-container">
        {/* <AddBooks /> */}
        <RegistrationForm/>
      </div>
      <div className="my-container">
        <DeleteBook/>
      </div>
      <div className="my-container">
        <UpdateBook/>
      </div>
      <div className="my-container">
        <SearchBar/>
      </div>
    </>
  );
}

export default App;
