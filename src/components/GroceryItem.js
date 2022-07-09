const GroceryItem = (props) => {
    const { Item, Units, Quantity, isPurchased } = props.GroceryData
    return (
        <div className="grocerylist">
            <br></br>
            <h2>Item: {Item}   Units: {Units}   Quantity: {Quantity + ""}   Got It? {isPurchased}</h2>
            
        </div>
    )
}

export default GroceryItem