import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from "@mui/material";
import logo from "./logo.png";

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img src={logo} className="header_logo" />
            <IconButton>

            <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
};

export default Header;
