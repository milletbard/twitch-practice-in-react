import React, { Component } from "react";

import Styled from "styled-components";

const H1 = Styled.h1`
  color:#e7f3fd;
`;
const P = Styled.p`
  color:#b8dafa;
`;

class Section extends Component {
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
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/iwilldominate"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_iwilldominate-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/a785eaed-43ce-46e3-9138-d9f50c4a1af5-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        IWD - LOSING MY MIND IN PRESEASON (:
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>IWillDominate</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/toyzttv"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_toyzttv-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/af9c14d2-3261-474d-823c-a95cc4c932fa-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Toyz - 小隻馬中單
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>矮子娃娃</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/asiagodtonegg3be0"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_asiagodtonegg3be0-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/asiagodtonegg3be0-profile_image-081feb3428b1a1c6-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        爬菁英- asiagodtone
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>亞洲統神</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/gobgg"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_gobgg-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/d698e8eb-284e-4345-b4ae-b39d6274fa2f-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        SoloQ / Duo avec Rozara dans la journée
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>GoBGG</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/overpow"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_overpow-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/8d09018b2a7ff6ba-profile_image-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        ツ Zwycięska Wielkopolska
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Overpow</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/marcelinrj"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_marcelinrj-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/6a80ae01-7ab2-4159-9244-cbe7a0fe36fc-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        CELLINSHOW
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>marcelinrj</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/solary"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_solary-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/d9f43602-fcf0-460c-a273-ef8640ac0233-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Caelan SoloQ Matinale
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Solary</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/magifelix"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_magifelix-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/51948228-61f2-4fc3-aad4-70024d764970-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        MagiFelix - Offseason SoloQ
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>MagiFelix</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/cowsep"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_cowsep-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/cowsep-profile_image-ed365611c0480832-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Get Challenger with Master Yi and show the world you're
                        good at League of Legends
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Cowsep</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/eisohnewaffel"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eisohnewaffel-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/0e4cbcb2-e0ce-4bc9-be08-78314f4c21e0-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Ihr seid alle fett geworden!!
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>EisohneWaffel</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/werlyb"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_werlyb-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/51fe530e-a7ea-4197-bafb-dabc27e343ae-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        SK Werlyb (no cam)
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Werlyb</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/delordione"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_delordione-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/delordione-profile_image-5fe2b843e7ca4937-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        jak zmienić świat
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>delordione</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/tsm_zven"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_zven-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/tsm_zven-profile_image-ae1f77e85c3bb43f-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        TSM Zven - CHALLENGER EUW GAMEPLAY - no alerts
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>tsm_zven</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/midbeast"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_midbeast-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/cce44696-30dd-4180-b9d2-15ff9d693986-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        (CHALLENGER MID) Preparing for new Pokemon Challenge |
                        !instagram - Drew___Timbs
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>midbeast</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/lol_madlife"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_lol_madlife-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/fedd2d7b-ec5c-41e5-b3fe-f0a0ef6be4cb-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        롤
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>매드라이프_</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/thaldrinlol"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_thaldrinlol-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/thaldrinlol-profile_image-4fb404e63045d21f-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Erkenci bir "ön"yayın | instagram.com/berkedemir
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>ThaldrinLol</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/sn400ja"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_sn400ja-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/df7725bb-bf72-4aba-8e48-442bd86c8814-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        마재 ) 서로고소안하는 자유랭크모임
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>액시스마이콜</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/mgpmind"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_mgpmind-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/c60c86a4-df7c-45d0-9782-647a62efc99f-profile_image-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Plat II ♥ Gameplay de qualidade rs !jumpscare !donate
                        !loots
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>mgpmind</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/solorenektononly"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_solorenektononly-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/solorenektononly-profile_image-96305130a379dcaa-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Troll Builds that work?! - SoloRenektonOnly - New !video
                        &amp; !highlight
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>SoloRenektonOnly</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/aiicopter"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_aiicopter-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/9a3995a9-ebcb-43d8-9347-3ca380e9bec3-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Late night stream PepeCopter | !Twitter | !Discord
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>AIicopter</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/tobiasfate"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_tobiasfate-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/014228aa-5d1c-4644-9c8b-70126d00c089-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Tobias Fate - GP/TF
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>TobiasFate</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/panunulol"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_panunulol-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/4355234894e5d5c0-profile_image-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Learning new combos | !youtube | @PanunuLoL
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>PanunuLoL</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/cabramaravilla"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_cabramaravilla-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/29a4339c-91df-4e0f-aaa1-393afca1e85c-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Champi vs. Noa
                        https://www.youtube.com/watch?v=Z0dxhnolKYI
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Cabramaravilla</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/dakotaz"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_dakotaz-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/473aea0f-a724-498f-b7f1-e344f806ba8a-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        TSM Dakotaz - use code "dakotaz" in itemshop!
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>dakotaz</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/loeya"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_loeya-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/89ab44ce-f2fa-4d5a-bd16-ca717d9fc125-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        DrPhil I still need help - Creator code "Loeya"
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Loeya</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/mongraal"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_mongraal-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/fe0aaaf4-49b5-4dd5-b3d7-43b7c6adad87-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Creator code Secret_Mongraal
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Mongraal</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/solaryfortnite"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_solaryfortnite-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b8f4ec5-5539-4d0d-b555-1250a17b78f1-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Kinstaar squad combleeeeer
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>SolaryFortnite</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/symfuhny"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_symfuhny-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/1d41de3c-731d-41ae-b0e7-615ad74db8f3-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        :) !merch
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Symfuhny</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/mrsavagem"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_mrsavagem-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/c32775fb-8d53-471c-bb1f-c2d795db86f5-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Solo Duos / !creatorcode
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>MrSavageM</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/lebouseuh"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_lebouseuh-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/3200f43d-dcf2-4785-a014-8e754c382031-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        solo chill
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>LeBouseuh</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/eryctriceps"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eryctriceps-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/6fda322a-d741-4cef-8b29-b999a00340cb-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Hey:) | Code "fnatic_eryc" in the item shop! |
                        @ErycTriceps
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>ErycTriceps</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/thegamingowl"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_thegamingowl-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/68e159c4-0724-4104-bcc7-035eb99b6e05-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Pro Plays Only! | #FaZe5 | Twitter: @TheGamingOwl
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>TheGamingOwl</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/dhalucard"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_dhalucard-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/dhalucard-profile_image-ab0d13411f0cd1eb-300x300.jpeg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        [GER] Fortnite BR - Kapuze hat nen eigenen Skin
                        bekommen!{" "}
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Dhalucard</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/rekinss"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_rekinss-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/e3a9728b-577d-4f74-9c2e-ed4da8d8aa85-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        SOLO VS SQUAD? - exeed Rekins
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Rekinss</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/akytio"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_akytio-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/79e37865-e137-4a72-a805-2776c0d44a95-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        @Akytio - Hey ! [540p]
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Akytio</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/justfoxii"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_justfoxii-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/de3cc723-0ea2-4119-902d-69d259e9b80b-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        hey cutie! Creator Code: justfoxii
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>justfoxii</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/upshallgames"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_upshallgames-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/431260a3-fd60-450b-be7a-87abeb5067af-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        MERRY CHRISTMAS MY DUDES - Creator Code: obeyupshall
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>UpshallGames</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/skite"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_skite-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/79b5cc44-3d7f-4e4c-b383-8cea51ae2445-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Skite - code créateur LESTREAM-SKITE - solo
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Skite</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/jvtv"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_jvtv-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/d18200e8-c1d2-4909-a8c5-edfc70263813-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Le Morning de l'aprem - TiTavion - Fortnite
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>jvtv</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/kekkobomba"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_kekkobomba-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/5e31398b-facc-4d7d-9980-18ada5c5e197-profile_image-300x300.jpg"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Fortnite: Questa skin mi assomiglia (343/400){" "}
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>kekkobomba</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/citydriver_"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_citydriver_-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/67a94141-144e-4117-8b5d-b6272a40a3a0-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        TOP 3 Turnier Einnahmen Deutschlands // 3100+ Wins Total
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Citydriver_</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/jaomock"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_jaomock-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/f51be5c7-4438-412b-a66d-1b924d8512c3-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Its pretty much Summer... Right? | Merch now live -&gt;
                        !MERCH | Creator Code "FAZEJAOMOCK" | !charity
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>jaomock</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/svennoss"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_svennoss-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/b1c58741-bf9f-4b7c-9ab1-de1a112cea60-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        We are beating the hardest deathrun TODAY - !code I
                        Svennosss on twitter
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Svennoss</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/halienpower"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_halienpower-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/dc134b26-219f-449c-a593-69b0124c2aaf-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        {" "}
                        🎁VIANOČNÝ CHALLENGE 🎁 | Support a creator !code
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>HalienPower</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/atlantis_magin"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_atlantis_magin-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b09defa-2ba3-4815-ba75-54cbe45f7663-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        2 v 2 kill duels w/ Jug, Razz and Aice | CODE:
                        ATLANTIS-MAGIN | !res !code !twitter
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Atlantis_Magin</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/hydr4g"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_hydr4g-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/bb508372-63cf-41a6-bbf0-62c3527eb0b7-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        Jugando solos :P | !loots !subs !video
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Hydr4G</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="streambox col-12 col-sm-6 col-md-4 col-lg-3 p-1"
                target="_blank"
                href="https://www.twitch.tv/avery"
              >
                <img
                  className="stream--thumbnail img-fluid"
                  src="https://static-cdn.jtvnw.net/previews-ttv/live_user_avery-720x400.jpg"
                  alt="Stream thumbnail"
                />
                <div className="streambox--info row m-0">
                  <div className="col-3 p-2">
                    <img
                      className="stream--userimg rounded-circle img-fluid"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/4d1f7a90-a8b4-481e-b8af-4e71047d92db-profile_image-300x300.png"
                      alt="User profile image"
                    />
                  </div>
                  <div className="col-9 p-1 flex-column">
                    <div className="h-50 d-flex">
                      <div className="stream--title align-self-center text-truncate">
                        $15 VIEWER SCRIMS [PC] [NAE]
                      </div>
                    </div>
                    <div className="h-50 d-flex">
                      <div className="stream--username align-self-center text-truncate">
                        <small>Avery</small>
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

export default Section;
