import { useEffect } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { getAllCollection } from '../../api';
import { actionType } from '../../context/reducer';

const NewDocButton = () => {
    const [{ allCollection }, dispatch] = useStateValue();
   
    useEffect(() => {
        if (!allCollection) {
            (async () => {
                await getAllCollection().then((data) => {
                    dispatch({
                        type: actionType.SET_ALL_COLLECTION,
                        allCollection: data.data
                    })
                })
              })();
        }
    }, [])

    return (
        <>
        {console.log(allCollection)}
        </>
    )
}

export default NewDocButton