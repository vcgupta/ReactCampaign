import { ICampaignProps } from '../../Campaigns/Campaign'
import { ADD_CAMPAIGN, PAUSE_CAMPAIGN } from '../constants';

export interface ICampaignsCollection{
    [key:string] : ICampaignProps
}
export interface IStoreState {
    campaigns: ICampaignsCollection
}

const initialState: IStoreState = {
    campaigns: {}
}

function rootReducer(state = initialState, action) {
    console.log(state, action);
    if (action.type === ADD_CAMPAIGN) {
        return Object.assign({}, state, {
            campaigns: { ...state.campaigns, [action.payload.id] : action.payload}
            //campaigns: state.campaigns.concat(action.payload)
        })
    } else if (action.type == PAUSE_CAMPAIGN) {
        const val = 
            {...state, 
                campaigns: {...state.campaigns, 
                    [action.payload] : {...state.campaigns[action.payload], isPaused: !state.campaigns[action.payload].isPaused}}
                
            // campaigns: state.campaigns.map((content, i) => {
            //    return content.key == action.payload ? { ...content, isPaused: !content.isPaused } : content
            // })
        };
        console.log(val);
        return val;
    }
    return state;
}

export default rootReducer;