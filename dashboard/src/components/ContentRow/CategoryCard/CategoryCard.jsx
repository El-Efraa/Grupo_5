function GenreCard({ category, count }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {category}  : {count}
                </div>
            </div>
        </div>
    )
}


export default GenreCard;