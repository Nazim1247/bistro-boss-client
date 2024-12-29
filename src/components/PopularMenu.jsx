import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItems from "./MenuItems";


const PopularMenu = () => {
    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(items => items.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="mb-8">
            <SectionTitle
            subHeading={'from our menu'}
            heading={'popular menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center my-12">
            <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
            <div className="lg:px-56 md:px-20 px-10 mb-12">
                <h3 className="bg-black text-white text-center py-12 md:text-3xl text-xl">Call Us +8801924772057</h3>
            </div>
        </section>
    );
};

export default PopularMenu;