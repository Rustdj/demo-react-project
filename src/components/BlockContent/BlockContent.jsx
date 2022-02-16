import "./BlockContent.css";
import { BlockCard } from "./components/BlockCard";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import { ButtonFilter } from "./components/ButtonFilter";
import CircularProgress from '@mui/material/CircularProgress';

export class BlockContent extends Component {
  state = {
    blockArr: [],
    newArray: true,
    
  };

  searchItem = () => {
    const newArray = this.state.blockArr.filter((item) => item.liked);

    console.log(newArray);

    this.setState({
      blockArr: newArray,
    });
  };

  // searchEmpty = () => {
  //   const empArr = [...this.state.blockArr];
  //   console.log(empArr.length);
  //   empArr.splice(1, 0, [])
    
  //   this.setState({
  //     blockArr: empArr,
  //   })
    
  // };


  likePost = (pos) => {
    const temp = [...this.state.blockArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blockArr: temp,
    });

    localStorage.setItem("blogPosts", JSON.stringify(temp));
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

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        console.log(response);
        this.setState({
          blockArr: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

    if (this.state.blockArr.length === 0) return <CircularProgress />;
    return (
      <>
        <h1>Simple Blog</h1>
        <ButtonFilter
          searchItem={this.searchItem}
          searchEmpty={this.searchEmpty}
          
        />
        <div className="posts">
          <div className="postWrapper">{blogPosts}</div>
        </div>
      </>
    );
  }
}
