import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText,  Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component{
	// this is const for the tabs to pass it as a props and make the active tabs
	constructor(props) {
		super(props);
		this.state = {activeTab: 0};
	}
	// this is method for the section in side the tab 
	toggleCategories(){
		if(this.state.activeTab === 0){
		return(
			<div className="Projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>
			  React project #1
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>
			  React project #2
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>
			  React project #3
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			</div>
			
			)
	} else if(this.state.activeTab === 1){
		return(
			
			<div className="Projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://blog.launchdarkly.com/wp-content/uploads/2017/02/maxresdefault-1.jpg) center / cover'}}>
			  Angular project #1
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://blog.launchdarkly.com/wp-content/uploads/2017/02/maxresdefault-1.jpg) center / cover'}}>
			  Angular project #2
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://blog.launchdarkly.com/wp-content/uploads/2017/02/maxresdefault-1.jpg) center / cover'}}>
			  Angular project #3
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			</div>
			
			)
	}else if(this.state.activeTab === 2){
		return(
		<div className="Projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://laracasts.com/images/series/squares/learning-vue-step-by-step.jpg) center / cover'}}>
			  VueJS project #1
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://laracasts.com/images/series/squares/learning-vue-step-by-step.jpg) center / cover'}}>
			  VueJS project #2
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://laracasts.com/images/series/squares/learning-vue-step-by-step.jpg) center / cover'}}>
			  VueJS project #3
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			</div>
			
			
			)
	}else if(this.state.activeTab === 3){
		return(
			<div className="Projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://freefrontend.com/assets/img/html-css.png) center / cover'}}>
			  HTML/CSS project #1
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://freefrontend.com/assets/img/html-css.png) center / cover'}}>
			  HTML/CSS project #2
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			 <CardTitle style={{color: '#fff', height:'176px', background:
			 'url(https://freefrontend.com/assets/img/html-css.png) center / cover'}}>
			  HTML/CSS project #3
			</CardTitle>
			<CardText>sdjcskdjcbks csldknclsdnc dasokcsdl
			dlkcsdnclksdncksdlkcmlksdmc'
			sdkmsdlkcmlsdkmclkmsdlkcmlsdmclk</CardText>
			<CardActions border>
			<Button colored>GitHub</Button>
			<Button colored>Codepen</Button>
			<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
			<IconButton name="share" />
			</CardMenu>
			</Card>
			</div>
			
			)
	}
	}
	
	render() {
		return(
			<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
			<Tab>React</Tab>
			<Tab>Angular</Tab>
			<Tab>VueJS</Tab>
			<Tab>HTML/CSS</Tab>
			</Tabs>

			
			<Grid>
              <Cell col={12}>
              <div>{this.toggleCategories()}</div>
              </Cell>
			</Grid>
			
			


			</div>
			)
	}
}

export default Projects;