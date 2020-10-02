import React from 'react';
import fetch from 'isomorphic-fetch';
import BloglistItem from '../blogs/BloglistItem'

class Bloglist extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            blogs: []
        }
    }

    componentWillMount = () => {
        fetch('http://localhost:1337/blogs')
            .then(response => {
                if(response.status >= 400){
                    throw new Error ('Bad response from server');
                }
                return response.json();
            }).then(blogs => {
                this.setState({blogs: blogs});
            })
    }
    render(){
        return(
            <div>
                {this.state.blogs.map(blog => (
                
                        <div className="container">
                            <div className="row">
                                <BloglistItem key={blog.id}
                                    id = {blog.id}
                                    title={blog.blogtitle}
                                    content={blog.blogcontent}
                                    image={blog.featureimage}
                                    categories={blog.categories}
                                />
                            </div>
                        </div>
                    
                ))}
            </div>
        )
    }
}

export default Bloglist;