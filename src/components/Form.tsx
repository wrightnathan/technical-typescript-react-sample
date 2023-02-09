import React, {useState} from "react";
import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
    },
    container : {
        backgroundColor : "#ffffff",
        position : "absolute",
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        padding : 30,
        textAlign : "center"
    },
    title : {
        margin:"0px 0 20px 0"
    },
    button : {
        margin:"20px 0"
    }
}))

type Values = {
    name : string,
    email : string,
    rating : string,
}

const ratings = [
    {value : "1",label :"1"},
    {value : "2",label :"2"},
    {value : "3",label :"3"},
    {value : "4",label :"4"},
    {value : "5",label :"5"},
]

const Form = () => {

    const classes = useStyles();
    const [values,setValues] = useState<Values>({
        name : "",
        email : "",
        rating : "",
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)
    }

    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <CustomTextField changeHandler={handleChange} label={"Name"} name={"name"}/>
                <CustomTextField changeHandler={handleChange} label={"Email"} name={"email"}/>
                <CustomDropDown label={"Rating"} name={"rating"} changeHandler={handleChange} values={ratings} currentValue={values.rating}/>
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;