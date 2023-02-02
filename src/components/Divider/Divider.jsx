import './Divider.scss';

function Divider(props) {
    return <div className={`divider width-100 ${props.additionalClassName}`} />
}

export default Divider;