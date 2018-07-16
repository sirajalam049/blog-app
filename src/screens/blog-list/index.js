import {connect} from 'react-redux';
import {getAllPosts} from './actions';
import React from 'react';
import _ from 'lodash';

class BlogList extends React.Component{
    componentWillMount(){
        this.props.getAllPosts();
    }
    render(){
        return (
            <div>
                <h1>All Posts</h1>
                {
                    _.map(this.props.blog.posts, (item, i) => {
                        return(
                            <div key={i}>
                                <h3>{item.id}. {item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return(
        {blog: state.BlogList}
    );
}

const mapDispatchToProps = dispatch => {
    return({
        getAllPosts: () => dispatch(getAllPosts()),
    });
}

const BlogListComponent = connect(mapStateToProps, mapDispatchToProps)(BlogList);
export default BlogListComponent;


