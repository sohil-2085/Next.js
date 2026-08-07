# Benifites

- In react js we do routing with the react-router-dom but in next js there is built in auto routing system
- next js follows the static generation and server side rendering
- built in api routes
- Seo friendly
- full stack power
- extra optimization

# When to use

- seo optimization
- fast loading
- mix of static and dynamic content

# Rules

- We have to create the folder inside the app folder for auto routing
- every folder must contain the page.tsx to load the data
- we can also create the nested routes with creating folder in folder
- now anything we write in the layout.js above the children is show in all the pages
- now if we want to make any custom layout for over routes then create the layout.jsx inside that folders and see the code from the about folder

# Route Groups

- way to organizing your routes without affecting the URL structure
- Like we do not want to sometimes want to show some routes in the URL like admin route or password and like that so for that this route group is used
- for that group route we have to rename the folder with that format (folder_name)

# Image Component

- we are using Image tag insted of img because it provides many predefined things and it is also called as components
- We can manage many things with this Image component like fill , quality and priority and others , to explore with the docs

# Font

- This is with normal css
  - we can use different type of font using import font_name from next/font/google
  - and after that we have to store them in one variable like that to use it in the code
  - const roboto = Roboto({subsets: ["latin"]})
  - and after that we can use it in our html like this
  - <body className={roboto.className}>

- Now this is with tailwind
  - we have to also add one property name variable with the subsets and give it name like this variable: "--font-roboto" now use it in tag and we have to add this name in global.css like
  - --font-roboto: var(--font-roboto)
  - first we have to add this in the body tag of layout

# Metadata

- we can add the metada in the page.tsx to make seo friendly and also to add title and icon and any other things like that

```javascript
export const metadata = {
  title: "service page",
  description: "this is my service page",
  authors: [
    { name: "sohil kareliya" },
    { name: "giriraj enterprise", url: "google.com" },
  ],
  keywords: ["nextjs", "reactjs", "fullstack"],
  icons: {
    icon: "/image_path",
  },
};
```

- explore other properties in docs

# React Server vs Client Components

- frontend code we are writing in the client component and backend code we write in the server component

# Dynamic Route Segements

- if we warp that folder with the square brackate like this then it becomes the dynamic segements ([folder_name])
- Now How to use Dynamic Route segements in the server component
  - first why we use them this is the most important 
  - we use this because we know if we click on the any post of the insta and other social media then it opens and when it opens also url of that post is changed in the browser and for that we use the dynamic routes 
  - now as we know that in next js whenever we create new folder it creates the routes and as for this post scenario we are not going to create the folders for all users so we follow this structure like first we create 
  - users folder inside that we create this dynamic route folder with name [username] and in this folder we creates the page.tsx and this is working dynamically if we are passsing the props as arguments this props has promises and other information like params and search params with the use of that we can build the dynamic page you can see that in the folders 

# Search Params

- in this we can get the data like which filter we applyand all like this 
- http://localhost:3000/products?productId=10