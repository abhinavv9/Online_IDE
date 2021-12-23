import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { setLangJs, setLangPy } from '../../../Redux/code/code_action';
import Editor from '../editor';
import axios from 'axios';

const RenderEditor = () => {

    //Redux store calls
    const language = useSelector(state => state.language.language)
    const dispatch = useDispatch()
    const codeJs = useSelector(state => state.code.codeJs)
    const codePy = useSelector(state => state.code.codePy)


    //local states
    const [valueCodeJs, setValueCodeJs] = useState(codeJs)
    const [valueCodePy, setValueCodePy] = useState(codePy)
    const [output, setOutput] = useState('')
    // const [run, setRun] = useState(false)
    // const [srcDoc, setSrcDoc] = useState('')


    //Setting state of display code and dispatching actions
    useEffect(
        () => {
            switch (language) {
                case 'JavaScript':
                    return (
                        dispatch(setLangJs(valueCodeJs))
                    )
                case 'Python':
                    return dispatch(setLangPy(valueCodePy))
                default: return null
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [valueCodeJs, valueCodePy, language])



    //language editor functions
    function Jshandler() {
        return (
            <div>
                <Editor
                    language="javascript"
                    displayName="JS"
                    value={valueCodeJs}
                    onChange={setValueCodeJs}
                />
            </div>
        )
    }


    function Pyhandler() {
        return (
            <div>
                <Editor
                    language="python"
                    displayName="Py"
                    value={valueCodePy}
                    onChange={setValueCodePy}
                />
            </div>
        )
    }
    //language editor functions end

    //Switching language editor
    function SwitchLang() {
        switch (language) {
            case 'JavaScript':
                return Jshandler()

            case 'Python':
                return Pyhandler()

            default: return Jshandler()
        }
    }


    //setting the iframe
    //  useEffect(() => {
    //     setSrcDoc(`
    //         <html>
    //           <script>${codeJs}</script>
    //           <body>${codePy}</body>
    //         </html>
    //       `)
    //     setRun(false)

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [run])

    // useEffect(() => {
    //get value from state and make an api call
    const submitCode = async () => {
        const payload = {
            language: "py",
            code: valueCodePy
        };
        try {
            const { data } = await axios.post('http://localhost:5000/run  ', payload)
            setOutput(String(data.output))
        } catch (err) {
            console.log(err.respose)
        }
        // setRun(false);
    }
    // submitCode();s
    // }, [run])

    return (
        <>
            <div className="editor">
                {SwitchLang()}
            </div>

            <span className="output-div">

                <Button className='run-btn' aria-controls="simple-menu" aria-haspopup="true" onClick={submitCode}>
                    RUN
                </Button>

                {/* <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                /> */}
                <div >
                    <p className='output'>{output}</p>
                </div>
            </span>
        </>
    )
}

export default RenderEditor
