'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter()
  const Nevigate = (name) => {
    route.push(name)
  }

  return (
    <div className="">
      <div className=" w- full h-auto p-2 bg-slate-800 flex items-center flex-wrap justify-between gap-4">
        <div className="flex  gap-3 ">
          <Link href={'/'} className="text-gray-200 hover:text-orange-500">Home</Link>
          <Link href={'/contact'} className="text-gray-200 hover:text-orange-500">Contect</Link>
          <Link href={'/about'} className="text-gray-200 hover:text-orange-500"> About </Link>
          <Link href={'/productlist'} className="text-gray-200 hover:text-orange-500">Posts</Link>
          <Link href={'/recipes'}className="text-gray-200 hover:text-orange-500">recipes</Link>
          <Link href={'/collagename'} className="text-gray-200 hover:text-orange-500">collage</Link> 
        </div>
        <div>
          <button onClick={() => Nevigate('/signup')} className="px-5 p-2 bg-green-600 hover:bg-green-800 transition duration-300 text-white rounded-md active:scale-95 active:animate-ping">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
