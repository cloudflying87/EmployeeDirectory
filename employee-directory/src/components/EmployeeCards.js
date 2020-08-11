import React from 'react';
import API from '../utils/API';
import EmployeeCard from './EmployeeCard';
import SearchBar from './SearchBar';

class EmployeeCards extends React.Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount = () => {
        this.searchEmployees();
    };

    renderEmployees = () => {
        console.log(this.state.result)
        return this.state.result.map(results => <EmployeeCard key={results.cell} result={results} />)
    };


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
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // let results = this.state.result.filter(res => {
        //     if (typeof this.state.result === 'string') {
        //         return res.name.first.includes(this.state.search) || res.name.last.includes(this.state.search)
        //     } else if (typeof parseInt(this.state.seach) === 'number') {
        //         return res.cell.includes(this.state.search)
        //     }
        //     // res.cell.includes(this.state.search)
        //     // res.name.last.includes(this.state.search),
        // })
        
        // console.log("results", results)
        // this.renderSortedEmployees()
    };

    renderFilteredEmployees = () => {
        console.log("filtered employees")
    }

    renderSortedEmployees = () => {
        // console.log("sorted results ", sortedResults)
        // let sortedResults = this.state.result.map(x => x.name.last).sort();
        // this.state.result.sort()
        console.log(this.state.result)
        return this.state.result.map(results => <EmployeeCard key={results.cell} result={results} />)
        // return console.log("sorted results ", sortedResults)
        // return <EmployeeCard key={this.state.result.cell} result={sortedResults} />
    }


    render() {
        return (
            <div className='container'>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <p>
                    {/* {this.renderSortedEmployees} */}
                </p>
                {/* {
                    !this.search.state ? this.renderEmployees : this.renderFilteredEmployees
                } */}
                {/* {console.log(this.state.result)} */}
                {this.renderSortedEmployees()}
            </div>
        )
    };
}

export default EmployeeCards;