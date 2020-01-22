import React from 'react';
import { connect } from 'react-redux';
import { getSinglePost } from '../blog-list/actions';

class SingleBlog extends React.Component {

    componentDidMount() {
        console.log('props', this.props);
        const id = this.props.match.params['id'];
        this.props.getSinglePost(id);
    }

    render() {

        return (
            this.props.singlePost
                ?
                <div>
                    <p>{this.props.singlePost.id}</p>
                    <h1>{this.props.singlePost.title}</h1>
                    <p>{this.props.singlePost.body}</p>
                </div>
                : <p>Loading...</p>
        );

    }
}

const mapStateToProps = state => {
    return (
        { singlePost: state.BlogList.singlePost }
    );
}

const mapDispatchToProps = dispatch => {
    return ({
        getSinglePost: (id) => dispatch(getSinglePost(id)),
    });
}



export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);;


