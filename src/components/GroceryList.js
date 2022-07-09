import GroceryItem from './GroceryItem'

const GroceryList = (props) => {
    return (
        <div>
            <h1>Buy:</h1>
            {props.GroceryData.map((i, index) =>
                <GroceryItem GroceryData={i} key={index} />)}
        </div>)
}

export default GroceryList