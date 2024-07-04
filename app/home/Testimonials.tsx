'use client'

import Slider from "react-slick";

export default function Testimonials () {

    const settings = {
        customPaging: function(i:number) {
            return (
              <div className="size-[16px] border border-green rounded-full transition duration-200 mt-2 bg-white"></div>
            );
          },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
    };

    return (
        <div className="mt-20 lg:mt-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-48" id="testimonials">
            <div className="px-4 lg:px-8 pt-6 lg:py-12 pb-14 lg:pb-24 bg-accent rounded-3xl">
                <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-white">RECENT REVIEWS</p>
                <h3 className="font-russo text-2xl lg:text-5xl mb-8 lg:mb-12 leading-none text-white">Read <span className="text-black">Testimonials</span> From Our Happy Customers</h3>
                <Slider {...settings} className='relative'>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 lg:gap-y-8">
                            <Card hidden={false} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={false} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                            <Card hidden={true} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={true} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 lg:gap-y-8">
                            <Card hidden={false} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={false} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                            <Card hidden={true} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={true} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4">
                            <Card hidden={false} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={false} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                            <Card hidden={true} author="JHON PARK, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan."/>
                            <Card hidden={true} author="MARIA MAGDALENA, MINESOTA" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mi nec tellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien utellus mattis accumsan. Ut quis est elit. Aliquam scelerisque sapien ultrices vehicula placerat. Ut aliquet ante mauris, et maximus odio mollis id. Integer ut dignissim risus."/>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        </div>  
    )
}

const Card = ({review, author, hidden}: {review: string, author: string, hidden: boolean}) => {
    return (
        <div className={`bg-white rounded-3xl lg:rounded-[3rem] py-6 lg:py-12 px-4 lg:px-8 border border-green shadow-xs w-full flex-col lg:flex ${hidden ? "hidden" : "flex"}`}>
            <div className="flex justify-between mb-3 lg:mb-8 items-center">
                <img src="/quotes-icon.svg" alt="Picture of the author" className="w-7 lg:w-14"/>
                <div className="flex gap-1 lg:gap-2">
                    <img src="/star.svg" alt="star icon" className="w-4 lg:w-6"/>
                    <img src="/star.svg" alt="star icon" className="w-4 lg:w-6"/>
                    <img src="/star.svg" alt="star icon" className="w-4 lg:w-6"/>
                    <img src="/star.svg" alt="star icon" className="w-4 lg:w-6"/>
                    <img src="/star.svg" alt="star icon" className="w-4 lg:w-6"/>
                </div>
            </div>
            <div className="flex flex-col lg:justify-between lg:flex-1">
                <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium mb-6 lg:mb-12">{review}</p>
                <p className="text-sm lg:text-base lg:leading-5 font-bold leading-4">{author}</p>
            </div>
           
        </div>
    )
}