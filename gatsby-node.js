const path = require("path");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// To add slug to each Markdown node
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return Promise.all([
        createBlogPage(createPage, graphql),
        createMemberPage(createPage, graphql)
    ]);

};

const createBlogPage = async (createPage, graphql) => {
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // To fetch slug of the blog post
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

const createMemberPage = async (createPage, graphql) => {
    const memberTemplate = path.resolve('./src/templates/member.js');

    // To fetch github username of the member
    const res = await graphql(`
        query {
            allMembersJson {
                edges {
                    node {
                        github
                    }
                }   
            }
        }
    `)

    res.data.allMembersJson.edges.forEach(edge => {
        createPage({
            component: memberTemplate,
            path: `/@${edge.node.github}`,
            context: {
                github: edge.node.github
            }
        })
    })
}