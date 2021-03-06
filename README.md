Brad's very clear and modestly simple high powered tutorial lays out the power of Remix from scratch step by step, and is a great companion to the excellent official Remix tutorials.

I decided to make atomic commits at each step based on the latest Remix release before undertaking my first Remix project.

- Video [Traversy Media Remix Crash Course December 2021 | Full Stack React](https://youtu.be/d_BhzHVV4aQ)
- Video [Remix Crash Course Pt 2 | User Authentication](https://youtu.be/wEoktJMSWLY)
- [Original Repo bradtraversy / remix-blog](https://github.com/bradtraversy/remix-blog)

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
