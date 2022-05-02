import { Outlet, LiveReload } from "@remix-run/react"

export default function App() {
  return (
    <html>
      <head>
        <title>My Remix Blog</title>
      </head>
      <body>
        hello2
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  )
}
