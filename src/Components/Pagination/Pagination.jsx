export default function Pagination ({offset, setOffset, label, value}) {

    const handleClick = () => {
        setOffset(offset + value)
    }

    return (
        <button className="btnPagination" onClick={handleClick}>{ label }</button>
    )
}