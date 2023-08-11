import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressList = () => {
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        const fetchAddressList = async () => {
            try {
                const response = await axios.get("http://localhost:3000/address");
                setAddressList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAddressList();
    }, []);

    return (
        <div>
            <h2>Address List</h2>
            <ul>
                {addressList.map((address) => (
                    <li key={address._id}>
                        Street: {address.street}, House: {address.house}, City: {address.city}, Zip: {address.zip}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddressList;