const GroceryItem = (props) => {
    const { Item, Units, Quantity, isPurchased, handleChange, handlesubmit } = props.GroceryData
    return (
        <div className="grocerylist">

            <h2>Item: {Item},  Units: {Units},  Quantity:{Quantity} </h2>
            <label className="purchased" text="isPurchased">Purchased?</label>
            <input type="checkbox" value={isPurchased} onChange={handleChange} id='isPurchased' />

        </div>
    )
}

const GroceryList = (props) => {
    return (
        <div>
            <h1 className='buy'>Buy:</h1>
            {props.GroceryData.map((i, index) =>
                <GroceryItem GroceryData={i} key={index} />)}
        </div>)
}

export default GroceryList