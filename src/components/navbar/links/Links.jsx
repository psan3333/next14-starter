import Link from 'next/link';
import NavLink from './navLink/navLink';
import styles from './links.module.css';

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;

    return (
        <div className={styles.links}>
            {links.map(link => (
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
    );
}

export default Links