import React from 'react';
import './Content.css';

class Content extends React.Component {
	constructor(props) {
		super(props);
		//Bind Methods 
		this.renderContent = this.renderContent.bind(this);
		this.editOutgoingLinks = this.editOutgoingLinks.bind(this);
		//Set Shortcuts
		this.content = this.props.content;
	}

	renderContent() {
		return (<div className="content" dangerouslySetInnerHTML={{__html: this.content}}></div>);
	}

	editOutgoingLinks(){
		var links = document.links;
		for (var i = 0, linksLength = links.length; i < linksLength; i++) {
			if (links[i].hostname !== window.location.hostname) {
				links[i].target = '_blank';
				links[i].rel = 'noopener';
			} 
		}
	}

	componentDidMount(){
		this.editOutgoingLinks();
	}

	render() {
		return (
			<div id="content">
				<div className='container'>
					{this.renderContent()}
				</div>
			</div>
		);
	}
}

export default Content;