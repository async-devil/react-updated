import styled, { css } from "styled-components";

import Category from "../../../Transaction/Categories/Category";
import PaymentMethod from "../../../Transaction/Categories/PaymentMethod";

const FromOrToWrapper = styled.div<{ categoryOrPaymentMethod: Category | PaymentMethod }>`
	height: inherit;

	background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%234000000' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
	background-color: ${(props) => props.categoryOrPaymentMethod.color};

	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	place-content: center;
`;

const Description = styled.div`
	grid-column: span 2 / span 2;
	padding-left: 0.6rem;
`;
const DescriptionText = styled.p<{ propertyName?: boolean }>`
	color: white;
	font-size: 0.67rem;

	${(props) =>
		props.propertyName &&
		css`
			font-size: 1.2rem;
		`}
`;

const Icon = styled.div`
	background-color: white;
	border: 1px solid white;
	border-radius: 5px;

	justify-self: center;
	margin-right: 0.6rem;

	height: 2rem;
	width: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	bottom: 1.5rem;
`;

const FromOrTo = (props: {
	type: string;
	categoryOrPaymentMethod: Category | PaymentMethod;
	from: boolean;
}) => {
	return (
		<FromOrToWrapper
			className="from-or-to-components__component"
			categoryOrPaymentMethod={props.categoryOrPaymentMethod}
		>
			<Description className="from-or-to-components__component_description">
				<DescriptionText className="from-or-to-components__component_description_text">
					{props.from ? "From " : "To "}
					{(props.type === "Income" && props.from) || (props.type !== "Income" && !props.from)
						? "category"
						: "account"}
				</DescriptionText>
				<DescriptionText
					className="from-or-to-components__component_description_text"
					propertyName={true}
				>
					{props.categoryOrPaymentMethod.name}
				</DescriptionText>
			</Description>
			<Icon className="from-or-to-components__component_description_icon">
				<props.categoryOrPaymentMethod.ico style={{ color: props.categoryOrPaymentMethod.color }} />
			</Icon>
		</FromOrToWrapper>
	);
};

export default FromOrTo;
