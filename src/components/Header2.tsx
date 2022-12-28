import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
    header2: {
        textColor: theme.colors.black,
        fontSize: theme.typography.h1,
        position: "absolute",
        width: 186,
        height: 28,
        left: 83,
        top: 299


        
    }
});

type Header2Props = {
    title: string;
}

const Header2: React.FC<Header2Props> = ({ title }) => {
    const classes = useStyles();
    return (
        <header className={classes.header2}> {title} </header>
    );
};

export default Header2;
        

        