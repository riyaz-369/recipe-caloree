import PropTypes from 'prop-types';

const DisplayCurrentlyCooking = ({ currentlyCook, idx }) => {
    const { recipe_name, preparing_time, calories } = currentlyCook;

    return (
        <div>
            <tbody className='flex p-2 mb-2 w-[542px] justify-around bg-gray-100 rounded-lg gap-6'>
                <td> <span> {idx+1}. </span>{recipe_name}</td>
                <td className='ml-10'>{preparing_time}</td>
                <td className='ml-16'>{calories}</td>
            </tbody>
        </div>
    );
};

DisplayCurrentlyCooking.propTypes = {
    currentlyCook: PropTypes.object,
    idx: PropTypes.number
}

export default DisplayCurrentlyCooking;