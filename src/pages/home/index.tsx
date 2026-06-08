import Logo from '../../assets/images/logo.svg';

import './styles.css';

const HomePage = () => {
	return (
		<div className="home-logo-card">
			<img src={Logo} alt="Stumble" />
		</div>
	);
};

export default HomePage;
