import React from 'react';
import "hover.css";
import Styled from 'styled-components';
const GameItem = (props) => {

    const A = Styled.a`
    font-weight:bold;
    color: white;
    opacity: 0.8;
    background-color: black;
    transition: .2s;
    :hover {
        color:white;
        text-decoration:none;
        transform: scale(1.05);
        opacity: 1;
        box-shadow: 0 0 2rem black;
        z-index: 1;
    }
`;

    const { item } = props;
    let thumbnailURL = item.thumbnail_url.replace('{width}x{height}', '720x400');


    return (
        <A
            className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1 "
            target="_blank"
            href={item.url}
        >
            <img
                className="stream--thumbnail img-fluid"
                src={thumbnailURL}
                alt="Stream thumbnail"
            />
            <div className="streambox--info row m-0">
                <div className="col-3 p-2">
                    <img
                        className="stream--userimg rounded-circle img-fluid"
                        src={item.userInfo.profile_image_url}
                        alt="User profile image"
                    />
                </div>
                <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                        <div className="stream--title align-self-center text-truncate ">
                            {item.title}
                        </div>
                    </div>
                    <div className="h-50 d-flex">
                        <div className="stream--username align-self-center text-truncate ">
                            <small>{item.userInfo.display_name}</small>
                        </div>
                    </div>
                </div>
            </div>
        </A>)
}

export default GameItem;