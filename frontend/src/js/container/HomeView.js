import React from 'react'
import { connect } from 'react-redux'
import  Actions from '../action/index.js'
import HelmetTags from '../helpers/HelmetTags.js'
import Header from '../components/Header.js'

class Home extends React.Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	static loadData(store){
		return store.dispatch(Actions.getInitialData())
	}

	render(){
		
		return(

			<React.Fragment>
				<Header {...this.props}/>
				<textarea className="edit-blck" rows="50"/>
			</React.Fragment>
			)
	}
}

const mapStateToProps = (state)=>{
	return {
		USER:state.USER
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getInitialData:()=>dispatch(Actions.getInitialData())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)