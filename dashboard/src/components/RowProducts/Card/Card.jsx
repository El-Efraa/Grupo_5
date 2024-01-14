import React from "react";

function Card(props) {

	const {
		title = '',
		cifra = 0,
		icono
	} = props

	return (

		<div className={`card border-left-warning shadow h-100 py-2`}>
			<div className="card-body">
				<div className="row no-gutters align-items-center">
					<div className="col mr-2">
						<div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}>{title}</div>
						<div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>

					</div>
					<div className="col-auto">
						<i className={`${icono} fa-2xtext-gray-300`}></i>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Card;