import React from "react";

import {RefundService} from "../services/refundService";

const MainContext = React.createContext<RefundService | null>(null);
export default MainContext;