import React, { Component } from "react";

import Styled from "styled-components";

const H1 = Styled.h1`
  color:#e7f3fd;
`;
const P = Styled.p`
  color:#b8dafa;
`;

class GamePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let dropDownClass = ["dropdown"];
    if (this.props.ShowDropdown) {
      dropDownClass.push("is-active");
    }

    // let Dropdownitem = this.props.Dropdowns.map((item, index) => {
    //   return <Dropdownitem item={item} />;
    // });

    return (
      <div>
        <div>
          <H1 className="main--title mt-3 display-4 text-center">Fortnite</H1>
          <P className="main--subtitle lead text-center">
            Top 24 popular live streams sorted by current viewers
          </P>

          <div className="container">
            <div className="streams row">
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/gosu"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_gosu-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/b30828ba3efd51a5-profile_image-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Gosu - SoloQ smurf
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Gosu</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
