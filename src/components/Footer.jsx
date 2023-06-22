import {CFooter} from "@coreui/react";
import {FaReact} from "react-icons/fa";

const Footer = () => {
    return (
        <CFooter>
            <div>
                Vladimír Hric |
                <span> &copy; {new Date().getFullYear()} | All Rights Reserved</span>
            </div>
            <div>
                Powered by <FaReact/>
            </div>
        </CFooter>
    );
};

export default Footer;