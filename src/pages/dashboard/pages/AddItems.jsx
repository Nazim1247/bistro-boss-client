import { useForm } from "react-hook-form";
import SectionTitle from "../../../sheared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {'content-type': 'multipart/form-data'}
        })
        // send item to server
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/menu',menuItem);
            console.log(menuRes.data)
            // show success popup
            if(menuRes.data.insertedId){
                reset()
                toast.success(`${data.name} is Added Successfully!`)
            }
        }
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"What's New"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text"
                            {...register("name", { required: true })}
                            placeholder="Recipe Name" className="input input-bordered w-full" />
                        <div className="label">
                        </div>
                    </label>

                    <div className="flex items-center gap-6">
                        {/* category  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category", { required: true })} className="select select-bordered w-full">
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

                        {/* price  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="number"
                                {...register("price", { required: true })}
                                placeholder="Price" className="input input-bordered w-full" />
                            <div className="label">
                            </div>
                        </label>
                    </div>
                    {/* recipe details  */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        <div className="label">
                        </div>
                    </label>
                    {/* image  */}
                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                    </div>

                    <button className="btn my-6 bg-orange-400 w-full">Add Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;