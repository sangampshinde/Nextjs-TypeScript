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

#









