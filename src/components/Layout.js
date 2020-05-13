import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import resume from './resume.pdf'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h1>Alex Bennett</h1>
                </div>
                <div className="col-6">
                  <ul className="links">
                    <li className="link">
                      <a href="https://github.com/alexUXUI">github</a>
                    </li>
                    <li className="link">
                      <a href="https://www.linkedin.com/in/alexuxui/">linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
              <p>On a mission to simplify the complexity.</p>
              <h2>About</h2>
              <p>
                &nbsp;&nbsp;I was born and raised in Denver, Colorado and have lived in Los Angeles,
                Medellín, and Rio de Janeiro. I have also traveled around S.E. Asia, S. Africa, and
                W. Europe.
              </p>
              <br />
              <p>
                &nbsp;&nbsp; My path into software development and technology started with art and
                politics.
              </p>
              <br />
              <p>
                &nbsp;&nbsp;Technology fascinates me from an art perspective because it allows us to
                combine different medias in new ways. I believe that in the information age, artists
                have a major role to play in shaping our understanding of vasts amount of
                information.
              </p>
              <br />
              <p>
                &nbsp;&nbsp;During my undergrad in Diplomacy and World Affairs at Occidental
                College, I studied the role technology can play in the formation of public policy
                and I realized that technology can be a very effective way of making a positive
                difference in the world.
              </p>
              <h3>Technology Experience</h3>
              <br />
              <p>
                &nbsp;&nbsp;TL;DR{'  '}
                <a href={resume} download>
                  Download Resume
                </a>
              </p>
              <br />
              <p>
                &nbsp;&nbsp;My 7 year professional career has revolved around creating software.
                Along the way, I have had the privilege of building software with people in many
                capacities. I have had roles in software production including: Software Engineer,
                UX/UI Designer, Product Manager, Scrum Master, and DevOps. No matter what role I'm
                in, I try to stay true to the mentality of full-cycle software operations.
              </p>
              <p>
                &nbsp;&nbsp;In my experience, I have also had the pleasure of working alongside an
                assortment of teams, on different products, using a variety of tools, within
                different industries. I have also contracted, worked full-time, and even co-founded
                a tech. company, we failed spectacularly, and the experience is still one of my
                biggest accomplishments.
              </p>
              <p>
                &nbsp;&nbsp;Over the course of working on a range of projects, I began to specialize
                in frontend web development. I was most recently a UI Architect for a 9 billion
                dollar company called Atlas Corporation, where I was responsible for all things
                related to our frontend codebase: quality, performance, accessibility, design,
                security, and DevOps. I also built a microfrontend architecture for this company to
                extend the benefits of domain driven design and microservice architectures to the
                frontend.
              </p>
            </div>
            <div className="container tech-exp">
              <div className="row">
                <div className="col-md">
                  <h4>Roles</h4>
                  Software Engineer, UX/UI Designer, Product Owner, and DevOps
                </div>
                <div className="col-md">
                  <h4>Industries</h4>
                  Mapping / GIS, Big Pharmacy, Data Science, Music, Beer, Maritime / Shipping ,
                  eCommerce, photography, and B2B / B2C
                </div>
                <div className="col-md">
                  <h4>Technologies</h4>
                  HTML5, CSS3, JavaScript/TypeScript, Rust, Java/Scala, Python, and Golang. AWS:
                  RDS, S3, ELB, EC2, containerization/docker. Frameworks: React.js, Angular, Vue,
                  Svelte, Express, Play, Gin, Flask, etc. Build tooling: Webpack, rollup, babel,
                  compilers.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container contact">
          <h5>Contact Me</h5>
          <p>Phone: 303-518-5032</p>
          <p>email: alexandergraybennett@gmail.com</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">Made with 🖤✨ by Alex Bennett (and Gatsby)</div>
          </div>
        </div>
      </div>
    )}
  />
)

export default TemplateWrapper
