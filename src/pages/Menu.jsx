import { Helmet } from "react-helmet";
import Cover from "../sheared/Cover";
import menuBanner from '../assets/banner3.jpg';
import dessertBanner from '../assets/dessert-bg.jpeg';
import pizzaBanner from '../assets/pizza-bg.jpg';
import soupBanner from '../assets/soup-bg.jpg';
import saladBanner from '../assets/salad-bg.jpg';
import useMenu from "../hooks/useMenu";
import SectionTitle from "../sheared/SectionTitle";
import MenuCategory from "../sheared/MenuCategory";

const Menu = () => {
    const [menu]= useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBanner} title='our menu'></Cover>
            {/* main cover  */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertBanner}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaBanner}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladBanner}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupBanner}></MenuCategory>
        </div>
    );
};

export default Menu;