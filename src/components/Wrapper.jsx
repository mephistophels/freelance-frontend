import {Container} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {Header} from "./Header/Header";


export function Wrapper() {
    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}