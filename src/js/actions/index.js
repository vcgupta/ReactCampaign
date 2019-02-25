import { ADD_CAMPAIGN, PAUSE_CAMPAIGN } from "../constants";

function addCampaign(payload){
    return {
        type:ADD_CAMPAIGN,
        payload
    }
}

function pauseCampaign(payload){
    return {
        type:PAUSE_CAMPAIGN,
        payload
    }
}
window.addCampaign = addCampaign;
export { addCampaign, pauseCampaign};