import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { Container, Header, Footer } from './layouts';

import {
	HomePage,
	NotFoundPage
} from './pages';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: (
				<>
					<Header />
					<Container>
						<Outlet />
					</Container>
					<Footer />
				</>
			),
			children: [
				{
					index: true,
					element: <HomePage />
				},
				{
					path: '*',
					element: <NotFoundPage />
				}
			]
		}
	]
);

const App = () => <RouterProvider router={router} />;

export default App;
