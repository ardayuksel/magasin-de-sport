import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducers/reducer";
import thunk from "redux-thunk";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/user/:id" exact element={<User />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
