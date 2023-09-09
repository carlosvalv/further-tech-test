import {ReactNode, useEffect, useState} from "react";
import {RefundService} from "../services/refundService";
import MainContext from "../context/main";

type Props = {
  children: ReactNode;
};

export default function MainProvider(props: Props) {
    const { children } = props;
    const [mainController, setMainController] = useState<RefundService | null>(null);
    useEffect(function () {
        setMainController(new RefundService());
    }, []);
    return (
        <MainContext.Provider value={mainController}>
            {mainController !== null ?
                children: null
            }
        </MainContext.Provider>
    );
}