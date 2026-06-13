import Logo from '../../assets/images/logo.svg';

import './styles.css';

const HomePage = () => {
	return (
		<div className="home-content">
			<div className="home-logo-card">
				<img src={Logo} alt="Stumble" />
			</div>
			<p className="home-tagline">Evolution through Revolution</p>
		</div>
	);
};

export default HomePage;
