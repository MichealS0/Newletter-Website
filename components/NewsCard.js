export default function NewsCard({slug, title, description, coverImage}){
    return (
        <div className="mt-4">
            <p>{slug}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={coverImage} alt="This is the cover image of the news entry" />
        </div>
    )
}