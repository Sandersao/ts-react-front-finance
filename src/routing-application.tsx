import { Route, Routes } from "react-router-dom";
import { SaidaGestaoApplication } from "./application/saida/saida-gestao-application";
import { SaidaCreateApplication } from "./application/saida/saida-create-application";

export function RoutingApplication() {
    return <Routes>
        <Route path="/saida/gestao" element={<SaidaGestaoApplication />} />
        <Route path="/saida/create" element={<SaidaCreateApplication/>} />
    </Routes>
}