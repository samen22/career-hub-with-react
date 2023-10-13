import PropTypes from 'prop-types'
const Category = ({ category }) => {
    const { name, logo, availability } = category;
    return (
        <div>
            <div className='grid grid-cols-4'>
                <div className='` rounded-xl bg-[#, #9873FF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                    <img src={logo} alt={`logos of ${category.name} `} />
                    <h2>{name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object

}
export default Category;