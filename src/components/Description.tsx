import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
    description: {
        textColor: theme.colors.black,
        fontSize: theme.typography.body,
        position: "absolute",
        width: 519,
        height: 66,
        left: 83,
        top: 348
        
    }
});

type DescriptionProps = {
    title: any;
}

const Description: React.FC<DescriptionProps> = ({ title }) => {
    const classes = useStyles();
    return (
        <header className={classes.description}></header>
    );
};

export default Description;
        

        