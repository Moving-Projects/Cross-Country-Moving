import Question from "./Question";

const answers = [
    {question: "Specialization in Long-Distance Moves", answer: "Cross Country Moving has extensive experience in handling long-distance relocations, navigating the complexities of moving across state lines and from coast to coast. We understand the unique challenges of long-distance moves, such as coordinating timelines, managing logistics, and ensuring compliance with state regulations. Our team’s expertise allows us to plan and execute your move with precision, minimizing the stress and ensuring your belongings reach their destination safely and on time."},
    {question: "Specialization in Long-Distance Moves", answer: "Cross Country Moving has extensive experience in handling long-distance relocations, navigating the complexities of moving across state lines and from coast to coast. We understand the unique challenges of long-distance moves, such as coordinating timelines, managing logistics, and ensuring compliance with state regulations. Our team’s expertise allows us to plan and execute your move with precision, minimizing the stress and ensuring your belongings reach their destination safely and on time."},
    {question: "Specialization in Long-Distance Moves", answer: "Cross Country Moving has extensive experience in handling long-distance relocations, navigating the complexities of moving across state lines and from coast to coast. We understand the unique challenges of long-distance moves, such as coordinating timelines, managing logistics, and ensuring compliance with state regulations. Our team’s expertise allows us to plan and execute your move with precision, minimizing the stress and ensuring your belongings reach their destination safely and on time."},
    {question: "Specialization in Long-Distance Moves", answer: "Cross Country Moving has extensive experience in handling long-distance relocations, navigating the complexities of moving across state lines and from coast to coast. We understand the unique challenges of long-distance moves, such as coordinating timelines, managing logistics, and ensuring compliance with state regulations. Our team’s expertise allows us to plan and execute your move with precision, minimizing the stress and ensuring your belongings reach their destination safely and on time."},
]

export default function FAQ () {
    

    return (
        <div className="my-20 lg:my-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-72">
            <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-center">FAQ</p>
            <h3 className="font-russo text-2xl lg:text-5xl mb-8 lg:mb-16 leading-none text-center"><span className="text-accent">FAQs</span> About the Process of Our Moving Services</h3>
            <div className="lg:px-24">
                {
                    answers.map((item: any, index) => (
                        <Question key={index} item={item} index={index}/>
                    ))
                }
            </div>
           
        </div>
    )
}