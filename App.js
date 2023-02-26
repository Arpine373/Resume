import logo from './logo.svg';
import './App.css';
import WorkExperience from './workexperience';
import Education from './education';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
function App() {


  return (
	<BrowserRouter>
		<div class="container">
		<div class="left-content p-30">
			<div class="logo">
				<a href="index.html">
					<span>My</span>
					<span>Resume</span>
				</a>
			</div>
			<div class="left-footer">
			<Education/>
			<WorkExperience/>
				<div class="foot-contact">
					<ul>
						<li>avagyanarpi5@gmail.com</li>
					</ul>
				</div>
				
<div class="copy-rights">Copyright &copy;2023 All rights reserved</div>
			</div>

		</div>
		<div class="main-content" id = "newpost">
			<div class="section1 p-30" id="Home">
			<div class="sec-title">
	<div class="pg-sub-title">Home</div>
	<div class="pg-title">My Profile</div>

			</div>
				<div class="d-flex-align-center">
				<div class="user-img flex-1">
				<div class="user-profile flex-1">
					<div class="pro-details">
						<div class="sm-text">HELLO EVERYBODY, I AM</div>
						<div class="name"><h3>Arpine Avagyan</h3></div>
						<div class="role">Front-end developer</div>
					</div>
					<div class="text">✓ Understanding of programming techniques, concepts, methodologies and tools <br/>
            ✓ Familiar with JavaScript basics, experience with writing small scripts <br/>
            ✓ Familiar with HTML, CSS <br/>
            ✓ Critical thinking </div><br/>
					<div class="pr-list">
						<ul>
							<li><i class="fa fa-calendar" aria-hidden="true"></i> 7th Feb, 1996</li>
							<li><i class="fa fa-envelope" aria-hidden="true"></i> avagyanarpi5@gmail.com</li>
							<li><i class="fa fa-map-marker" aria-hidden="true"></i> Yerevan, Armenia</li>
						</ul>
					</div>
				
			</div>
</div>
</div>

		</div>

</div>

</div>
</BrowserRouter>
)}

export default App;
