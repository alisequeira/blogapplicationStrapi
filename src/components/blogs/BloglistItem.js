import React from 'react';
import{Link} from 'react-router-dom';

const BloglistItem = ({title,content,categories, image,id}) => {
    const category = categories.map(category => category.categoryname)

    return(
        <div className="col-12">
            <div className="card border-secondary mb-3">
                <div className="card-header">{category}</div>
                <div className="card-body">
                    <img width="100%" src={`http://localhost:1337${image.formats.medium.url}`}/>
                    <h4 className="card-title">{title}</h4>
                </div>
                <Link to={`/single/${id}`} className="btn btn-primary btn-md">read more</Link>
            </div>
        </div>
    )
}

export default BloglistItem;