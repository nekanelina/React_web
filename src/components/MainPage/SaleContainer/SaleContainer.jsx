import React, {useState, useEffect} from "react";
import "./saleContainer.css";
import ThumbnailSale from "../Thumbnail/ThumbnailSale"
import { useNavigate } from 'react-router-dom'
import useProducts from "../../../hooks/useProducts";



const SaleContainer = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([""]);

    const { getSaleProducts } = useProducts();

    let randomIndexes = [1, 4, 3, 11];
    const fetchData = async () => {
    
        const result = await getSaleProducts();
        if (result) {
            setData(() => {
                const updatedData = randomIndexes.map(index => result[index]);
                console.log(updatedData);
                setData(updatedData)
                return updatedData;
            });
        }
    }


    const random = () => {
        const indexes = [];
            
                while (indexes.length < 4) {
                    const index = Math.floor(Math.random() * 12);
                    if (!indexes.includes(index)) {
                        indexes.push(index);
                    }

            }
            
        randomIndexes = indexes;
        };
            

    useEffect(() => {
        random();
        fetchData();   
    }, []);
    


    const onClickHandler = () => {
        navigate('/sale');
    };


    return (
        <div className="sale-wrapper">
            <div className="sale-title"><h2>Sale!</h2></div>
            <div className="sale-container">
                {data && data.map((item) => {
                    return <ThumbnailSale {...item} />
                })}
                <button className="active-btn" onClick={onClickHandler}><span>View all</span></button>
            </div>
        </div>

    );
};

export default SaleContainer;