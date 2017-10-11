import React,{ Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { fetchPost } from '../actions'
const uuidv1 = require('uuid/v1');

class PostForm extends Component{
    state = {
        title: '',
        body: '',
        author: '',
        category: ''
    };

    componentDidMount() {
        if(this.props.match.params.postId !== undefined){
            this.props.getPost(this.props.match.params.postId);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ title: nextProps.postSelected.title,
                        body: nextProps.postSelected.body,
                        author: nextProps.postSelected.author,
                        category: nextProps.postSelected.category });
    }

    handleChangeSort = (e) =>{
        var index = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
        this.setState({sort: index});
    }

    handleChangeCategory= (e) =>{
        var index = e.nativeEvent.target.selectedIndex;
        this.setState({category: e.nativeEvent.target[index].text });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(values){
        const {postId}=this.props.match.params
        if(postId !== undefined){
            //TODO editPost
        }
        else{
            values.id = uuidv1()
            values.timestamp = Date.now()
            //TODO addPost
        }
    }

    render(){
        const { title, body, author, category } = this.state;
        const { categories } = this.props;
        const categoriesList = categories.length!==undefined ? categories.map((category, index) => { return <option key={index} value={category.path} >{category.name}</option>} ) : null;
        return(
            <div className="App">            
                <NavBar />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">title:</label>
                        <input type="title" className="form-control" id="title" name="title" value={title || ""} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">body:</label>
                        <input type="body" className="form-control" id="body" name="body" value={body || ""} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">author:</label>
                        <input type="author" className="form-control" id="author" name="author" value={author || ""} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">category:</label> <br/>
                        <select 
                            value={category} 
                            onChange={this.handleChangeCategory}>
                            <option value="">Select Category</option>  
                            {categoriesList}
                        </select>                        
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      categories: state.categories,
      postSelected: state.postSelected    
    };
  };
  
  export default connect(mapStateToProps,{ getPost: fetchPost})(PostForm);