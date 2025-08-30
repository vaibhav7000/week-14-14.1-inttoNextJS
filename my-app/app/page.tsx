export default function Home() {

  return (
    <div>
      Hello NEXTJS
    </div>
  )
}

/*

  Every Route that is present inside the NextJS application should be start from page.tsx and its default layout as layout.tsx

  NextJS uses File system based routing means we can define routes using files and folder with default page as page.tsx and for layout we use layout.tsx

  When we hit a route the page.tsx gets rendered on the serverside and is delivered to the Client

  making a route dynamic is done using [dynamic_slug]

*/


/*

  NextJS is "React" but all the things will be handled at the server level, hence we always needs a power server to host a NextJS application does not be considered on pointing it to the S3.

*/