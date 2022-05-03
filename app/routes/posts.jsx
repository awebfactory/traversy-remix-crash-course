import { Outlet } from "@remix-run/react"

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <h2>This is the File Based Routing file for the posts route</h2>
      <p>It just works</p>
      <h2>Nested Routing</h2>
      <p>
        Now I can nest routes in the name matching `posts` folder right here on
        this page at this outlet
      </p>
      <p>That just works, too.</p>
      <Outlet />
    </div>
  )
}
