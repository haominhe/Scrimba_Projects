import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bhk.jpg',
            isLoading: false,
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGen = this.handleGen.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({
                    allMemeImgs: memes,
                    isLoading: false
                })
            })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }

    handleGen(event) {
        event.preventDefault();
        const randomNum = this.getRandomInt(this.state.allMemeImgs.length);
        const randomImgTemp = this.state.allMemeImgs[randomNum].url;
        this.setState({
            randomImg: randomImgTemp
        })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleGen}>
                    <input type='text' value={this.state.topText} name='topText' placeholder='Top Text' onChange={this.handleChange} />
                    <br />
                    <input type='text' value={this.state.bottomText} name='bottomText' placeholder='Bottom Text' onChange={this.handleChange} />
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

} export default MemeGenerator;