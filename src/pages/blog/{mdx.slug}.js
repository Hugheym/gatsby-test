import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    console.log(data);
    const post = data.mdx;
    return (
        <Layout pageTitle={post.frontmatter.title}>
            <h1>{post.frontmatter.title}</h1>
            <p>Posted: {post.frontmatter.date}</p>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p>
                Photo by <a href={post.frontmatter.hero_image_credit_link}> author</a>
            </p>
            <MDXRenderer>{post.body}</MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                }
            }
        }
    }
`;

export default BlogPost;
