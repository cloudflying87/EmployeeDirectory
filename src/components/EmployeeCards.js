import React from 'react';
import API from '../utils/API';
import EmployeeCard from './EmployeeCard';
import SearchBar from './SearchBar';
import Button from './Buttton';

class EmployeeCards extends React.Component {
    state = {
        search: "",
        result: [],
        filteredResults: []
    };

    componentDidMount = () => {
        this.searchEmployees();
    };

    renderEmployees = () => {
        console.log(this.state.result)
        console.log(this.state.filteredResults)

        return this.state.filteredResults.map(results => <EmployeeCard key={results.cell} result={results} />)
    };


    searchEmployees = () => {
        API.search()
            .then(res => this.setState({
                result: res.data.results,
                filteredResults: res.data.results
            }))
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
        // let filteredRes = this.state.filteredResults.filter(res => {
        //     if (typeof this.state.filteredResults === 'string') {
        //         return res.name.first.includes(this.state.search) || res.name.last.includes(this.state.search)
        //     } else if (typeof parseInt(this.state.seach) === 'number') {
        //         return res.cell.includes(this.state.search)
        //     }
        //     // res.cell.includes(this.state.search)
        //     // res.name.last.includes(this.state.search),
        // })



        const callback = (res) => {
            if (res.name.last.includes(this.state.search)) {
                console.log("Success")
            }
            console.log("filtered", this.state.filteredResults)

            // return this.setState({ filteredResults: })
        };

        this.setState({
            filteredResults: this.state.result.filter(callback)
        })
    }

    renderFilteredEmployees = () => {
        console.log("filtered employees")
    }

    renderSortedEmployees = event => {
        event.preventDefault();
        console.log("something")

        // found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
        function compare(a, b) {
            const nameA = a.name.first.toUpperCase();
            const nameB = b.name.first.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            };
            return comparison;
        };

        return this.setState({ filteredResults: this.state.filteredResults.sort(compare) })
    };


    render() {
        return (
            <div className='container'>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    name='Search'
                />
                <Button
                    handleFormSubmit={this.renderSortedEmployees}
                    name='Sort'
                />
                {this.renderEmployees()}
            </div>
        )
    };
}

export default EmployeeCards;