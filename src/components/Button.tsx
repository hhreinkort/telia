import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
    primaryButton: {
        backgroundColor: theme.colors.corePurple,
        cursor: "pointer",
        textColor: theme.colors.white,
        fontSize: theme.typography.button,
        padding: [ 0, 24, 0, 30],
        display: "flex",
        position: "absolute",
        width: 223,
        height: 48,
        left: 81,
        top: 138
    },
    transition: "background .2s ease-in-out",
    "&:hover": {
        backgroundColor: theme.colors.hoverPurple
    },

    });

    type PrimaryButtonProps = {
        title: string;
        onClick?: () => void;
    };

    const Button: React.FC<PrimaryButtonProps> = ({ title, onClick }) => {
        const classes = useStyles();
        return (
            <button className={classes.primaryButton} onClick={onClick}> {title} </button>
        );

    };

    export default Button;