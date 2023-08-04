
export const FormField = ({ type = 'text', name, placeholder = '' }) => {
    return (
    <div className="field mb-5">
        <label className="label">{ name }</label>

        <div className="control">
            <input
                className="input is-size-5"
                type={ type }
                placeholder={ placeholder }
            />
        </div>
    </div>
    )
}
