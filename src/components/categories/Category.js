function Category (props) {
    return(
        <div className="col-lg-6 mb-4">
					<div className="card bg-info text-white shadow">
						<div className="card-body">
							Categoria: {props.titulo}<br></br>
							Productos Relacionados: {props.total}
						</div> 
					</div>
					</div>
    );
}
export default Category