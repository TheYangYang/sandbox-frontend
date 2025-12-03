This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```
If you want to use docker (recommend)
```
docker build -t sandbox-frontend-dev -f Dockerfile.dev .
```
```
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules sandbox-frontend-dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

