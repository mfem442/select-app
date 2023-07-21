const Result = (props) => {
	return (
		<div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
			<div className="card py-3 px-2">
				{props.id === "" ? (
					<>
						<p className="text-center mb-3 mt-2 fs-3 m-5">No hay resultado</p>
					</>
				) : (
					<div className="myform">
						<p className="text-center mb-3 mt-2 fs-3 m-5">{props.id}</p>
						<img className="img-fluid mb-4" src={props.img} />
						<div className="mb-3">
							<a className="btn btn-block btn-primary btn-lg" href={props.info}>
								<small className="d-flex justify-content-between align-items-center">
									Ver más
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-arrow-right-short"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
										/>
									</svg>
								</small>
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Result;
