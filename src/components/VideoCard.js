import React from "react";

const VideoCard = ({ info }) => {
    console.log(info);
    if (!info) return null;
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className="p-2 m-2 shadow-lg w-80">
            <ul>
                <img className="rounded-lg" src={thumbnails?.medium.url} alt="thumbnail" srcset="" />
                <li className="font-bold py-2" >{channelTitle}</li>
                <li>{title}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    );
};

export default VideoCard;


