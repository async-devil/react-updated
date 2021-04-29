import AddIcon from "@material-ui/icons/Add";

import { AddButtonWrapper } from "./AddButton.styles";

const AddButton = (props: { onClick: () => void }) => {
	return (
		<AddButtonWrapper onClick={props.onClick}>
			<AddIcon />
		</AddButtonWrapper>
	);
};

export default AddButton;
