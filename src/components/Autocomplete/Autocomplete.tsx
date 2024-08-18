import React from "react";
import { observer } from "mobx-react";

import AutocompleteViewModel from "./Autocomplete.vm";

import "./Autocomplete.css";

interface IProps {
	viewModel: AutocompleteViewModel;
}

const Autocomplete: React.FC<IProps> = ({ viewModel }) => {
	return (
		<div className="autocomplete">
			<input
				type="text"
				value={viewModel.textInput}
				onChange={(e) => viewModel.setTextInput(e.target.value || "")}
				className="autocomplete__input"
			/>
			{viewModel.suggestions.length > 0 && (
				<ul className="autocomplete__suggestions">
					{viewModel.suggestions.map((suggestion, index) => (
						<li
							key={index}
							onClick={() =>
								viewModel.selectSuggestion(suggestion)
							}
							className="autocomplete__suggestion"
						>
							<img src={suggestion.flag} alt={suggestion.name} />
							<strong>{suggestion.name}</strong>&nbsp;-{" "}
							{suggestion.fullName}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default observer(Autocomplete);
