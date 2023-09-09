import styled from "styled-components";
import { useContext, useState } from "react";
import { Refund } from "../types/refund";
import { Source } from "../enums/refund";
import MainContext from "../context/main";

const Container = styled.div`
    display:flex;
    gap: 1em;
    flex-direction: column;
    padding: 1em;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin: 0;
`;

const List = styled.div`
    display:flex;
    gap: 1em;
    flex-direction: column;
    padding: 0.5em;
`;

const Item = styled.div`
    display:flex;
    gap: 1em;
    flex-direction: column;
    padding: 0.5em; 
`;

const Content = styled.div`
    display:flex;
    gap: 1em;
    flex-direction: column;
    padding: 0.5em;
`;

const Name = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin: 0;
`;

const TextHours = styled.span`
    font-size: 14px;
    color: #000;
`;

const TextRefund = styled.span<{ approved: boolean }>`
    font-size: 14px;
    color: ${props => props.approved ? "#4BB543" : "#ff0000"};
    font-weight: 500;
`;

export default function ListRefunds() {
    const main = useContext(MainContext)!;
    const [refunds] = useState<Refund[]>(main.get());

    const getApprovalHoursLimit = (signUpDate: Date, source: Source) => {
        let newTerms = signUpDate >= main.getTermsOfServiceDate();

        if (source === Source.PHONE && !newTerms)
            return 4;

        if (source === Source.PHONE && newTerms)
            return 8;

        if (source === Source.WEB && !newTerms)
            return 8;

        if (source === Source.WEB && newTerms)
            return 16;

        //default value
        return 16;
    };

    return (
        <Container>
            <Title>REFUNDS</Title>
            <List>
                {refunds.map((x: Refund, i: number) => {
                    let hoursElapsed = x.getHoursElapsed();
                    let hoursLimit = getApprovalHoursLimit(x.getSignUpDateFormat(), x.requestSource);
                    let approved = hoursElapsed <= hoursLimit;
                    return <Item key={i}>
                        <Name>{x.name}</Name>
                        <Content>
                            <TextHours>Hours elapsed: {hoursElapsed}</TextHours>
                            <TextHours>Hours limit: {hoursLimit}</TextHours>
                            <TextRefund approved={approved}>Refund {approved ? "APPROVED" : "DENIED"}</TextRefund>
                        </Content>
                    </Item>
                })}
            </List>
        </Container>
    )
}
