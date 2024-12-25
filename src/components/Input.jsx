export default function Input({label,textarea, ...props}){
    return <>
        <p>
            <label></label>
            {textarea?<textare {...props}></textare>: <input {...props}></input>}
        </p>
    </>
}