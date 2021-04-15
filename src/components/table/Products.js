function Products (props) {
    return (
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>${props.price}</td>
        </tr>
    );
}
export default Products