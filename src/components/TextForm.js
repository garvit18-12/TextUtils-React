import React, { useState } from 'react'
import '../textform.css'

export default function TextForm(props) {
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    const [Text, SetText] = useState('');

    const HandleUpClick = () => {
        if (Text ===''){
            props.showalert('Cannot Do Anything on Empty Text', 'warning')
        }
        else{
        let newText = Text.toUpperCase();
        SetText(newText);
        props.showalert('Converted To Uppercase', 'success')
    }}

    const OnChangetion = (event) => {
        SetText(event.target.value);
}
    
    function HandleLoClick() {
        if (Text===''){
            props.showalert('Cannot Do Anything on Empty Text', 'warning')
        }
        else{
        let newText = Text.toLowerCase();
        SetText(newText);
        props.showalert('Converted To Lowercase', 'success')
}
    }
    function clearText(){
        SetText("")
        props.showalert('Text Cleared', 'success')

    }
    function clearclipText(){
        navigator.clipboard.write("")
        props.showalert('ClipBoard Text Cleared', 'success')

    }
    function HandleCaClick() {
        if (Text ===''){
            props.showalert('Cannot Do Anything on Empty Text', 'warning')
        }
        else{
        let FinalText = uppercaseWords(Text);
        SetText(FinalText);
        props.showalert('Capitalized', 'success')
}
    }
    function res(){
        if (Text ===''){
            props.showalert('Cannot Do Anything on Empty Text', 'warning')
        }
        else{
        let FinalText = Text;
        SetText(FinalText.replace(/\s+/g, ' ').trim())
        props.showalert('Extra Spaces Removed', 'success')
}
    }
    function clip() {
        if (Text === ''){
            props.showalert('Converted To Uppercase', 'success')
        }
        else{
        let FinalText = Text;
        navigator.clipboard.writeText(FinalText);
        props.showalert('Copied to Clipboard', 'success')
        }

    }

    return (
        <div id="sdiv" className={`text-${props.textcol} my-4`}>
            <h3 className={`my-4 text-${props.textcol}`}>Try TextUtils : Text Utility App</h3>
            <div className="mb-3 mx-4">
                <textarea className="form-control" value={Text} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} onChange={OnChangetion} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" onClick={HandleUpClick} className="btn btn-info mx-1 my-1">Convert To UpperCase</button>
            <button type="button" onClick={HandleLoClick} className="btn btn-info mx-1 my-1">Convert To LowerCase</button>
            <button type="button" onClick={HandleCaClick} className="btn btn-info mx-1 my-1">Capitalize</button>
            <button type="button" onClick={res} className="btn btn-info mx-1 my-1">Remove Extra Spaces</button>
            <button type="button" onClick={clip} className="btn btn-info mx-1 my-1">Copy To Clipboard</button>
            <button type="button" onClick={clearclipText} className="btn btn-info mx-1 my-1">Clear ClipBoard Text</button>
            <button type="button" onClick={clearText} className="btn btn-info mx-1 my-1">Clear Text</button>
            <h3 className={`mx-4 text-${props.textcol}`}>Summary</h3>
            <p className={`mx-4 text-${props.textcol}`}>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words, {Text.length} characters</p>
            <h6 className={`mx-4 text-${props.textcol}`}>Approx. Reading Time: {Text===''?0:0.008 * Text.split(' ').length} minutes</h6>
            <h3 className={`mx-4 text-${props.textcol}`}>Preview</h3>
            <p className={`mx-4 text-${props.textcol}`}>{Text===''?'Nothing To Preview':Text}</p>

        </div>
    )
    }

