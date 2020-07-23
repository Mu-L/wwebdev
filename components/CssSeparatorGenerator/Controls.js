import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Slider from '@material-ui/core/Slider'
import Checkbox from '@material-ui/core/Checkbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FileCopy from '@material-ui/icons/FileCopy'
import GitHub from '@material-ui/icons/GitHub'

import * as S from './styled'
import { generateHtmlCode, generateCssCode } from './codeGenerators'

const Controls = props => {
    const { setOptions, options, active } = props
    const [value, setValue] = React.useState(0)
    const [isVisible, setVisible] = React.useState(true)
    const [copiedCode, showCopied] = useState('')

    const htmlCode = generateHtmlCode(active)
    const cssCode = generateCssCode({ active, options })

    let htmlTextArea = React.createRef()
    let cssTextArea = React.createRef()

    const copyToClipboard = (textArea, areaName) => {
        textArea.current.select()
        document.execCommand('copy')
        showCopied(areaName)

        setTimeout( () => {
            showCopied('')
        }, 2000);
    }

    const handleCheck = e => {
        setOptions({ ...options, [e.target.name]: e.target.checked });
    }

    const handleChange = (key, newVal) => {
        setOptions({ ...options, [key]: {
            ...options[key],
            value: newVal,
        } });
    }

    return (
        <S.Controls>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, newValue) => { setValue(newValue) }}
                aria-label="controls for customizing the separator"
            >
                <Tab label="Settings" />
                <Tab label="HTML" />
                <Tab label="CSS" />
                <S.GithubLink
                    href='https://github.com/wwebdev/separator-generator'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub />
                </S.GithubLink>
            </Tabs>
            <S.ControlContent isVisible={isVisible}>
                { value === 0 &&
                    <div>
                        { options.reversed !== undefined &&
                            <S.FormControlLabel
                                label="Reversed"
                                control={
                                    <Checkbox
                                        checked={options.reversed}
                                        onChange={handleCheck}
                                        name="reversed"
                                        color="primary"
                                    />
                                }
                            />
                        }
                        { Object.entries(options).map(([key, option]) =>
                            key !== 'reversed' && <S.SliderContainer key={`${key}-slider`}>
                                <label>{key}</label>
                                <Slider
                                    value={option.value}
                                    onChange={(e, newVal) => handleChange(key, newVal)}
                                    aria-labelledby={`${key}-slider`}
                                    min={option.min}
                                    max={option.max}
                                    step={option.step}
                                    valueLabelDisplay="auto"
                                />
                            </S.SliderContainer>
                        )}
                    </div>
                }
                { value === 1 &&
                    <div>
                        <S.CopyContainer onClick={() => copyToClipboard(htmlTextArea, 'html')} >
                            <FileCopy />
                            Copy
                        </S.CopyContainer>
                        <S.Copied visible={copiedCode === 'html'}>copied</S.Copied>
                        <S.CodeArea
                            value={htmlCode}
                            rowsMax={5}
                            marginBottom={true}
                            ref={htmlTextArea}
                        />
                    </div>
                }
                { value === 2 &&
                    <div>
                        <S.CopyContainer onClick={() => copyToClipboard(cssTextArea, 'css')} >
                            <FileCopy />
                            Copy
                        </S.CopyContainer>
                        <S.Copied visible={copiedCode === 'css'}>copied</S.Copied>
                        <S.CodeArea
                            value={cssCode}
                            rowsMax={5}
                            marginBottom={true}
                            ref={cssTextArea}
                        />
                    </div>
                }
            </S.ControlContent>
            <S.ControlToggle onClick={() => setVisible(!isVisible)}>
                { isVisible && <span><ExpandLess /> Hide</span>}
                { !isVisible && <span><ExpandMore /> Show</span> }
            </S.ControlToggle>
        </S.Controls>
    )
}

export default Controls
