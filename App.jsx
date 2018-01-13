import React from 'react';

class App extends React.Component {
   render() {
   	var style = {
   		color: "#cc00cc"
   	}
      return (
         <div>
         	<Header headerProp = {this.props.headerTitle}/>
            <Content/>
            <Footer footerProp = {this.props.footerTitle}/>
         </div>
      );
   }
}
class Header extends React.Component {
	render() {
		var headerClass = {
			textAlign : "center",
			backgroundColor : "#0000fc"
		}
		return(
			<div style = {headerClass}>
				<h1>{this.props.headerProp}</h1>
			</div>
		);
	}
}
class Content extends React.Component{
	constructor() {
		super();
		this.state = {
			myval : [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
		}
	}
	render() {
		return (
			<table>
				<tbody>
					{this.state.myval.map((val, i)=><TableRowData key={i} data={val}/>)}
				</tbody>
			</table>
		);
	}
}
class TableRowData extends React.Component {
	render() {
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}
class Footer extends React.Component {
	render() {
		var headerClass = {
			textAlign : "center",
			backgroundColor : "#0000fc"
		}
		return(
			<div style = {headerClass}>
				<h1>{this.props.footerProp}</h1>
			</div>
		);
	}
}

App.defaultProps = {
	headerTitle : "Header Changed",
	footerTitle : "Footer Changed"
}
export default App;
