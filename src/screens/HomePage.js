import React from 'react';
import cover from '../files/519703.jpg'
import {Link} from 'react-router-dom';

const STYLES = {
    viewBlog: {
        backgroundColor: '#5F86A9',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        textDecoration: 'none'
    }
}

export class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>Blog App</h1>
                    <Link to={'/blogs'}>
                        <h1 style={STYLES.viewBlog}>View Blogs</h1>
                    </Link>
                </div>
                <img 
                    src={cover} 
                    alt="Home Cover" 
                    style={{width: '100%', objectFit: 'cover'}}
                />

            </div>

        );
    }
}