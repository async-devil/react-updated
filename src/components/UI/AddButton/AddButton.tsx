import { AddButtonWrapper } from "./AddButton.styles";
import AddIcon from "@material-ui/icons/Add";

const AddButton = (props: { onClick: () => void }) => {
	return (
		<AddButtonWrapper onClick={props.onClick}>
			<AddIcon />
		</AddButtonWrapper>
	);
};

export default AddButton;
