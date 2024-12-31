
import { Link } from 'react-router-dom';
import MenuItems from '../components/MenuItems';
import Cover from './Cover';

const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            <div className='mb-12'>
            {title && <Cover img={img} title={title}></Cover>}
            </div>
            <div className="grid md:grid-cols-2 gap-10 pb-12">
                {
                    items.map(item => <MenuItems key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
                <div className='text-center'>
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mb-12">Order Now</button></Link>
                </div>
        </div>
    );
};

export default MenuCategory;