import React, { useEffect, useState } from "react";
import { VIDEO_API_KEY } from "../components/utils/config";
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"


const VideoContainer = () => {
    const [Videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(VIDEO_API_KEY + process.env.REACT_APP_GOOGLE_API_KEY);
        const json = await data.json();
        // console.log(json);
        setVideos(json.items);
    }
    if (!Videos) {
        return <Shimmer />
    }
    return (!Videos) ? <Shimmer /> : (

        <div className="flex flex-wrap">
            {
                Videos.map((Videos) => (
                    <Link to={"/watch?v=" + Videos.id}>
                        <VideoCard info={Videos} key={Videos.id} />
                    </Link>
                ))
            }

        </div>
    );
};

export default VideoContainer;