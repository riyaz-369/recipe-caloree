import PropTypes from 'prop-types';
import DisplayCookList from '../DisplayCookList/DisplayCookList';
import { useState } from 'react';
import DisplayCurrentlyCooking from '../DisplayCurrentlyCooking/DisplayCurrentlyCooking';

const Cooklist = ({ wantToCook }) => {

    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handlePreparing = (wantCook) => {
        const newWantCook = [...currentlyCooking, wantCook];
        setCurrentlyCooking(newWantCook);
    }

    return (
        <div>
            <div className="bg-base-100 shadow-xl p-4 rounded-2xl border-2">
                <h4 className="text-2xl font-semibold text-center my-4">Want to cook: {wantToCook.length} </h4>
                <hr />
                <table className="my-4 w-[542px]">
                    <tr className='flex gap-24'>
                        <th>Name</th>
                        <th className='ml-10'>Time</th>
                        <th>Calorie</th>
                    </tr>
                    {
                        wantToCook.map((wantCook, idx) => <DisplayCookList key={wantCook.recipe_id} idx={idx} wantCook={wantCook} handlePreparing={handlePreparing}></DisplayCookList>)
                    }
                </table>

                <h4 className="text-2xl font-semibold text-center my-4 mt-6">Currently cooking: {currentlyCooking.length} </h4>
                <hr />
                <table className="w-[542px] my-4">
                    <tr className='flex gap-24'>
                        <th>Name</th>
                        <th className='ml-28'>Time</th>
                        <th className='ml-7'>Calorie</th>
                    </tr>
                    {
                        currentlyCooking.map((currentlyCook, idx) => <DisplayCurrentlyCooking key={idx} currentlyCook={currentlyCook} idx={idx}></DisplayCurrentlyCooking>)
                    }
                </table>
            </div>
        </div>
    );
};

Cooklist.propTypes = {
    wantToCook: PropTypes.array
}

export default Cooklist;