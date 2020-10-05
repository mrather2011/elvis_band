// import React from "react"
// import Layout from "../components/layout"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import classes from "./blog.module.scss"

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
//         edges {
//           node {
//             title
//             slug
//             publishedDate(formatString: "MMMM Do YYYY")
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div>
//       <Layout>
//         <h1>Blog Page</h1>
//         <h2>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//           inventore, optio quaerat unde omnis dolor est corporis exercitationem
//           aperiam quae!
//         </h2>
//         <ol className={classes.posts}>
//           {data.allContentfulBlogPost.edges.map((edge, i) => {
//             return (
//               <li key={i}>
//                 <Link to={`/blog/${edge.node.slug}`}>
//                   <h2>{edge.node.title}</h2>
//                   <p>{edge.node.date}</p>
//                 </Link>
//               </li>
//             )
//           })}
//         </ol>
//       </Layout>
//     </div>
//   )
// }

// export default BlogPage
