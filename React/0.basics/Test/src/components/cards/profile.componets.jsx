import {cat, cat2,cat3,cat4} from '../../assets/index'
import CardsComponent from './cards.components'
function ProfileComponent(){
    return(
        <>
        <h2>This is a Cat List</h2>
        <CardsComponent src={cat} alt={1}/>
        <CardsComponent src={cat2} alt={2}/>
        <CardsComponent src={cat3} alt={3}/>
        <CardsComponent src={cat4} alt={4}/>
        </>
    )
}
export default ProfileComponent