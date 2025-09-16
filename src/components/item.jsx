import { Link } from "react-router-dom";
import "./collection.css"

function Item(props) {
  // Extract YouTube video ID from the URL
  const videoId = props.data.videoUrl?.split("v=")[1]?.split("&")[0];

  return (
    <div  className="box">
     
      {videoId ? (
        <iframe
          className="frames  rounded-2xl"
          width="400"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={props.data.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
     <Link to="/"><h2  className="font-bold">{props.data.title}</h2></Link>
     <p>{props.data.channelId}</p>
     <span>{props.data.views} views.</span>
     <span>    </span>
    <span>{props.data.likes} Likes.</span>
    <span>   </span>
    <span>{props.data.dislikes} DisLikes</span>
    </div>
  );
}

export default Item;
