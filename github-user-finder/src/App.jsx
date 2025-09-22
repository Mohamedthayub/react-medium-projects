import octocat from "./assets/octocat.png";
import searchicon  from "./assets/icon-search.svg";
import locationIcon from "./assets/icon-location.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import websiteIcon from "./assets/icon-website.svg";
import companyIcon from "./assets/icon-company.svg";
const App = () => {
    return (
        <div className="container">
            <div className="main-container">
            <div className="search-container">
                <div>
                    <img src={searchicon} className="searchIcon"></img>
                    <input type="text" placeholder="Search Github Username .."></input>
                </div>
                <button>Search</button>
            </div>
            <div className="data-container">
                <div className="first-container">
                    <div>
                        <img src={octocat} className="profile-photo" alt="user-profile-photo"></img>
                    </div>
                    <div className="user-name-data">
                        <h1 className="name">Mohamed thayub</h1>
                        <h2 className="user-name">@octocat</h2>
                        <p className="bio">this  profile has no bio</p>
                    </div>
                </div>
                <div className="second-container">
                    <div className="repositorys">
                        <h3>Public Repositories</h3>
                        <h3>4</h3>
                    </div>
                    <div className="followers">
                        <h3>Followers</h3>
                        <h3>5</h3>
                    </div>
                    <div className="following">
                        <h3>Following</h3>
                        <h3>2</h3>
                    </div>
                </div>
                <div className="third-container">
                    <div className="child-first">
                        <h3 className="head3"><img src={locationIcon} className="icon"  ></img>Location</h3>
                        <h3 className="head3"><img src={twitterIcon} className="icon"></img>Twitter</h3>
                    </div>
                    <div className="child-second">
                        <h3 className="head3"><img src={websiteIcon} className="icon"></img>Website</h3>
                        <h3 className="head3"><img src={companyIcon} className="icon"></img>Company</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default App;