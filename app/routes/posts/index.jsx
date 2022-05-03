import { Outlet, useLoaderData, Link } from "@remix-run/react"

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post" },
      { id: 2, title: "Post 2", body: "This is a test post" },
      { id: 3, title: "Post 3", body: "This is a test post" },
    ],
  }
  return data
}

export default function PostItems() {
  const { posts } = useLoaderData()
  console.log(posts)
  return (
    <>
      <div className="page-header">
        <h1>Post Items</h1>
        <Link to="new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()}>
              <h3>{post.id}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
