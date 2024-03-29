
const Paginator = (props: {page: number, lastPage: number, pageChanged: (page: number) => void}) => {

    const next = () => {
        if (props.page < props.lastPage){
            props.pageChanged(props.page + 1)
        }
      }
    
      const previous = () => {
        if (props.page > 0){
            props.pageChanged(props.page - 1)
        }
      }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={previous}>Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator