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
                    <div className="h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 lg:gap-y-8 min-h-full">
                            <Card hidden={false} author="Global Enterprises" review="We recently used Cross Country Moving for our office move, and they were outstanding. Their commercial moving team was well-organized and knew exactly what they were doing. They took special care with our delicate equipment and ensured everything was set up perfectly in our new location. Great job!"/>
                            <Card hidden={false} author="Lisa H." review="I can't thank Cross Country Moving enough for their incredible service. Moving can be stressful, but their team made it so much easier. They were available 24/7 to address my concerns and provided excellent support throughout the move. I highly recommend their services to anyone in need of a reliable moving company."/>
                            <Card hidden={true} author="Robert F." review="Cross Country Moving was recommended to me by a friend, and I'm so glad I chose them for my long-distance move. The movers were professional, and the customer service was exceptional. They made sure everything was packed securely and arrived in perfect condition. I'm very satisfied with their service."/>
                            <Card hidden={true} author="The Garcia Family" review="I needed to move some items locally, and Cross Country Moving was the perfect choice. They were prompt, professional, and handled my belongings with care. Their rates were affordable, and the service was top-notch. I will definitely use them again for any future moves."/>
                        </div>
                    </div>
                    
                    <div className="h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 lg:gap-y-8 min-h-full">
                            <Card hidden={false} author="The Johnsons" review="I recently used Cross Country Moving for my long-distance move from New York to California, and I couldn't be happier with the service! The team was professional, efficient, and took great care of my belongings. They provided constant updates and made sure everything arrived on time and in perfect condition. Highly recommend for anyone looking for a reliable moving company!"/>
                            <Card hidden={false} author="Emily W." review="Cross Country Moving handled our local move last month, and they were fantastic. The movers were punctual, friendly, and worked quickly to get everything done. They made what could have been a stressful day run smoothly. I appreciate their attention to detail and would definitely use them again."/>
                            <Card hidden={true} author="Alex P." review="I had a small move within the city and was worried about finding a company that would take it seriously. Cross Country Moving exceeded my expectations. Despite the size of the move, they treated it with the utmost professionalism and care. Everything was handled perfectly, and their rates were very reasonable."/>
                            <Card hidden={true} author="Tech Solutions Inc." review="Our office relocation was seamless thanks to Cross Country Moving. Their commercial moving services are top-notch. They planned everything meticulously, ensuring minimal downtime for our business. The movers were knowledgeable and handled all our office equipment with care. We couldn't have asked for a better experience!"/>
                        </div>
                    </div>

                    <div className="h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4 min-h-full">
                            <Card hidden={false} author="David M." review="Cross Country Moving is a lifesaver! I had an emergency move and needed to relocate immediately. They offer 24/7 service, and despite the last-minute request, they were able to accommodate me. The team was swift and professional, making a stressful situation much easier to handle. Highly recommend for their availability and efficiency."/>
                            <Card hidden={false} author="Sarah T." review="Professionalism at its best! Cross Country Moving helped me with a long-distance move, and the entire process was smooth from start to finish. The movers were courteous, and the customer service was always available to answer my questions. I felt confident that my belongings were in good hands."/>
                            <Card hidden={true} author="Mike L." review="I hired Cross Country Moving for a local move, and they were fantastic. The team arrived on time, packed everything securely, and moved it all without a hitch. Their professionalism and attention to detail were impressive. I highly recommend them for any moving needs."/>
                            <Card hidden={true} author="Jenny K." review="Cross Country Moving provided excellent service for my small move. They were quick to respond to my inquiry and offered a very competitive rate. The movers were careful and efficient, making sure everything was transported safely. I was very pleased with their service."/>
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