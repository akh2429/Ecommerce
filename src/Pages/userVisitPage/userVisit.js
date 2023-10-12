import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import jwtDecode from 'jwt-decode';


function UserVisit() {
    const [userVisitData, setUserVisitData] = useState();
    const [selectedValue, setSelectedValue] = useState('');

    const user = useMemo(() => {
        const JWtoken = JSON.parse(localStorage.getItem("user"));
        const decoded = jwtDecode(JWtoken.token);
        console.log()
        return {
            userVisitId: decoded.visitId
        };
    }, []);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    async function fetchUserVisits() {
        try {
            const response = await axios.post('http://localhost:5050/uservisitgetData', user);
            setUserVisitData(response.data.visitedProducts)
        } catch (error) {
            console.error(error);
        }
    };
    const filteredData = userVisitData?.filter((item) => {
        if (selectedValue === 'option1') {
            return true;
        } else if (selectedValue === 'option2') {
            return !item.purchased;
        } else if (selectedValue === 'option3') {
            return item.purchased;
        } else {
            return false;
        }
    });

    console.log(userVisitData)


    useEffect(() => {
        fetchUserVisits();
    }, []);


    return (
        <div className="m-1 p-1" >
            <div className="flex items-center justify-center m-2 p-2 border" >
                <select id="dropdown" className="text-center" value={selectedValue} onChange={handleSelectChange}>
                    <option value="">Choose the option</option>
                    <option value="option1">All Products</option>
                    <option value="option2">Un-Purchased</option>
                    <option value="option3">Purchased</option>
                </select>
            </div>
            {filteredData && filteredData.map((val, ind) =>
                <div key={ind} className="h-20 w-full border gap-5 flex m-1 p- " >
                    <img alt='Not Available' src={val.productId.images} className='w-h-max  object-contain border gap-2' />
                    <div className="flex justify-center flex-col rounded-2xl" >
                        <p className="flex border m-1 p-1 rounded-2xl" >
                            <div className="font-bold" >Product:-</div>
                            {val.productId.productname}
                        </p>
                        <p className="flex border m-1 p-1 rounded-2xl" >
                            <div className="font-bold">Barnd:-</div>
                            {val.productId.brand}
                        </p>
                    </div>
                    <div className="flex justify-center items-center font-bold border m-1 p-1 rounded-2xl  " >
                        <p>Visit Count:-</p>
                        {val.visitCount}
                    </div>
                    <div className="flex justify-center items-center font-bold border p-1 m-1 rounded-2xl">
                        {val.purchased === true ? <div className="text-green-500" >Purchased</div> : <div className="text-red-500" >Not Purchased</div>}
                    </div>
                </div>)}
        </div>
    )
};
export default UserVisit;