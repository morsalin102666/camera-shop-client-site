import { Link } from "react-router-dom";

const ShowMyToy = ({ toy }) => {
    const { _id, productName, selarName, photoUrl, subCategory, price, quantity, } = toy
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{selarName}</td>
            <td>{productName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity} Items</td>
            <th>
                <Link to={`/allToyDetail/${_id}`} className="btn btn-gray">Details</Link>
            </th>
            <th>
                <Link to={`/updateToy`} className="btn btn-gray">Update</Link>
            </th>
            <th>
                <button className="btn btn-gray">Delete</button>
            </th>
        </tr>);
};

export default ShowMyToy;