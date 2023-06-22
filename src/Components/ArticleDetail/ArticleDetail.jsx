import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ArticleDetail () {

    const [article, setArticle] = useState('')

    const { id } = useParams()

    const fetchData = async () => {
        const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles/' + id)
        const data = await response.json()
        setArticle(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div className="article">
            <h1>{article.title}</h1>
            <img src={article.imageUrl} alt=""/>
            <p>{article.summary}</p>
            <div className="btnMore"><a href={article.url} target="_blank">Read More...</a></div>
        </div>
    )

}