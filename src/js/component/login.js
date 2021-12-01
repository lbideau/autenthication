import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../store/AppContext";

export const Login = () => {
	const { store, actions } = useContext(AppContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const loginUser = async () => {
		let data = {
			email: email,
			password: password
		};

		const response = await fetch("http://127.0.0.1:3010/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		const body = await response.json();
		if (response.ok) {
			actions.setToken(body.token);
			history.push("/");
		}
	};
	return (
		<div className="container">
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						onChange={event => {
							setEmail(event.target.value);
						}}
						value={email}
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We&apos;ll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						onChange={event => {
							setPassword(event.target.value);
						}}
						value={password}
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="button" onClick={loginUser} className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};
