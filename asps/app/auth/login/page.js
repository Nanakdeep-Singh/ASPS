import Link from "next/link";

export default function Page() {
  return (
    <div className="flex">
    <div className=" Txt-BOX p-24">
      <h1 className=" text-6xl py-16">Sign In<br></br>to Continue</h1>
      <h1 className="text-3xl py-2">If u do not have <br></br> an account you can</h1>
      <Link href="/auth/signup" className="text-2xl text-purple-400 dark:text-emerald-400 ">Register Now</Link>
    </div>
    <form className="justify-self-end">
      
    </form>
    </div>
  )
}
