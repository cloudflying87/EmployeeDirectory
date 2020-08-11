import React from 'react';
import API from '../utils/API';
import EmployeeCard from './EmployeeCard';
import SearchBar from './SearchBar';
// import Button from './Buttton';

class EmployeeCards extends React.Component {
    state = {
        search: "",
        result: []
    }

    componentDidMount = () => {
        this.searchEmployees();


    };

    renderEmployees = () => {
        return this.state.result.map(results => <EmployeeCard key={results.cell} result={results} />)
    }


    searchEmployees = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.error(err));

    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("working")
    }


    render() {
        return (
            <div className='container'>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.renderEmployees()}
                {console.log(this.state.result)}
            </div>
        )
    }
}

export default EmployeeCards;