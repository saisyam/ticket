import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import { Router } from 'preact-router';
import Home from '../../routes/home';
import Profile from '../../routes/profile';

import Header from '../header';
import Sidenav from '../sidenav';

const Dashboard = () => (
	<>
		<Header />
		<section>
			<Sidenav />
			<div class={style.pagecontent}>
			<Router>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
			</div>
		</section>
    </>
);

export default Dashboard;
