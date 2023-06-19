export default function BlurryBg(props) {
  return (
    <div className='relative'>
        <div className=' lg:p-40'>
        <div className='blur-3xl absolute w-64 h-64 top-5 left-[400px] rounded-full bg-purple-300 dark:bg-emerald-600'></div>
        <div className='blur-3xl absolute w-64 h-64 top-[240px] left-[520px] rounded-full bg-purple-300 dark:bg-emerald-600'></div>
        </div>
        <div className='relative'>{props.children}</div>
    </div>
  )
}
