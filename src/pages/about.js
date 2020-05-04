import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data, path }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} path={path}>
      <SEO
        title="About"
        keywords={["skincare", "clean", "organic", "bioscience", "purity"]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Clean / Minimal / Toxin free / Cruelty free / Absolute purity</h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>beauty / healthy / organic</figcaption>
          </figure>
          <h3 id="dynamic-styles">Arborinci styles</h3>
          <p>
            Aenean consectetur magna et quam congue efficitur. Integer fringilla
            risus eu massa tincidunt pulvinar. Etiam quis velit ut nunc
            facilisis facilisis eu ac tellus. Lorem ipsum dolor sit amet,
          </p>
          <p>
            Vivamus eget est malesuada, sodales lorem ac, aliquam est. Nunc
            suscipit libero neque, at interdum risus mollis non. Proin a sem sit
            amet nulla vehicula bibendum eu et ipsum. Aliquam
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum suscipit est eget efficitur. Suspendisse vitae augue in
            orci ultrices finibus at vitae nibh. Nullam luctus est at elit
            auctor
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "DSCF1946.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
