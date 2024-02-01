export default function NewsCard({title, author, description, coverImage, tags, date}){
    return (
        <div className="bg-white w-[400px] mx-auto p-4 rounded-xl drop-shadow-lg lg:w-[400px] md:w-[600px]">
            <img className="rounded-xl drop-shadow-lg" src={coverImage} alt={title} />
            <div className="py-2 "><div className="bg-gray-300 text-gray-800 w-fit p-1 rounded-md text-xs">{tags}</div></div>
            <div className="font-bold pb-2 text-xl font-playfair">{title}</div>
            <div className=" pb-2 text-gray-700 font-poppins">{description}</div>
            <div className="text-xs font-notica text-gray-500">{author}</div>
        </div>
    )
}