import SectionTitle from "../sheared/SectionTitle";
import MenuItems from "./MenuItems";
import useMenu from "../hooks/useMenu";
// import { useEffect, useState } from "react";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(items => items.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="mb-8">
            <SectionTitle
            subHeading={'from our menu'}
            heading={'popular menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center my-12">
            <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;