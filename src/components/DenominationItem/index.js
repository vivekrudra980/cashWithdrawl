// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdraw} = props
  const {value} = denominationDetails

  const cashWithdraw = () => {
    withdraw(value)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={cashWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
