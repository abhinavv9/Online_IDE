import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from '../../Redux/languages/lang_action';
import './langButton.css'
import {setLangJs, setLangPy } from '../../Redux/code/code_action';
// import store from '../../Redux/Store';


const LangButton = (props) => {

    const language = useSelector(state => state.language.language)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(null);
    }

    return (
        <div>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" className="lang-div" onClick={handleClick}>
                    {language}
                    <i className="fa fa-chevron-circle-down"></i>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={open}
                    keepMounted
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => {
                        handleClose(); dispatch(setLang('Python')); dispatch(setLangPy());
                    }}>Python</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose(); dispatch(setLang('JavaScript')); dispatch(setLangJs());
                    }}>JavaScript</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default LangButton
