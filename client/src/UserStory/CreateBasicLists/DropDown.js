import "./App.css"
import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'
// import onClickOutside from 'react-onclickoutside'

class DropDown extends Component {
    constructor(){
        super()
        this.state = {
            selected: '',
            listType: [
                "Airlines", 
                "Cities", 
                "Hotels", 
                "Restaurants",
                "Apartments/ Houses", 
                "Music",
                "Movies",
                "Custom-List" 
            ]
          
    }
    this.toggleSelected = this.toggleSelected.bind(this)
}

 toggleSelected  = (e) => {
     //set selected state to true of corresponding item
    this.setState({ selected: e.target.value })
    console.log(this.state, this.state.listType[this.state.selected] )
  }

    render(){
        return(
            <div>
                <p>Select the type of list</p>
                <div className="dd-wrapper">
                    <DropDownChild 
                    title="Select a list type"
                    listType={this.state.listType}
                    selected={this.state.selected} 
                    toggleItem={this.toggleSelected}/>
                </div>
            </div>
        )
    }
}

export default DropDown


class DropDownChild extends Component {
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
      }
      handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }
      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
        this.changeDropDownTitle()
    }

    changeDropDownTitle(){
      const {listType, selected} = this.props
      selected &&
      this.setState({headerTitle: listType[selected]})
      console.log(this.state)
    }
    async toggleItemSelected(e){

      this.props.toggleItem(e)
      await this.changeDropDownTitle()
      this.toggleList()
     
    }
      render(){
        const {listType  } = this.props
        const {listOpen, headerTitle} = this.state


      

  
        return(
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">{headerTitle}</div>
                {listOpen
                ? <div className='up-arrow'></div>
                : <div className='down-arrow'></div>}   
                </div>
                {listOpen && <ul className="dd-list">
                    {listType.map((item, i) => (
                        <li className="dd-list-item" value={i} key={i} onClick={(e) => this.toggleItemSelected(e)}>{item}{item.selected && <div className="check"></div>}</li>
                    ))}
            </ul>}
            <button onClick={() => this.setState({fireRedirect: true})}>Create List</button>
            {this.state.fireRedirect
              && <Redirect
                push to={{pathname: `list`,
                state: {headerTitle}}} />}
         </div>
        )
      }
      
    
}


// listType: [
//     {
//         id: 0,
//         title: 'Airlines',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//       id: 1,
//       title: 'Cities',
//       selected: false,
//       key: 'type-list'
//     },
//     {
//         id: 2,
//         title: 'Hotels',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//         id: 3,
//         title: 'Restuarants',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//         id: 4,
//         title: 'Apartments/ Houses',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//         id: 5,
//         title: 'Music',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//         id: 6,
//         title: 'Movies',
//         selected: false,
//         key: 'type-list'
//     },
//     {
//         id: 7,
//         title: 'Custom List',
//         selected: false,
//         key: 'type-list'
//     }

//  ]