import React from 'react';
import './Hero.css'

class Hero extends React.Component {
    constructor(props) {
        super(props);
        //Shortcuts
        this.color = this.props.color;
        this.title = this.props.title;
        this.subtitle = this.props.subtitle;
    }

    render() {
        return (
            <section className={"hero is-medium is-bold is-"+this.color}>
				<div className="hero-body">
					<div className="container">
						<h1 className='title is-large'>
							{this.title}
						</h1>
						<h4 className="subtitle">
							{this.subtitle}
						</h4>
					</div>
				</div>
			</section>
        );
    }
}

export default Hero;