import React, { useState } from "react";
import { useHistory } from "react-router";

export const SingUp = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const signUpUser = async () => {
		let data = {
			email: email,
			password: password,
			user_name: userName
		};

		const response = await fetch("http://127.0.0.1:3010/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		if (response.ok) {
			alert("User Created!");
			history.push("/login");
		} else {
			alert(response.statusText);
		}
	};

	return (
		<div className="container">
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputUser1" className="form-label">
						User
					</label>
					<input
						type="text"
						onChange={event => {
							setUserName(event.target.value);
						}}
						value={userName}
						className="form-control"
						id="exampleInputUser1"
						aria-describedby="userName"
					/>
					<div id="userName" className="form-text">
						Please write your nickname
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={event => {
							setEmail(event.target.value);
						}}
						value={email}
						type="email"
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
						onChange={event => {
							setPassword(event.target.value);
						}}
						value={password}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>

				<button type="button" onClick={signUpUser} className="btn btn-primary">
					Register
				</button>
			</form>
		</div>
	);
};
