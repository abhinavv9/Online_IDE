import React, { } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/python/python'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closebrackets'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import Button from '@material-ui/core/Button'
import './editor.css'

export default function Editor(props) {
    const {
        language,
        value,
        onChange
    } = props;

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    autocrrection: true,
                    theme: 'dracula',
                    lineNumbers: true,
                    autoCloseBrackets: true,
                }}
            />
            <Button />
        </div>
    )
}