import React from "react";
import { observer } from "mobx-react";

import ButtonControlViewModel from "./ButtonControl.vm";

import "./ButtonControl.css";

interface IProps {
	viewModel: ButtonControlViewModel;
	leftButtons?: { text: string; onClick: () => void }[];
	rightButtons?: { text: string; onClick: () => void }[];
}

const ButtonControl: React.FC<IProps> = ({
	viewModel,
	leftButtons = [],
	rightButtons = [],
}) => {
	return (
		<div className="button-control">
			{leftButtons.length !== 0 && (
				<div className="button-control__buttons">
					{leftButtons.map((button, index) => (
						<button
							key={index}
							onClick={button.onClick}
							className="button-control__button"
						>
							{button.text}
						</button>
					))}
				</div>
			)}
			<input
				type="text"
				value={viewModel.text}
				onChange={(e) => viewModel.setText(e.target.value)}
				className="button-control__input"
			/>
			{rightButtons.length !== 0 && (
				<div className="button-control__buttons">
					{rightButtons.map((button, index) => (
						<button
							key={index}
							onClick={button.onClick}
							className="button-control__button"
						>
							{button.text}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default observer(ButtonControl);
