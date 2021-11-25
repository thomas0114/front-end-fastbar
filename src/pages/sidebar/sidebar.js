import { VscColorMode } from "react-icons/vsc";
import { FaTractor } from "react-icons/fa";
import { Box } from '@material-ui/core'
import { MdHome, MdOutlineMonetizationOn, MdOutlineImage, MdOutlineBarChart, MdNotificationsActive, MdBallot } from "react-icons/md";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import 'react-pro-sidebar/dist/css/styles.css';
import { lightTheme, darkTheme } from '../../theme/theme';
import "./style.css"

const Sidebar = ({ flag_sidebar, ctheme, setTheme }) => {

    const styles = {
        sideBarHeight: {
            height: "unset",
            backgroundColor: `${lightTheme.bgcolor_bar}`,
            color: "#757B75",
            minHeight: "100VH",
            fontStyle: "Work sans",
        },
        sideBarHeight1: {
            height: "unset",
            backgroundColor: `${darkTheme.bgcolor_bar}`,
            color: "#757B75",
            minHeight: "100VH",
            fontStyle: "Work sans",
        },
        menuIcon: {
            float: "right",
            margin: "10px",
        },
        color_back: {
            backgroundColor: `${lightTheme.bgcolor_bar}`,
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#2BA55D",
            fontStyle: "Work sans",
        },
        color_back1: {
            backgroundColor: `${darkTheme.bgcolor_bar}`,
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#2BA55D",
            fontStyle: "Work sans",
        }
    };

    return (
        <div id={ctheme ? "sidebar" : "sidebar1"}>
            <ProSidebar style={ctheme ? styles.sideBarHeight : styles.sideBarHeight1} collapsed={flag_sidebar}  >
                <SidebarContent>
                    <Menu style={ctheme ? styles.color_back : styles.color_back1} >
                        <MenuItem icon={<MdHome fontSize="30px" />} fontStyle="Work sans" onClick={() => { window.history.pushState(null, null, '/') }}>Home</MenuItem>
                        <MenuItem icon={<MdOutlineMonetizationOn fontSize="30px" />} fontStyle="Work sans">Trade</MenuItem>
                        <MenuItem icon={<MdOutlineImage fontSize="30px" />} fontStyle="Work sans">NFT Marketplace</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontStyle="Work sans">Farms</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontStyle="Work sans">New Farms</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontStyle="Work sans">New Farms V3</MenuItem>
                        <SubMenu title="Info" icon={<MdOutlineBarChart fontSize="30px" />}>
                            <MenuItem icon={<MdNotificationsActive fontSize="30px" />} fontStyle="Work sans">Notification</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<MdBallot fontSize="30px" />} fontStyle="Work sans">Fastbar</MenuItem>
                        <Box onClick={() => {
                            setTheme(!ctheme)
                        }}>
                            <MenuItem icon={<VscColorMode fontSize="30px" />} >Theme Light/Dark</MenuItem>
                        </Box>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
};


export default Sidebar;