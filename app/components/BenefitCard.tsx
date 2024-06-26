export default function ({title, content, image}: {title: string, content: string, image: string}) {
    return (
        <div className="rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xs lg:shadow-sm w-full border border-accent">
            <img src={image} alt="image for benefits" className="w-full"/>
            <div className="py-4 lg:py-8 px-6 lg:px-8">
                <h4 className="font-russo mb-3 lg:text-[2rem]">{title}</h4>
                <p className="text-sm lg:text-lg font-medium">{content}</p>
            </div>
        </div>
    )
}