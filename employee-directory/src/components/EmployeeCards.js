import React from 'react';
import API from '../utils/API';
import EmployeeCard from './EmployeeCard';

class EmployeeCards extends React.Component {
    state = {
        search: "",
        result: []
    }

    componentDidMount() {
        this.searchEmployees();
        
        
    };
    
    renderEmployees() {
        return this.state.result.map(results => <EmployeeCard key={results.cell} result={results} />)
    }


    searchEmployees() {
        API.search()
            .then(res => this.setState({result: res.data.results}))
            .catch(err => console.error(err));
            
    };

    
    render() {
        return (
            <div className='container'>
                {this.renderEmployees()}
                {console.log(this.state.result)}
            </div>
        )
    }
}

export default EmployeeCards;