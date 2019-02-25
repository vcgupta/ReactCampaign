import uuidv1 from 'uuid';
import { connect } from 'react-redux';
import {addCampaign} from '../js/actions/index'
import * as React from 'react'
import {ICampaignProps} from './Campaign';

const mapStateToDispatch = (dispatch)=>{
    return { addCampaign : campaign => dispatch(addCampaign(campaign)) }
}

class AddCampaignForm extends React.Component{
    constructor(){
        super();
        this.state = {
            'title':"Form Title"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);        
    }
    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addCampaign({ title: title, id: id, created: new Date(), isPaused:false, history:[]} as Partial<ICampaignProps>);
        this.setState({ title: ''});
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }
    render(){
        const {title} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <table><tbody>
                    <tr><td>Campaign Title: </td><td><input type="text" onChange={this.handleChange} id="title" value={title} /></td></tr>

                    <tr><td>&nbsp; </td><td><button type="submit" onClick={this.handleSubmit}>Save</button></td></tr>
                    </tbody>
                </table>
            </form>
        )
    }

}

const AddForm = connect(null, mapStateToDispatch)(AddCampaignForm);
export default AddForm;