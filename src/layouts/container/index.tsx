import './styles.css';

const Container = ( { children }: { children: React.ReactNode } ) => {
	return (
		<div id="page-container">
			{children}
		</div>
	);
};

export default Container;
