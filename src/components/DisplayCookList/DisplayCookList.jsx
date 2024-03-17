import PropTypes from 'prop-types';

const DisplayCookList = ({ wantCook,idx,handlePreparing }) => {
    const { recipe_name, preparing_time, calories } = wantCook;

    return (
        <div>
            <tbody className='flex p-2 mb-2 w-[542px] justify-around bg-gray-100 rounded-lg gap-6'>
                <td> <span> {idx+1}. </span>{recipe_name}</td>
                <td className='ml-10'>{preparing_time}</td>
                <td className='ml-16'>{calories}</td>
                <td><button onClick={()=> handlePreparing(wantCook)} className='btn bg-green-400 rounded-full'>Preparing</button></td>
            </tbody>
        </div>
    );
};

DisplayCookList.propTypes = {
    wantCook: PropTypes.object,
    idx: PropTypes.number,
    handlePreparing: PropTypes.func
}

export default DisplayCookList;