import "../../../App.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const BlockCard = ({title, thumbnailUrl, description, likePost, liked, deletePost}) => {
  
  const heartColor = liked ? 'red' : '#c4c7c4'
    
  return (
    <div className="post">
        <img src={thumbnailUrl} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <>
        <button className="heartButton" onClick={likePost}>
          <FavoriteIcon style={{fill: heartColor}} />
        </button>
      </>
      <button className="trashButton" onClick={deletePost}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
  
  }