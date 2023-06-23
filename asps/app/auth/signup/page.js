
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex w-full justify-between">
    <div className=" Txt-BOX p-24">
      <h1 className=" text-6xl py-16">Register<br></br>to Continue</h1>
      <h1 className="text-3xl py-2">If u already have<br></br> an account you can</h1>
      <Link href="/auth/login" className="text-2xl text-purple-400 dark:text-emerald-400 ">Login In</Link>
    </div>
    <form className="">
    </form>
    </div>
  )
}
