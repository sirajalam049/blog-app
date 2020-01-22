import { connect } from 'react-redux';
import { getAllPosts } from './actions';
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class BlogList extends React.Component {
    componentWillMount() {
        this.props.getAllPosts();
    }
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {
                    _.map(this.props.blog.posts, (item, i) => {
                        return (
                            <Link key={i} to={`/post/${item.id}`} >
                                <h3>{item.id}. {item.title}</h3>
                                <p>{item.body}</p>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        { blog: state.BlogList }
    );
}

const mapDispatchToProps = dispatch => {
    return ({
        getAllPosts: () => dispatch(getAllPosts()),
    });
}

const BlogListComponent = connect(mapStateToProps, mapDispatchToProps)(BlogList);
export default BlogListComponent;


