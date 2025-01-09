// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import SectionTitle from "../../../sheared/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {

    // const {id} = useParams()
    // useEffect(()=>{ 
    //     const {data} = axios.get(`http://localhost:5000/menu/${id}`)
    //     console.log(data)
    // },[id])
    
    
    const item = useLoaderData();
    const {name,image,price,category,recipe,_id} = item || {};

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

            // const imageFile = { image: data.image[0] };
            // const res = await axiosPublic.post(image_hosting_api,imageFile,{
            //     headers: {'content-type': 'multipart/form-data'}
            // })
            // send item to server
            
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    recipe: data.recipe,
                    price: parseFloat(data.price),
                    image: data.image,
                    // image: res.data.data.display_url,
                }

                const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
                
                // show success popup
                if(menuRes.data.modifiedCount > 0){
                    reset()
                    toast.success(`${data.name} is updated Successfully!`)
                }
        }

    return (
        <div>
            <SectionTitle heading={'Update item'} subHeading={'Update Info'}></SectionTitle>
            <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Recipe Name*</span>
                                    </div>
                                    <input type="text"
                                        {...register("name", { required: true })}
                                        defaultValue={name}
                                        placeholder="Recipe Name" className="input input-bordered w-full" />
                                    <div className="label">
                                    </div>
                                </label>
            
                                <div className="flex items-center gap-6">
                                   

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Category*</span>
                                        </div>
                                        <select {...register("category", { required: true })}
                                        defaultValue={category}
                                        className="select select-bordered w-full">
                                            <option disabled selected>Select a Category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">pizza</option>
                                            <option value="soup">soup</option>
                                            <option value="dessert">dessert</option>
                                            <option value="drinks">drinks</option>
                                        </select>
                                        <div className="label">
                                        </div>
                                    </label>
            
                                    
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Price*</span>
                                        </div>
                                        <input type="number"
                                            {...register("price", { required: true })}
                                            defaultValue={price}
                                            placeholder="Price" className="input input-bordered w-full" />
                                        <div className="label">
                                        </div>
                                    </label>
                                </div>
                                

                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Recipe Details</span>
                                    </div>
                                    <textarea {...register("recipe", { required: true })} 
                                    defaultValue={recipe}
                                    className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                                    <div className="label">
                                    </div>
                                </label>
                                

                                <div>
                                    <input type="text" {...register("image", { required: true })}
                                    defaultValue={image}
                                    
                                    className="file-input file-input-bordered w-full" />
                                </div>
            
                                <button className="btn my-6 bg-orange-400 w-full">Update Item <FaEdit /></button>
                            </form>
                        </div>
        </div>
    );
};

export default UpdateItem;