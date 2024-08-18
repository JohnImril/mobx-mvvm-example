import { makeAutoObservable } from "mobx";

class ButtonControlViewModel {
	text: string = "";

	constructor() {
		makeAutoObservable(this);
	}

	setText(newText: string) {
		this.text = newText;
	}

	clearText() {
		this.text = "";
	}

	showAlert() {
		alert(this.text);
	}

	validateAndAlert() {
		const num = Number(this.text);
		if (!isNaN(num)) {
			alert(`Number entered: ${num}`);
		} else {
			alert("Please enter a valid number.");
		}
	}
}

export default ButtonControlViewModel;
