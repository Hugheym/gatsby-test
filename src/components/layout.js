import * as React from 'react';
import { Link } from './link';
import { useStaticQuery, graphql } from 'gatsby';
import { 
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    navLinkHighlightedSpan,
    avtiveNavLinkItem,
} from './layout.module.css'

const Layout = ({pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className={container}>
            <title >{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" 
                        className={navLinkText}
                        activeStyle={{
                            textDecoration: 'green underline',
                        }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" 
                        className={navLinkText}
                        activeStyle={{
                            textDecoration: 'red underline',
                        }}>
                            <p><span className={navLinkHighlightedSpan}> About </span>
                            </p>
                        </Link>
                    </li>
                    <li className={navLinkItem} >
                        <Link to="/blog" className={navLinkText}
                        activeStyle={
                            { textDecoration: 'blue underline' }
                        }>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>
                    {pageTitle}
                </h1>
                {children}
            </main>
        </div>
    );
}
export default Layout;