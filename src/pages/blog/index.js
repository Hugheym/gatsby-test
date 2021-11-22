import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Box, Badge } from '@chakra-ui/react';
import { Link } from 'gatsby';
const BlogPage = ({ data }) => {
    // console.log(data);
    // const image = getImage(data.allMdx.frontmatter.hero_image);
    return (
        <Layout pageTitle="Blog">
            <h1>Blog</h1>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={node.id} margin="1em" overflow="hidden">
                            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} />
                            <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                {/* if node.frontmatter.date is within last month use new badge */}
                                { node.frontmatter.date.includes(new Date().toISOString().substring(0, 7)) ? (
                                    <Badge borderRadius="full" px="2" colorScheme="teal">
                                        New
                                    </Badge>
                                    ) : null
                                }
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    ml="2"
                                >
                                    written: {node.frontmatter.date}
                                </Box>
                            </Box>
                            <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                                <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                                </Link>
                            </Box>
                            <MDXRenderer>{node.body}</MDXRenderer>
                            </Box>
                        </Box>
                    ))
                }
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    hero_image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
                body
                slug
            }
        }
    }
`;

export default BlogPage;