import { makeAutoObservable, runInAction } from "mobx";

import { getCountryByName, CountryInfo } from "../../api/apiService";

class AutocompleteViewModel {
	textInput: string = "";
	suggestions: CountryInfo[] = [];
	maxSuggestions: number = 10;

	constructor() {
		makeAutoObservable(this);
	}

	setTextInput(value: string) {
		this.textInput = value;
		this.fetchSuggestions();
	}

	setMaxSuggestions(max: number) {
		this.maxSuggestions = max;
	}

	async fetchSuggestions() {
		if (this.textInput.trim() === "") {
			this.suggestions = [];
			return;
		}

		const result = await getCountryByName(this.textInput);

		runInAction(() => {
			this.suggestions = result.slice(0, this.maxSuggestions);
		});
	}

	selectSuggestion(suggestion: CountryInfo) {
		this.textInput = suggestion.name;
		this.suggestions = [];
	}
}

export default AutocompleteViewModel;
