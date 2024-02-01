export default function HeroSection({posts}){
    return (
        <div className="grid grid-cols-5 grid-rows-4 gap-2 mx-auto p-2 w-[500px] font-notica cursor-pointer md:w-[700px]">
            <div className=" col-span-3 row-span-4 relative leading-9 group overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full absolute group-hover:scale-105 transform transition duration-300" src={posts[posts.length - 1].coverImage.url} />
                <div className="absolute bottom-3 px-1 text-white text-[44px] hover:leading-10 duration-300 group-hover:underline">
                    {posts[posts.length - 1].title}
                </div>
            </div>
            <div className=" col-span-2 row-span-2 relative leading-5 group overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full group-hover:scale-105 transform transition duration-300" src={posts[posts.length - 2].coverImage.url} />
                <div className="absolute bottom-3 px-3 text-white text-[24px] hover:leading-6 duration-300 group-hover:underline">
                    {posts[posts.length - 2].title}
                </div>
            </div>
            <div className=" row-span-2 relative leading-4 group overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full group-hover:scale-105 transform transition duration-300" src={posts[posts.length - 3].coverImage.url} />
                <div className="absolute bottom-0 text-white hover:leading-5 duration-300 group-hover:underline">
                    {posts[posts.length - 3].title}
                </div>
            </div>
            <div className=" row-span-1 relative leading-4 group overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full group-hover:scale-105 transform transition duration-300" src={posts[posts.length - 4].coverImage.url} />
                <div className="absolute bottom-0 text-white hover:leading-5 duration-300 group-hover:underline">
                    {posts[posts.length - 4].title}
                </div>
            </div>
            <div className="row-span-1 relative leading-4 group overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full group-hover:scale-105 transform transition duration-300" src={posts[posts.length - 4].coverImage.url} />
                <div className="absolute bottom-0 text-white hover:leading-5 duration-300 group-hover:underline">
                    {posts[posts.length - 5].title}
                </div>
            </div>
        </div>
    )
}