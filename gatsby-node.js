const path = require("path");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// To add slug to each Markdown node
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md').toLowerCase();

        // Add slug field for every markdown file
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });

        // Add type field if blog or event
        if (/content\/blog/.test(node.fileAbsolutePath)) {
            createNodeField({
                node,
                name: 'type',
                value: 'blog'
            });
        } else if (/content\/events/.test(node.fileAbsolutePath)) {
            createNodeField({
                node,
                name: 'type',
                value: 'event'
            });
        }
    } else if (node.internal.type === 'ProjectsJson') {
        // Get slug by replacing space in name with -
        const slug = node.name.replace(/\s+/g, '-').toLowerCase();

        // Add slug field for project object
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return Promise.all([
        createBlogPage(createPage, graphql),
        createMemberPage(createPage, graphql),
        createProjectPage(createPage, graphql)
    ]);

};

const createBlogPage = async (createPage, graphql) => {
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const eventTemplate = path.resolve('./src/templates/event.js');

    // To fetch slug of the blog post
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            type
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.fields.type === 'blog') {
            // Check if it's a blog markdown file
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } else if (edge.node.fields.type === 'event') {
            // Check if it's a events markdown file
            createPage({
                component: eventTemplate,
                path: `/events/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }

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

const createProjectPage = async (createPage, graphql) => {
    const projectTemplate = path.resolve('./src/templates/project.js');

    // To fetch github username of the member
    const res = await graphql(`
        query {
            allProjectsJson {
                edges {
                    node {
                        members,
                        fields {
                            slug
                        }
                    }
                }   
            }
        }
    `)

    res.data.allProjectsJson.edges.forEach(edge => {
        createPage({
            component: projectTemplate,
            path: `/project/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug,
                members: edge.node.members
            }
        })
    })
}