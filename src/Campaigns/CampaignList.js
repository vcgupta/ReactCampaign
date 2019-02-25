import * as React from 'react';
import { connect } from 'react-redux'
import Campaign from '../../src/Campaigns/Campaign.tsx'

const mapStateToProps = state => {
    return { campaigns: state.campaigns }
}

// export interface ICampaignList{
//     campaigns: ICampaignsCollection
// }

//TODO Change this to class with this.props
class CampaignListItem extends React.Component {

    constructor() {
        super();

    }

    render() {

        return (<div className="campaign-list-header">

            <span className="display-count">Showing {Object.keys(this.props.campaigns).length} Campaigns</span>
            <div className="campaign-list">
                { Object.keys(this.props.campaigns).map((key)=>{
                    return <Campaign key={key} id={key} />
                })
                } 
            </div>
        </div>)

    }

}
const CampaignList = connect(mapStateToProps)(CampaignListItem);
export default CampaignList;