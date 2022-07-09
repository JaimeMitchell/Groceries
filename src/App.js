import './App.css';
import NavBar from './components/NavBar'
import GroceryData from './GroceryData';
import GroceryList from './components/GroceryList'
import { Component } from "react";

class App extends Component {

  // step 1: Default State is empty
  state = {
    GroceryData: GroceryData,
    Item: "",
    Units: "",
    Quantity: "",
    isPurchased: false
  }

  // step 2: when event happens change State Object above, in step 1.
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // step 3: Prevent the default State above, which would keep it empty
  handleSubmit = (event) => {
    event.preventDefault()

    // 4. Setting up a schema object of key:value pairs to insert in JSX render below
    const newGrocery = {
      GroceryData: GroceryData,
      Item: this.state.Item,
      Units: this.state.Units,
      Quantity: this.state.Quantity,
      isPurchased: this.state.isPurchased
    }

    this.setState({
      GroceryData: [newGrocery, ...this.state.GroceryData],
      Items: "",
      Units: "",
      Quantity: "",
      isPurchased: false
    })
    console.log(event)
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <br></br>
        <header className="App-header">GROCERY LIST</header>
        <br></br>

        <form onSubmit={this.handleSubmit}>

          <label text="Item">Item</label>
          <input type="text" value={this.state.Item} onChange={this.handleChange} id="Item" />

          <label text="Unit">Units</label>
          <input type="text" value={this.state.Units} onChange={this.handleChange} id="Units" />

          <label text="Quantity">Quantity</label>
          <input type="text" value={this.state.Quantity} onChange={this.handleChange} id="Quantity" />

          <label text="isPurchased">Purchased?</label>
          <input type="checkbox" value={this.state.isPurchased} onChange={this.handleChange} id='isPurchased' />

          <input type="submit" />
        </form>

        <GroceryList GroceryData={this.state.GroceryData} />

      </div>
    );

  }

}
export default App;
