import { BoolAndString } from "../model/propstestModel"

const PropsTest: React.FC<BoolAndString> = (props) => {
    return (
        <>
            {props.isOpen ? <h3>is open true</h3> : <h3>is open false !</h3>}
            <div>{props.istest}</div>
        </>
    )
}
export default PropsTest