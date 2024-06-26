export default function ({title, content, image, split=false}: {title: string, content: string, image: string, split?: boolean}) {
    return (
        <div className="rounded-3xl lg:rounded-[3rem] border border-green p-4 lg:pt-12 lg:pb-[4.5rem] lg:px-8 relative shadow-sm lg:flex-1">
            <img src={image} alt="local move icon" className="absolute size-20 lg:w-[30%] 2xl:w-40 lg:h-auto 2xl:h-40 right-8 -top-6 lg:-top-12"/>
            <h3 className={"font-russo mb-6 lg:text-[2rem] " + (split ? "lg:mb-6" : "lg:mb-16")}>{split ? <>{title.split(" ")[0]} <br/> {title.split(" ")[1]}</> : title}</h3>
            <p className="text-sm lg:text-lg leading-4 lg:leading-6 font-medium">{content}</p>
        </div>
    )
}