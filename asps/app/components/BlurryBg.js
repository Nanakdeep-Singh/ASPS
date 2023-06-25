export default function BlurryBg(props) {
  return (
    <div className='relative'>
        <div>
        <div className='blur-3xl absolute w-64 h-64 top-5 left-[400px] rounded-tl-full bg-purple-300 dark:bg-emerald-600 -z-20'></div>
        <div className='blur-3xl absolute w-64 h-64 top-[240px] left-[580px] rounded-br-full bg-purple-300 dark:bg-emerald-600 -z-20'></div>
        </div>
        <div className='relative'>{props.children}</div>
    </div>
  )
}
