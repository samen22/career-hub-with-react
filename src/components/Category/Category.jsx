import PropTypes from 'prop-types'
const Category = ({ category }) => {
    const { name, logo, availability } = category;
    return (
        <div>
            <div className='max-w-5xl mx-auto mb-32'>
                <div className='rounded-lg bg-gradient-to-tr from-blue-100 to-purple-50 p-10 flex-grow'>
                    <div className='w-16 h-16 bg-blue-200 p-3 mb-8'>
                        <img className='w-10 h-10' src={logo} alt={`logos of ${category.name} `} />
                    </div>
                    <h2 className='text-xl font-extrabold text-[#474747] mb-2'>{name}</h2>
                    <p className='text-xs text-[#A3A3A3]'>{availability}</p>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object

}
export default Category;