import React from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./components/Products";
import Carts from "./components/Carts";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Notfound from "./components/Notfound";
import Nav from "./components/Nav";
import "./App.css";
import NavHome from "./components/NavHome";
import Hero from "./components/Hero";
import Footer1 from "./components/Footer1";
import Postslink from "./components/Postslink";
import Userslink from "./components/Userslink";
import Productlink from "./components/Productlink";
import Cartslink from "./components/Cartslink";
import Forms from "./components/Forms";
import Addusers from "./components/Addusers";
import Home from "./components/Home";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./state/store";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./state/reducers/loginReducer";
import Redux from "./components/Redux";


const App = () => {
  // const user = useSelector((selectUser) );
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          {/* <div>{user ? <Logout /> : <Login />}</div> */}
          <NavHome />
          <Hero />
          <Nav />
          <Logout/>
          <Routes>
            <Route element={<Redux />}>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="productlink/:id" element={<Productlink />} />
              <Route path="carts" element={<Carts />} />
              <Route path="cartslink/:id" element={<Cartslink />} />
              <Route path="users" element={<Users />} />
              <Route path="userlink/:id" element={<Userslink />} />
              <Route path="posts" element={<Posts />} />
              <Route path="posts/:id" element={<Postslink />} />
            </Route>
            <Route path="forms" element={<Forms />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="addusers" element={<Addusers />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        
          <Footer1 />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
