import { Link } from "react-router-dom";

interface MenuProps{
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export const Menu = ({label, href, icon}: MenuProps) => {
    return (
        <Link to={href} className="px-3 py-2 bg-transparent hover:bg-primary-500 transition duration-20 rounded-lg hover:text-white font-medium flex items-center gap-2">
            {icon}
            {label}
        </Link>
    );
};