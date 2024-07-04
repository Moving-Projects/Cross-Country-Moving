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
                            <Card hidden={false} author="John and Sarah L. - New York to California" review="Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service."/>
                            <Card hidden={false} author="Mark R. - Texas to Florida" review="Moving for a new job was stressful, but Cross Country Moving took all the worries off our shoulders. They were punctual, efficient, and kept us informed every step of the way. Highly recommend!"/>
                            <Card hidden={true} author="Emily T. - Illinois to Colorado" review="I was worried about moving my antique furniture, but Cross Country Moving took extra care to ensure everything arrived in perfect condition. Their packing services are top-notch!"/>
                            <Card hidden={true} author="The Smith Family - Virginia to Oregon" review="Our family had a fantastic experience with Cross Country Moving. The staff was friendly and made the entire process enjoyable. We felt supported from start to finish."/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 lg:gap-y-8">
                            <Card hidden={false} author="John and Sarah L. - New York to California" review="Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service."/>
                            <Card hidden={false} author="Mark R. - Texas to Florida" review="Moving for a new job was stressful, but Cross Country Moving took all the worries off our shoulders. They were punctual, efficient, and kept us informed every step of the way. Highly recommend!"/>
                            <Card hidden={true} author="Emily T. - Illinois to Colorado" review="I was worried about moving my antique furniture, but Cross Country Moving took extra care to ensure everything arrived in perfect condition. Their packing services are top-notch!"/>
                            <Card hidden={true} author="The Smith Family - Virginia to Oregon" review="Our family had a fantastic experience with Cross Country Moving. The staff was friendly and made the entire process enjoyable. We felt supported from start to finish."/>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4">
                            <Card hidden={false} author="John and Sarah L. - New York to California" review="Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service."/>
                            <Card hidden={false} author="Mark R. - Texas to Florida" review="Moving for a new job was stressful, but Cross Country Moving took all the worries off our shoulders. They were punctual, efficient, and kept us informed every step of the way. Highly recommend!"/>
                            <Card hidden={true} author="Emily T. - Illinois to Colorado" review="I was worried about moving my antique furniture, but Cross Country Moving took extra care to ensure everything arrived in perfect condition. Their packing services are top-notch!"/>
                            <Card hidden={true} author="The Smith Family - Virginia to Oregon" review="Our family had a fantastic experience with Cross Country Moving. The staff was friendly and made the entire process enjoyable. We felt supported from start to finish."/>
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