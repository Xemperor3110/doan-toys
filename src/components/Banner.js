import Banner1 from '../assets/image/banhieu.png'

function Banner (){
    return(
        <main className="h-[594px] w-full  grid grid-cols-2 gap-[25px]">
			<div className=" flex flex-col space-y-[16px] pt-20">
				<h1 className="text-[46px] font-bold leading-[60px]">
				</h1>
			</div>
			<div className="">
				<img src={Banner1} alt="" className="w-full" />
			</div>
		</main>
    )
}
export default Banner;