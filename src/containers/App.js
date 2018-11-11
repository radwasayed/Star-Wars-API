import React, { Component } from 'react';
import './App.css';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Content from "./Content";


class App extends Component {
    constructor (){
        super();
        this.state = {
            homeMenu:{},
            destination: '',
        };
        this.buttonPress = this.buttonPress.bind(this)
    }

    getData (){
        fetch('https://swapi.co/api/')
            .then(res => res.json())
            .then(data => this.setState({ homeMenu : Object.keys(data) }));
    }

    componentDidMount(){
        this.getData()
    }

    buttonPress (destination){
        this.setState({destination : destination})
    }

    render() {
        const { homeMenu, destination } = this.state;
        return destination ?
             (
                <div className="App">
                    <Header/>
                    <Nav
                        names = {homeMenu}
                        onButtonPress={this.buttonPress}
                    />
                    <Content destination = {destination}/>
                </div>
            )
        :(

            <div className="App">
                <Header/>
                <Nav
                    names = {homeMenu}
                    onButtonPress={this.buttonPress}
                />
            </div>
        )
    }
}

export default App;
