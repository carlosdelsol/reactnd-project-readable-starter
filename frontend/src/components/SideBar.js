import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    handleChange = (e) =>{
        this.props.handleChangeSort(e);
    }
    render() {
        const { categories, sort } = this.props
        return (
            <div id="sidebar" className="col-lg-2 blog-sidebar">
                <div className="field">
                    <Link className="btn btn-success" to="/posts/new">New Post</Link><br/><br/>
                </div>
                <select value={sort} onChange={this.handleChange}>
                    <option value="timestamp">Date</option>
                    <option value="voteScore">Score</option>
                </select>
                <div className="sidebar-module">
                    <h4>Categories:</h4>
                    <ol className="list-unstyled">
                        {categories.length!==undefined?
                            categories.map((category, index) =>{
                            return <li key={index}><Link to={"/"+category.path}>{category.name}</Link></li>
                            })
                        :null}
                    </ol>
                </div>
            </div>
      );
    }
}
export default SideBar;