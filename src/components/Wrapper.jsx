import {Container} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {Header} from "./Header/Header";
import { Footer } from "./Footer/Footer";


export function Wrapper() {
    return (
        <>
            <Header/>
            <Container size='lg'>
                <Outlet/>
            </Container>
            <Footer />
        </>
    );
}