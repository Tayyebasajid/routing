"use client"
import {useRouter} from 'next/navigation'
const Profile=()=>{
  const router=useRouter();
  return(
    <div>
      <h1 className="text-5xl flex items-center justify-center p-5 font-bold capitalize">profile page!</h1>
      <div className="flex flex-col" >
      <button className="capitalize text-white mx-auto  px-6 py-3 bg-red-600 mt-5" onClick={()=>router.push("/")}>home page</button>
<button className="capitalize text-white px-6 py-3 mx-auto bg-blue-600 mt-5" onClick={()=>router.push("/profile/teacherprofile")}>teachers profile here</button>
<button className="capitalize text-white  px-6 py-3 mx-auto bg-green-600 mt-5" onClick={()=>router.push("/profile/studentprofile")}>students profile here</button>

      </div>
    </div>
     
  )
}
export default Profile;