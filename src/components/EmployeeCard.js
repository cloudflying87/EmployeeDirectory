import React from 'react';
function EmployeeCard({ result }) {
    return (
        <div className='card rounded-pill border-primary mb-2 col-lg-6 justify-content-center' >
            <div className='row no-gutters'>
                <div className=''>
                    <img src={result.picture.large} alt={`${result.name.first} ${result.name.last}`} className='customimage card-img rounded-circle border border-success ml-2 mt-2' />
                </div>
                <div className=''>
                    <div className='card-body'>
                        <h3 className='card-title'>{`${result.name.first} ${result.name.last}`}</h3>
                        <ul className='card-text'>
                            <li><strong>Cell: </strong> {result.cell}</li>
                            <li><strong>Location: </strong> {`${result.location.city}, ${result.location.state}`}</li>
                            <li><strong>Username: </strong>{result.login.username}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard;