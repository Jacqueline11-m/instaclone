import "./header.css";
import Logo from "../assests/instaclone.png";
import Camera from "../assests/camera.png";

const Header = () => {
    return (
        <>
            <div className="nav">
                <a href="/"> <img src={Logo} alt="insta-logo" id="logo" title="Home Page"></img></a>
                <a href="./postform"><img src={Camera} alt="camera" id="camera" title="Post image"></img></a>
            </div>
        </>
    )
}
export default Header;