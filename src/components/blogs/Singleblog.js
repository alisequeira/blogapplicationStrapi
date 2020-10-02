import React from 'react';
import fetch from 'isomorphic-fetch';

class Singleblog extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            SingleBlog: [],
            BlogImage: ''
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:1337/blogs/${this.props.match.params.postid}`)
        .then(response => {
            if(response.status >= 400){
                throw new Error ('Bad response from server');
            }
            return response.json();
        }).then(blog => {
            this.setState({SingleBlog: blog});
            this.setState({BlogImage: blog.featureimage.url});
        })
    }

    render(){
        const {id, blogcontent, categories, blogtitle} = this.state.SingleBlog;
        return(
            <div className="jumbotron">
                <h1 className="display-8">{blogtitle}</h1>
                <img src={`http://localhost:1337${this.state.BlogImage}`} alt="image"/>
                <p className="lead">{blogcontent}</p>
            </div>
        )
    }
}

export default Singleblog;