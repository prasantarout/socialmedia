import React from "react";
import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../../components/posts/Post";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/18444259/pexels-photo-18444259/free-photo-of-woman-in-white-dress-walking-on-a-beach-sand-with-a-pair-of-sneakers-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="usInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            {/* <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a> */}
          </div>
          <div className="center">
            <span>John dae</span>
            <div className="infos">
              <div className="items">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="items">
                <LanguageIcon />
                <span>Stix.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Post/>
        
      </div>
    </div>
  );
};

export default Profile;
