import * as React from 'react';
import { Link } from './link';
import { useStaticQuery, graphql } from 'gatsby';
import {Box, HStack } from '@chakra-ui/react';
import { Icon} from '@chakra-ui/icons';
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
const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path {...props}
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  )
const Layout = ({location, pageTitle, children }) => {
    console.log(location)
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    // Next to the header, render three dots.
    // Below the header, create a nav bar.
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Box>
                <HStack>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header> 
                {/* Render three circle icons. This is NOT a nav. */}
                <Box> 
                    <HStack>
                        <CircleIcon  color={location.pathname == "/" ?  "green": "black"} />
                        <CircleIcon  color={location.pathname.startsWith("/about")? "red": "black"}/> 
                        <CircleIcon  color={location.pathname.startsWith("/blog") ? "blue": "black"}/>
                    </HStack>
 
                </Box>
                </HStack>
            </Box>
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
                        }}
                        partiallyActive={true}
                        >
                            <p><span className={navLinkHighlightedSpan}> About </span>
                            </p>
                        </Link>
                    </li>
                    <li className={navLinkItem} >
                        <Link to="/blog" className={navLinkText}
                        activeStyle={
                            { textDecoration: 'blue underline' }
                        }
                        partiallyActive={true}
                        >
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