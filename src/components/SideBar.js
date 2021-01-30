import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SideBar extends React.Component {

    render() {
        return (
            <aside id="sidebar-index" className="sidebar-item">
               
                    <div id="navegar-blog">
                        <h3>puedes hacer esto</h3>
                        < Link to ={'/blog/crear'} className="btn btn-success">crear cliente</ Link>

                    </div>

                
                <br />
                <br />
                <br />

                <div id="navegar-blog">
                    <h3>buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="buscar" className="btn btn-success" />
                    </form>
                </div>

            </aside>

        );
    }
}

export default SideBar;