import SectionTitle from "../sheared/SectionTitle";
import featured from '../assets/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-bg text-white bg-fixed">
            <div className="pt-6">
            <SectionTitle subHeading={'check it out'}
            heading={'featured items'}
            ></SectionTitle>
            </div>
            <div className="md:flex items-center justify-center gap-6 lg:py-20 lg:px-36 py-8 px-10 bg-slate-500 bg-opacity-60">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="space-y-4">
                <p>Aug 20, 2029</p>
                <p>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam eius in ad aliquid itaque nihil animi incidunt, porro non voluptates illum consequatur molestiae officiis, corporis maxime perspiciatis nostrum iure.</p>
                <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;