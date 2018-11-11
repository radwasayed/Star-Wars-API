import React, { Component } from 'react';
import PeopleList from "../components/lists/PeopleList";
import SearchBar from "../components/SearchBar";
import PlanetsList from "../components/lists/PlanetsList";
import FilmsList from "../components/lists/FilmsList";
import SpeciesList from "../components/lists/SpeciesList";
import VehiclesList from "../components/lists/VehiclesList"
import StarShipsList from "../components/lists/StarShipsList";

export class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            information: [],
            people: [],
            planets: [],
            films: [],
            species: [],
            vehicles: [],
            starShips: [],
            searchField: '',
        };
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    };

    async fetchData(){
        const response = await fetch(`https://swapi.co/api/${this.props.destination}/`);
        const data = await response.json();
        this.setState({information : data.results})
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.destination !== prevProps.destination) {
            this.setState({information: []});
            this.fetchData();
        }
    }

    render (){
        const {information, searchField} = this.state;
        let filteredMenu = information.filter(info => {
            let head;
            if(info.title){
                head = info.title;
            } else {
                head = info.name;
            }
            return head.toLowerCase().includes(searchField.toLowerCase())
        });
        if ( information.length === 0 ){
            return  (
                <h2>Loading</h2>
            )
        } else {
            switch (this.props.destination) {
                case 'people':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <PeopleList people={filteredMenu}/>
                        </div>
                    );
                case 'planets':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <PlanetsList planets={filteredMenu}/>
                        </div>
                    );
                case 'films':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <FilmsList films={filteredMenu}/>
                        </div>
                    );
                case 'species':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <SpeciesList species={filteredMenu}/>
                        </div>
                    );
                case 'vehicles':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <VehiclesList vehicles={filteredMenu}/>
                        </div>
                    );
                case 'starships':
                    return (
                        <div>
                            <SearchBar searchChange={this.onSearchChange}/>
                            <StarShipsList starships={filteredMenu}/>
                        </div>
                    );
            }
        }

    }

}

export default Content;
