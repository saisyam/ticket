import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Sidenav = () => (
	<section class={style.sidenav}>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</section>
);

export default Sidenav;
