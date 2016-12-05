import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Home page yo</h1>
                <Link to="about" className="btn btn-info">about</Link>
            </div>
        );
    }
}

export default HomePage;
