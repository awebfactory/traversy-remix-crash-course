import { Outlet, useLoaderData } from "@remix-run/react"

export const loader = () => {
  console.log(123)
  return {}
}

export default function PostItems() {
  return (
    <div>
      <h1>Post Items</h1>
      <p>
        I'm the posts route index file nested right here on the posts route page
        and visible at slash posts.
      </p>
      <p>Take a look at slash posts slash new (manually, no link here yet)</p>
      <Outlet />
    </div>
  )
}
