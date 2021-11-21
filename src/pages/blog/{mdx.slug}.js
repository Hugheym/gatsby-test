import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({ data }) => {
    const post = data.mdx;
    return (
        <Layout pageTitle={post.frontmatter.title}>
            <h1>{post.frontmatter.title}</h1>
            <p>Posted: {post.frontmatter.date}</p>
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
            }
        }
    }
`;

export default BlogPost;
