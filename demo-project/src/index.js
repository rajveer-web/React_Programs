import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const set = React.createElement("h1",null,"Welcome to the house...");
//ReactDOM.render(set,document.getElementById("content"));


//const element =<h1 className="testclass"> welcome to react programming .... </h1>;
//ReactDOM.render(element,document.getElementById("root"));

//const nele =(
//<div className="testclass"> 
//<h1> welcome to react programming .... </h1>
//<h1> welcome to react programming .... </h1>
//</div>
//);
//ReactDOM.render(nele,document.getElementById("nav"));

const newelement =<h1 className="testclass"> undersatnd the data of React..... </h1>;
ReactDOM.render(newelement,document.getElementById("app"));

//const set1 = React.createElement("div",{className:"testclass"},
//React.createElement("h1", null,"Welcome to the house..."),
//React.createElement("h1", null,"Welcome to the house..."));
//ReactDOM.render(set1,document.getElementById("root"));




                                              //with function
//function DisplayEmployeeInfo(employee){
/*var DisplayEmployeeInfo=(employee)=>{
  return <div>
    <h1>Employee Detail...</h1>
<p>
<label>Employee ID :<b>{employee.Id}</b></label>
</p>
<p>
<label>Employee Name :<b>{employee.Name}</b></label>
</p>
<p>
<label>Employee Location :<b>{employee.Location}</b></label>
</p>
<p>
<label>Employee Salary :<b>{employee.Salary}</b></label>
</p>
<Department deptname={employee.deptname} headname={employee.headname}></Department>
  </div>;
  }

  const Department= (deptinfo)=>{
    return <div>   
<p>Department Name is :<b>{deptinfo.deptname}</b></p>
<p>Department Head is :<b>{deptinfo.headname}</b></p>
</div>;
  }

  const element=<DisplayEmployeeInfo Id="100" Name="Rajveer" Location="New Zealand"
Salary="45000" deptname="Company" headname="Jenish">
  </DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById("root"));*/


                                                      //with class

class Employee extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
     render(){
             return <div>
               <h1>Employee Detail...</h1>
              <p>
                 <label>Employee ID :<b>{this.props.Id}</b></label>
              </p>
              <p>
                 <label>Employee Name :<b>{this.props.Name}</b></label>
              </p>
              <Department deptname={this.props.deptname} headname={this.props.headname}></Department>
</div>
    }
}

class Department extends React.Component{
  render(){
          return <div>
            <h1>Department Detail...</h1>
           <p>
              <label>Dept Name :<b>{this.props.deptname}</b></label>
           </p>
           <p>
              <label> Head Name :<b>{this.props.headname}</b></label>
           </p>
           
</div>
 }
}

const element=<Employee Id="100" Name="Rajveer" deptname="Company" headname="Jenish">
  </Employee>

ReactDOM.render(element,document.getElementById("root"));