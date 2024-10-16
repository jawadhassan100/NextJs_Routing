import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-slate-300 h-[100vh] flex flex-col justify-center items-center ">
      <h1 className="font-semibold text-4xl mb-2">Hello World</h1>
      <Link href="/dashboard" className="font-semibold bg-white rounded-sm px-4 py-1 hover:bg-black hover:text-white mb-2">Go to Dashboard</Link>
      <Link href="/account" className="font-semibold bg-white rounded-sm px-4 py-1 hover:bg-black hover:text-white mb-2">Go to account</Link>
      <Link href="/product/1" className="font-semibold bg-white rounded-sm px-4 py-1 hover:bg-black hover:text-white mb-2">Go to product 1</Link>
      <Link href="/clothes/winter/2xl" className="font-semibold bg-white rounded-sm px-4 py-1 hover:bg-black hover:text-white mb-2">Go to clothes</Link>
      <Link href="/categories//Electronics/Gadgets" className="font-semibold bg-white rounded-sm px-4 py-1 hover:bg-black hover:text-white mb-2">Go to Categories</Link>
    </div>
  );
}
