import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import AppContextProvider from "./store/AppContext";
import { SingUp } from "./component/singup";
import { Login } from "./component/login";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContextProvider>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/detail/:endpoint/:id" component={Single} />
							<Route exact path="/signup" component={SingUp} />
							<Route exact path="/login" component={Login} />
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContextProvider>
		</div>
	);
};

export default Layout;
