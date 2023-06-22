import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import Pagination from "../Pagination/Pagination";

export default function ArticleList () {
    const [articles, setArticles] = useState(null)
    const [offset, setOffset] = useState(0)

    const fetchData = async () => {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${offset}`)
        const data = await response.json()
        setArticles(data);
    }

    useEffect(() => {
        fetchData()
    }, [offset])

    return (
        <>
        <div className="articles">
            <h2>Articles</h2>
            {
                articles === null
                ?
                ''
                :
                articles.map(element => <li key={element.id}><span><Link to={'/article/' + element.id}> Details <i className="fa-regular fa-newspaper"></i></Link></span>{element.title}</li>)
            }
            <div className="pagination">
                {
                    offset > 0 ? 
                    <Pagination offset={offset} setOffset={setOffset} label='Previous Page' value={-10}/>
                    :
                    <button className="btnEmpty">Previous Page</button>

                }
                    Page {offset/10 + 1}
                <Pagination offset={offset} setOffset={setOffset} label='Next Page' value={10}/>
            </div>
        </div>

        <Routes>
            <Route path="/article/:id" element={ <ArticleDetail /> } />
        </Routes>
        </>
    )
}