import { useDispatch, useSelector } from "react-redux"
import "./saved.css"
import { getSaved, setSaved } from "../features/savedSlice"
import { deleteSavedLocalStorage, readSavedLocalStorage } from "../features/localStorage";






export const Saved = () => {
    const savedItems = useSelector(getSaved);
    const dispatch = useDispatch();




 
    const onDeleteHandle = (e) =>{
        const value = e.target.parentNode.children[0].innerText;
        console.log(value)
        let obj = {result: value }
        deleteSavedLocalStorage(obj)
        dispatch(setSaved(readSavedLocalStorage()))
    }

   
        return (<>
            <div className="saved">
                <h3>saved</h3>
                
                <div className="savedGrid">
                    { savedItems.map(obj => {
                    return(
                        <div className="savedItem">
                            <p>{obj.result}</p>
                            <i class="fa-regular fa-x" onClick={onDeleteHandle}></i>
                        </div>)   
                })}
                </div>
                </div>
            
            </>)
    
    
}