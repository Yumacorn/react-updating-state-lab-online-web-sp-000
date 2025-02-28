// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{
    
    constructor(props) {
        super(props)
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }
    )}

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }
    )}
    
    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleBitrate}> {this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.handleResolution}> {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}