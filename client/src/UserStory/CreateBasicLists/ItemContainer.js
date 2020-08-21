import React, {Component} from 'react'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import axios from 'axios'
import './App.css'

class ItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            openEdit: false,
            link: "",
            address: "",
            description: ""
        }
        this.toggleList =this.toggleList.bind(this)
    }
    toggleList(){
        this.setState(prevState => ({
          openEdit: !prevState.openEdit
        }))

    }
    saveEntryChange = (e) => {
        const {link, address, description} = this.state
        this.toggleList()
       
        axios.put(`http://localhost:3001/db/listEntries/${e.target.id}`, {
            link, 
            address, 
            description
        })
        .then((res) => {
            console.log(res)
        })
    }

    handleChangeForm(e) {
        console.log(e.target.id)
        const {name, value} = e.target
        this.setState({
          [name] : value
        });
        console.log(this.state)
      }

    render(){
        console.log(this.props.items.id)
        const {name, id} = this.props.items
        const {openEdit} =this.state
        return(
            <div> 
                <div className="close-item-container">
                    <div>{name}</div>
                    <img id={id} src={minus} className={openEdit? "visible-plus-minus": "hidden" } onClick={(e) => this.saveEntryChange(e)} alt="icon to close edit"/>
                    <img id={id}src={plus} className={!openEdit? "visible-plus-minus": "hidden" } onClick={this.toggleList} alt="icon to open edit"/>
                </div>
                <div className={openEdit? "open-item-container": "close"}>
                <input id={id}className="container-input" name="link" placeholder="website" onBlur={(e) => this.handleChangeForm(e)}/>
                <input id={id}className="container-input" name="address" placeholder="address" onBlur={(e) => this.handleChangeForm(e)}/>
                <input id={id}className="container-input" name="description" placeholder="notes" onBlur={(e) => this.handleChangeForm(e)}/>
                </div>
            </div>
           
        )
    }
}

export default ItemContainer