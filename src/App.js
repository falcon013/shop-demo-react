import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

function App() {
    return (
        <Provider store={store}>
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/products"  component={ProductsList}/>
                    <Route path="/product/:productId"  component={ProductDetails}/>
                    <Route path="/create"  component={ProductForm}/>
                    <Route>404 Not Found!</Route>
                </Switch>
            </div>
        </Router>
        </Provider>
    );
}

export default App;
