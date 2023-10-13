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
      <div className="text-center">
        <h2 className="text-5xl text-[#1A1919] font-extrabold">Job Category List: {categories.length}</h2>
        <p className="text-xl text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div>
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default CategoryList;