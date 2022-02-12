import "./BlockContent.css";
import { BlockCard } from "./components/BlockCard";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";

export class BlockContent extends Component {
  state = {
    showBlock: true,
    showAddForm: false,
    blockLiked: false,
    blockArr: [],
  };

  likePost = (pos) => {
    const temp = [...this.state.blockArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blockArr: temp,
    });

    localStorage.setItem("blogPosts", JSON.stringify(temp));
  };

  toggleBlock = () => {
    this.setState(({ showBlog }) => {
      return {
        showBlog: !showBlog,
      };
    });
  };

  deletePost = (pos) => {
    if (window.confirm(`Удалить?  ${this.state.blockArr[pos].title}`)) {
      const temp = [...this.state.blockArr];
      temp.splice(pos, 1);

      this.setState({
        blockArr: temp,
      });
      localStorage.setItem("blogPosts", JSON.stringify(temp));
    }
  };

  addNewBlogPost = (blogPost) => {
    this.setState((state) => {
      const posts = [...state.blockArr];
      posts.push(blogPost);
      localStorage.setItem("blogPosts", JSON.stringify(posts));
      return {
        blockArr: posts,
      };
    });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
          console.log(response)
        this.setState({
          blockArr: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchLiked = () => {
    this.setState(({blockLiked}) => {
        return{
            blockLiked: true
        }
    })
  }

  render() {
    const blogPosts = this.state.blockArr.map((item, pos) => {
      return (
        <BlockCard
          key={item.id}
          thumbnailUrl={item.thumbnailUrl}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });

    if (this.state.blockArr.length === 0) return <h1>LOADING...</h1>;

    return (
      <>

        <button className="buttonTop" onClick={this.toggleBlock}>
          {this.state.showBlock ? "Hide Blog" : "Show Blog"}
        </button>
        {this.state.showBlock ? (
          <>
            <h1>Simple Blog</h1>
            <button onClick={this.searchLiked} className="buttonRight">
              Create new post
            </button>
            <div className="posts">
              <div className="postWrapper">{blogPosts}</div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}
