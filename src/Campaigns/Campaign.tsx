import * as React from 'react';
import { IStoreState } from '../js/reducers';
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import './Campaign.css';
import { pauseCampaign } from '../js/actions';

export enum HistoryType {
    Paused, Resumed, Commeted, Renamed, Created
}

export interface IHistory {
    title: string,
    user: string,
    type: HistoryType
}
export interface ICampaignProps {
    title: string,
    created: Date,
    id: string,
    isPaused: boolean,
    history: IHistory[],
    onPauseClick: (key: string) => void,
    onAddCommentClick: (key: string) => void,
    onRenameClick: (key: string) => void,
    onDeleteClick: (key: string) => void
}


class Campaign extends React.Component<ICampaignProps>{
    // public static defaultProps: Partial<ICampaignProps> = {
    //     title: 'Default title',
    //     created: new Date(),
    //     key: "def key",
    //     isPaused: false,
    //     history: [],
    // }
    constructor() {
        super();
    }

    render(): JSX.Element {
        const pauseButtonText = this.props.isPaused ? "Resume" : "Pause";
        const dateVal = this.props.created ? this.props.created.toString() :'';
        console.log("Displaying", this.props.key)
        return (<div className="campaign-details">
            <div className="heading left">
                <span className="title">{this.props.title}</span>
                <span className="created-on">Created at {dateVal}</span>
            </div>
            <div className="action-buttons left">
                <button onClick={this.onPauseClick.bind(this)}>{pauseButtonText}</button>
                <button onClick={this.onAddCommentClick.bind(this)}>Comment</button>
                <button onClick={this.onRenameClick.bind(this)}>Rename</button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>
            <div className="clear"></div>
        </div>);
    }

    private onPauseClick(ev: any): void {
        console.log("Pause clicked");
        this.props.onPauseClick(this.props.id);
    }
    onAddCommentClick(ev: any): void {
        console.log("Add comment clicked");
        this.props.onAddCommentClick();
    }
    onRenameClick(ev: any): void {
        console.log("Rename clicked");
        this.props.onRenameClick();
    }
    onDeleteClick(ev: any): void {
        console.log("Delete clicked");
        this.props.onDeleteClick();
    }
}


function mapStateToProps(state: IStoreState, ownProps: ICampaignProps) {
    const item = state.campaigns[ownProps.id];
    console.log(item);
    if (item) {
        return Object.assign({}, item);
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {

        onPauseClick: (key: string) => {
            dispatch(pauseCampaign(key))
            return;
        },
        onAddCommentClick: (key: string) => { return; },
        onRenameClick: (key: string) => { return; },
        onDeleteClick: (key: string) => { return; }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);