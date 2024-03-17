import PropTypes from 'prop-types';
import DisplayCookList from '../DisplayCookList/DisplayCookList';

const Cooklist = ({ wantToCook }) => {

    return (
        <div>
            <div className="bg-base-100 shadow-xl p-4 rounded-2xl">
                <h4 className="text-2xl font-semibold text-center my-4">Want to cook: {wantToCook.length} </h4>
                <hr />
                <table className="my-4 w-[542px]">
                    <tr className='flex gap-24 font-semibold text-lg'>
                        <h6>Name</h6>
                        <h6 className='ml-10'>Time</h6>
                        <h6>Calorie</h6>
                    </tr>
                    {
                        wantToCook.map((wantCook, idx) => <DisplayCookList key={wantCook.recipe_id} idx={idx} wantCook={wantCook}></DisplayCookList>)
                    }
                </table>

                <h4 className="text-2xl font-semibold text-center my-4 mt-6">Currently cooking: 02 </h4>
                <hr />
                <table className="bg-gray-100 w-[542px] rounded-lg my-4">
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calorie</th>
                    </tr>
                    <tr>
                        <td className="px-8"> <span>1. </span>Chicken Caesar Salad</td>
                        <td>20 minute</td>
                        <td className="px-8">500 Calorie</td>
                    </tr>
                    <tr>
                        <td className="px-8"> <span>1. </span>Chicken Caesar Salad</td>
                        <td>20 minute</td>
                        <td className="px-8">500 Calorie</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

Cooklist.propTypes = {
    wantToCook: PropTypes.array
}

export default Cooklist;