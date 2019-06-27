import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'
import '../css/headers.css'
import '../css/stylesheet.css'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts);

    return (
      <Layout>
        <div className='latest'>
          <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
        </div>

        <section className="section">
          <div className="container">
            {posts.map(({ node: post }) => (
              <div
                className="content"
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <hr role="div" />
                  <small>{post.frontmatter.date} </small>
                </p>
                <p>
                  {post.excerpt} | {post.fields.readingTime.text}
                </p>
                <p>
                  <div className='post__utils'>
                    <Link className="button is-small" to={post.fields.slug}>
                      Full Story
                  </Link>
                    <div>
                      Tags: &nbsp;
                      {
                        post.frontmatter.tags.map(tag => {
                          return (
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          )
                        })
                      }
                    </div>
                  </div>
                </p>

              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
