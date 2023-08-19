import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <React.Fragment>
            <section>
                <p className='text-black p-2 text-center display-6'>Search</p>
                <div className='text-end input-group'>
                    <input type='text' className='text-black form-control' placeholder='Search a Quiz...'></input>
                    <i className='bi bi-search btn btn-danger btn-outline-secondary input-group-text'></i>
                </div>
                <Link to="/new-quiz" ><div className='btn m-2 btn-info'><i className='bi bi-plus-circle-fill m-1 text-dark'></i>New Quiz</div></Link>
                <div className='btn m-2 btn-info'><i className='bi bi-x-diamond-fill m-1 text-dark'></i>Responses</div>
                <div className='btn m-2 btn-info'><i className='bi bi-star-fill m-1 text-dark'></i>Active Quizes</div>
                <p className='display-6 text-center text-black'>Your Activities</p>
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Activities</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Hello</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}

export default Home;