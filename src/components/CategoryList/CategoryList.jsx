import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    fetch('../../../public/data/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-5xl text-[#1A1919] font-extrabold mb-4">Job Category List</h2>
        <p className="text-xl text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="md:flex justify-between items-center flex-grow sm:mx-auto sm:flex-1 sm:m-1 space-y-1 mt-8">
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default CategoryList;