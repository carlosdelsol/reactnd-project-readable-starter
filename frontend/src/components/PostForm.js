import React,{ Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { fetchPost, addPost } from '../actions'
import { withRouter } from 'react-router-dom';
const uuidv1 = require('uuid/v1');

class PostForm extends Component{
    state = {
        parentId: '',
        post: {}
    };

    componentDidMount() {
        if(this.props.match.params.postId){
            this.props.getPost(this.props.match.params.postId, "posts");
        } else if(this.props.match.params.commentId){
            this.props.getPost(this.props.match.params.commentId, "comments");
        } 
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.path !== "/comments/new"){
            this.setState({post:{ title: nextProps.postSelected.title,
                            body: nextProps.postSelected.body,
                            author: nextProps.postSelected.author,
                            category: nextProps.postSelected.category,
                            timestamp: nextProps.postSelected.timestamp }});
        }else{
            this.setState({parentId: nextProps.postSelected.id});
        }
    }

    checkInputs = () =>{
        const { title, body, author, category } = this.state.post;
        if(!body || !author){
            alert('fill in all inputs');
            return false;
        }else{
            if( (this.props.path !== "/comments/new" && this.props.match.params.postId && (!title || !category)) || 
                (this.props.path !== "/comments/new" && this.props.match.params.commentId) || 
                (this.props.path !== "/comments/new" && this.props.match.path === "/posts/new" && (!title || !category))){
                alert('fill in all inputs');
                return false;
            }
        }
        return true;
    }

    handleChangeCategory= (e) =>{
        var index = e.nativeEvent.target.selectedIndex;
        this.setState({post:{...this.state.post, category: e.nativeEvent.target[index].value }});
    }

    handleChange = (e) => {
        this.setState({ post: {...this.state.post, [e.target.name]: e.target.value }});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.checkInputs()){
            if(this.props.path !== "/comments/new"){
                if(this.props.match.path === "/posts/new"){
                    //newPost
                    const newPost = Object.assign({}, this.state.post, {id: uuidv1(), timestamp: (new Date()).getTime()}, "posts")
                    this.props.addPost(newPost, "posts", ()=>this.props.history.push("/"))
                }
                else if(this.props.match.params.postId !== undefined){
                    //editPost
                    console.log("editPost")
                    
                }
                else if(this.props.match.params.commentId !== undefined){
                    //editComment
                    console.log("editComment")
                    
                }
            }
            else{
                //newComment
                const newComment = Object.assign({}, this.state.post, {id: uuidv1(), parentId: this.state.parentId, timestamp: (new Date()).getTime()})
                this.props.addPost(newComment, "comments", this.setState({post:{}, parentId:''}))
            }
        }
    }

    render(){
        const { title, body, author, category } = this.state.post;
        const { categories } = this.props;
        const categoriesList = categories.length!==undefined ? categories.map((category, index) => { return <option key={index} value={category.path} >{category.name}</option>} ) : null;
        return(
            <div className="App">            
                {this.props.path !== "/comments/new" && <NavBar />}
                <form onSubmit={this.handleSubmit}>
                    {this.props.path !== "/comments/new" && !this.props.match.params.commentId && 
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">title:</label>
                                <input type="title" className="form-control" id="title" name="title" value={title || ""} onChange={this.handleChange} />
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
                        </div> 
                    }
                    <div className="form-group">
                        <label htmlFor="body">body:</label>
                        <input type="body" className="form-control" id="body" name="body" value={body || ""} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">author:</label>
                        <input type="author" className="form-control" id="author" name="author" value={author || ""} onChange={this.handleChange} />
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
  
  export default withRouter(connect(mapStateToProps,{ getPost: fetchPost, addPost})(PostForm));