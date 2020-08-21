import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import ItemContainer from './ItemContainer'


/*******pseudocode****** 
 * before list has name, entires can be posted with the list name TEMP
 * when list has been given name and save button clicked,
 * then function to GET all list entries with name TEMP
 * PUT edit all those entry names to NEWNAME user has just created 
 * if list is never saved, (such as click home button)
 * all entries with list name TEMP will be deleted
 * 
*/

class AddItem extends Component {
    constructor(){
        super()
        this.state = {
            items: [],
            value: "" ,
            name: "", 
            dataLoaded: false
        }
        this.addNewItem =this.addNewItem.bind(this)
    }

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            // e.preventDefault();
            // e.stopPropagation();
            this.addNewItem(e);
          }
    }

 addNewItem = (e, i) => {
    //  let value = e.currentTarget.value
    // localStorage.setItem()
    // console.log(localStorage)
    // console.log(localStorage.getItem())
    axios.post('http://localhost:3001/db/createListEntry', {
        name: e.currentTarget.value,
        temp: true,
        tableType: 'housing'
    })
    .then( res => {
        console.log(res)
            this.setState({
                fireRedirect: true, 
                tableType: "listEntries",
            })
    })
    .then(() => {
        this.updateListItems()
    })
 }


 updateListItems = () => {
    axios.get('http://localhost:3001/db/listEntries')
    .then((res)=> {
        console.log(res)
        this.setState({
            dataLoaded:true,
            items: res.data.data
        })
    })
 }


    render(){
        const {items} = this.state
        return(
            <div>
                {items.length > 0 &&
                items.map((item, i) => {
                    return (
                        <div>
                            <div key={i}>
                            <ItemContainer items={item} />
                            </div>
                        </div>
                    )
                })}
                <InputItem  addNewItem={e => this.onKeyDown(e)}
                />
                {items.length > 0 &&
                <button>Save List</button>}
            </div>
        )
    }
}

export default AddItem

export const InputItem = (props) => {
    const {addNewItem} = props
    return(
        <div>
            <input 
                id="input"
                className="add-item-container"
                placeholder="+ add a list item"
                onKeyDown={e => addNewItem(e)}
                value={props.value}
            />
        </div>
        
    )
}
