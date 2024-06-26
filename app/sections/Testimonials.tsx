import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const testimonials = [
    ["MARIA MAGDALENA, MINESOTA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."],
    ["JHON PARK, MINESOTA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."],
    ["MARIA MAGDALENA, MINESOTA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."],
    ["JHON PARK, MINESOTA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."],
]

export default function Testimonials () {
    return (
        <div className="mt-20 px-4">
            <div className="px-4 py-6 bg-accent">
                <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-white">RECENT REVIEWS</p>
                <h3 className="font-russo text-2xl lg:text-5xl mb-8 lg:mb-12 leading-none text-white">Read <span className="text-black">Testimonials</span> From Our Happy Customers</h3>
                <Splide hasTrack={ false } className='mx-6 lg:mx-[10vw] pb-6 lg:pb-8 relative lg:pt-16 lg:max-w-[65rem]' options={{
                    type: 'loop',
                }}>
                <SplideTrack>
                    <TestimonialsElement />
                </SplideTrack>
            </Splide>
            </div>
        </div>  
    )
}

const TestimonialsElement = () => {
    return (
        <>
            {

                testimonials.map((testimonial, index) => {
                    return (
                        <SplideSlide className='grid grid-cols-2' key={index}>
                            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: `url(".png"})`}}>
                                <div className='size-7 lg:size-14 bg-accent rounded-full flex justify-center items-center'>
                                    <img src="play-triangle.svg" alt="play triangle" className='w-3 lg:w-6'/>
                                </div>
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </>
    )
}