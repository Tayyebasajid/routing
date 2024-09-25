"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'
const About=()=>{
  const router = useRouter();
    return(
      <div>
         <h1 className="text-5xl flex items-center justify-center p-5 font-bold capitalize">about page!</h1>
         <div className="flex flex-col underline mx-10 text-xl text-blue-600">
  <Link href="/about/aboutstudent">About Student</Link>
  <Link href="/about/aboutschool">About School</Link>

  </div>
         <div >
         <button className="capitalize text-white mx-10 px-6 py-3 bg-red-600 mt-5" onClick={()=>router.push("/")}>home page</button>

         </div>
       

      </div>
    );
   

  }
  export default About;