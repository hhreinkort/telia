import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
    header1: {
        textColor: theme.colors.black,
        fontSize: theme.typography.h1,
        position: "absolute",
        width: 220,
        height: 28,
        left: 83,
        top: 79


        
    }
});

type Header1Props = {
    title: string;
}

const Header1: React.FC<Header1Props> = ({ title }) => {
    const classes = useStyles();
    return (
        <header className={classes.header1}> {title} </header>
    );
};

export default Header1;
        

        