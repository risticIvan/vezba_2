import React from 'react';

class NavBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
                <a className="navbar-brand" href="/">React and Node</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/success">Success</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/error">Error handler</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
