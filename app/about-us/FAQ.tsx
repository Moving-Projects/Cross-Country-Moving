import Question from "./Question";

const answers = [
    {question: "How far in advance should I book my move?", answer: "It's recommended to book your move at least 4-6 weeks in advance, especially during peak moving seasons like summer. This ensures availability and allows ample time for planning and preparation."},
    {question: "What should I do to prepare for my move?", answer: "Start by decluttering your home and deciding what items you want to take with you. Pack non-essential items first, label all boxes clearly, and make an inventory of your belongings. It's also a good idea to notify utility companies and update your address with relevant institutions."},
    {question: "Are there any items that movers won't transport?", answer: "Yes, movers typically have a list of prohibited items, which usually includes hazardous materials like chemicals, flammable items, and explosives. Additionally, perishable food, pets, and plants are generally not transported by moving companies."},
    {question: "How is the cost of my move determined?", answer: "The cost of your move is determined by several factors, including the distance of the move, the volume and weight of your belongings, the services required (e.g., packing, storage), and the time of year. We provide free quotes to give you an accurate estimate based on your specific needs."},
]

export default function FAQ () {
    

    return (
        <div className="my-20 lg:my-32 px-4 lg:max-w-[120rem] lg:mx-auto lg:px-96">
            <p className="font-russo text-xs lg:text-base mb-4 lg:mb-6 leading-none text-center">FAQ</p>
            <h3 className="font-russo text-2xl lg:text-5xl mb-4 lg:mb-6 leading-none text-center"><span className="text-accent">FAQs</span> About the Process of Our Moving Services</h3>
            <p className="text-sm lg:text-[16px] lg:leading-6 2xl:text-lg font-medium mb-8 lg:mb-16 text-center">At Cross Country Moving Company, we strive to provide you with all the information and support you need for a successful move. If you have any other questions or need further assistance, please don&apos;t hesitate to contact us.</p>
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