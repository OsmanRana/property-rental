import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Floors = () => {
    const floorLayout = [
        {
            id:1,
            title: "1st Floor Layout",
            img: "/first-floor.jpg"
        },
        {
            id:2,
            title: "2nd Floor Layout",
            img: "/second-floor.jpg"
        },
        {
            id:3,
            title: "3rd Floor Layout",
            img: "/third-floor.jpg"
        },
    ]
    let {floorId} = useParams();
    return (
        <div className="container my-5 p-5 shadow rounded-3">
            {
                floorLayout.map((layout, key) => {
                    return <div key={layout.id}>
                        {
                            layout.id === parseInt(floorId) && <div>
                                <h1 className="text-center text-primary border rounded-pill p-3">{layout.title.toUpperCase()}</h1>
                                <Link to="/" style={{textDecoration: "none"}}><p className="text-center">Home</p></Link>
                                <img src={layout.img} alt="Floor Layout" className="w-100"/>
                            </div>
                        }
                    </div>
                })
            }
        </div>
    );
};  

export default Floors;