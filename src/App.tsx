import React from "react";

import ButtonControl from "./components/ButtonControl/ButtonControl";
import ButtonControlViewModel from "./components/ButtonControl/ButtonControl.vm";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import AutocompleteViewModel from "./components/Autocomplete/Autocomplete.vm";

import "./App.css";

const App: React.FC = () => {
	const buttonControlVM1 = new ButtonControlViewModel();
	const buttonControlVM2 = new ButtonControlViewModel();

	const autocompleteVM1 = new AutocompleteViewModel();
	autocompleteVM1.setMaxSuggestions(3);

	const autocompleteVM2 = new AutocompleteViewModel();
	autocompleteVM2.setMaxSuggestions(10);

	return (
		<div className="app">
			<div className="app__section">
				<h1 className="app__title">Button Controls</h1>
				<ButtonControl
					viewModel={buttonControlVM1}
					rightButtons={[
						{
							text: "Clear",
							onClick: () => buttonControlVM1.clearText(),
						},
						{
							text: "Set 'Hello world!'",
							onClick: () =>
								buttonControlVM1.setText("Hello world!"),
						},
					]}
				/>
				<ButtonControl
					viewModel={buttonControlVM2}
					leftButtons={[
						{
							text: "Validate & Alert",
							onClick: () => buttonControlVM2.validateAndAlert(),
						},
					]}
					rightButtons={[
						{
							text: "Alert Text",
							onClick: () => buttonControlVM2.showAlert(),
						},
					]}
				/>
			</div>

			<div className="app__section">
				<h1 className="app__title">Autocomplete Controls</h1>
				<Autocomplete viewModel={autocompleteVM1} />
				<Autocomplete viewModel={autocompleteVM2} />
			</div>
		</div>
	);
};

export default App;
