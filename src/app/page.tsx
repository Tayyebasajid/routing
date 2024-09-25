import Link from 'next/link'

export default function home(){
  
  return(
<main className="flex flex-col items-center justify-center p-10">
  <h1 className="text-5xl font-bold">Home page</h1>
  <div className="flex flex-col p-5 text-center text-2xl text-blue-600">
  <Link href="/about">About Page</Link>
  <Link href="/profile">Profile Page</Link>
  <Link href="/studentlist">Student Details</Link>
  </div>


  <div>
 

  </div>
 
</main>
  ) 
 

  
}