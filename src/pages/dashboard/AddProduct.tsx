import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../../types";
import { useCreateProductMutation } from "../../redux/api";
import { toast, ToastContainer } from "react-toastify";

const AddProduct: React.FC = () => {
  const [createProduct] = useCreateProductMutation()
  const { register, handleSubmit } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = async (data) => {
    const email = 'you@email.com'
    const productData = {...data, email}
    const result = await createProduct(productData)
    
    if(result.data){
      console.log('success')
      toast('data inserted')
    }
  };
  return (
    <div>
      <ToastContainer />
      <form
        className="form-control p-6"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full rounded-sm"
              required
              {...register("name")}
            />
          </div>
          <div className="w-full ">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="Brand"
              className="input w-full input-bordered rounded-sm"
              required
              {...register("brand")}
            />
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full rounded-sm"
              required
              {...register("imgUrl")}
            />
          </div>
          <div className="w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input w-full input-bordered rounded-sm"
              required
              {...register("price")}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className="select select-bordered w-full  rounded-sm"
            >
              <option disabled selected>
                Product category
              </option>
              <option value="dress">Dress</option>
              <option value="toys">Toys</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="pets">Pets</option>
              <option value="foods">Foods</option>
            </select>
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Gender Type</span>
            </label>
            <select {...register('genderType')} className="select select-bordered w-full  rounded-sm">
              <option disabled selected>
                This product is for male or female
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <label className="label">
            <span className="label-text">Gender Type</span>
          </label>
          <textarea
          {...register('description')}
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
        </div>

        <button className="btn btn-info mt-9">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
