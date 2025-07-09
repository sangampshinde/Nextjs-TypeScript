# WHAT IS NEXT JS ?

Next.js is a powerful React framework that facilitates the development of web applications by providing features such as server-side rendering (SSR), static site generation (SSG), and API routes, enabling developers to create fast, SEO-friendly, and scalable applications with ease.

A library is a collection of pre-written code that developers can use to perform specific tasks. It provides functions and methods that can be called upon as needed.

A framework is a more comprehensive structure that provides a foundation for building applications. It includes a set of rules, conventions, and tools that dictate how the application should be organized and developed.

FRAMEWORK = libs + tools + conventions;


# CREATING NEXT JS PROJECT 

npx create-next-app@latest

Next.js 15.2.3
TypeScript is 4.9.5.

# To Run Application 
npm run dev

# FILE AND FOLDER STRECTURE

my-app/
├── app/                            <-- ✅ App Router folder
│   ├── page.tsx                    <-- Homepage (`/`)
│   └── layout.tsx                  <-- Root layout for all pages
│
├── public/                         <-- Static files (images, etc.)
│   └── favicon.ico
│
├── styles/                         <-- CSS files (Tailwind or global CSS)
│   └── globals.css
│
├── .eslintrc.json                  <-- ESLint config
├── next.config.js                  <-- Next.js config
├── package.json
├── postcss.config.js               <-- PostCSS config (if Tailwind used)
├── tailwind.config.ts             <-- Tailwind config (if selected)
├── tsconfig.json                   <-- TypeScript config
└── README.md

# SSR AND CSR

| Feature                     | **CSR (Client-Side Rendering)**          | **SSR (Server-Side Rendering)**                |
| --------------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Where Rendering Happens** | In the **browser** (client)              | On the **server**, before sending to browser   |
| **Initial Page Load Speed** | Slower (waits for JS to load and render) | Faster (HTML is ready when it reaches browser) |
| **SEO Friendly**            | ❌ No (content loads after JS)           | ✅ Yes (HTML is fully rendered for crawlers)  |
| **Interactivity**           | ✅ Full client-side interactivity        | ✅ Interactivity enabled after hydration      |
| **Data Fetching**           | In `useEffect()` after component mounts  | With `getServerSideProps()` before rendering   |
| **Best Use Case**           | Dashboards, internal tools               | Blogs, product pages, SEO-focused content      |
| **Network Load**            | More JavaScript sent to client           | Less JS, more HTML from server                 |

# Data Feching To server Component 

```
// app/users/page.tsx

import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersPage;

```

# Caching

Caching is the process of storing data temporarily so it can be reused instead of fetching it again — which saves time and resources.

1. Default Caching (force-cache)

```
await fetch(URL);

```
```
await fetch(URL, {
  cache: 'force-cache' // this is the default
});

```



2. No Caching (no-store)

```
await fetch(URL, {
  cache: 'no-store'
});

```
```
Behavior:
    Always re-fetches data from the server.
    No cache is created or reused.
    Best for real-time or frequently changing data.

```

3. Revalidation (Incremental Static Regeneration)

```
await fetch(URL, {
  next: { revalidate: 10 } // in seconds
});

```

1. 🟢 force-cache (Default)

Definition:
Caches the data at build time or on first request, and reuses it until a rebuild or revalidation.

Syntax:
await fetch('https://api.example.com/data');
// OR
await fetch('https://api.example.com/data', {
  cache: 'force-cache'
});

Example Use Case:
    Public blog posts
    Static category lists

Behavior:
    Fast (reads from cache)
    Doesn't reflect updated data until rebuild

2. 🔴 no-store

Definition:
Disables caching completely. Data is fetched fresh on every request (SSR behavior).

Syntax:

await fetch('https://api.example.com/live-data', {
  cache: 'no-store'
});

Example Use Case:
    Admin dashboards
    Live scores, logs, or status updates

Behavior:
    Always fresh
    Slower (no reuse of response)

3. 🟡 next.revalidate

Definition:
Caches data but refreshes in the background after a set time.

Syntax:

await fetch('https://api.example.com/products', {
  next: { revalidate: 60 } // in seconds
});

Example Use Case:

    Product listings (update every 1 minute)
    News articles (refresh every few minutes)

Behavior:

    Cached response is returned if valid
    Re-fetch happens in background after expiration














