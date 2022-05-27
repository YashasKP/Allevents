import React from "react";

class BasicDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            eventName:  '',
            startTime:  '',
            endTime:    '',
            location:   '',
            description:'',
            catagory:'',
            btn:''
        }
    }

    onChangeEventName(eventName) {
        this.setState({
            eventName: eventName,
        })
    }

    onChangeStartTime(startTime) {
        this.setState({
            startTime,
        })
    }

    onChangeEndTime(endTime) {
        this.setState({
            endTime,
        })
    }

    onChangeLocation(location) {
        this.setState({
            location,
        })
    }

    onChangeDescription(description) {
        this.setState({
            description,
        })
    }

    onChangeCateg(description) {
        this.setState({
            description,
        })
    }

    onChangeBtn(btn) {
        this.setState({
            btn,
        })
    }

    

    render(){
    return(
        <div className="detailsOfEvent" onSubmit={(e) => e.preventDefault()}>
            <form className="eventName">
                <div className="eventName">
                    <label>Event Name: </label>
                    <input type="text" value={this.state.eventName} onChange = {event => this.onChangeEventName(event.target.value)}/>
                    <br/>

                    <label>Start time: </label>
                    <input type='text' value = {this.state.startTime} onChange = {event => this.onChangeStartTime(event.target.value)}/><br/>

                    <label>End time: </label>
                    <input type='text' value = {this.state.endTime} onChange = {event => this.onChangeEndTime(event.target.value)}/><br/>
                    <label>Location: </label>
                    <input type='text' value = {this.state.location} onChange = {event => this.onChangeLocation(event.target.value)}/><br/>
                    <label>Description: </label>
                    <textarea value = {this.state.descreption} onChange = {event => this.onChangeDescreption(event.target.value)}/><br/>
                    <button className="btn"
                        coursesPage>
                    </button>
                </div>
            </form>
        </div>
    )
}
}

export default BasicDetails;