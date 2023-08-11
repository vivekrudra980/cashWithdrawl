// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="card">
          <div className="row-1">
            <div className="profile-pic">
              <p className="letter">s</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="row-2">
            <p className="dim-text">Your Balance</p>
            <div className="row-2-1">
              <p className="balance">{balance}</p>
              <p className="dim-text">In Rupees</p>
            </div>
          </div>
          <p className="row-3">Withdraw</p>
          <p className="row-4">CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="button-list">
              {denominationsList.map(each => (
                <DenominationItem
                  withdraw={this.withdraw}
                  denominationDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
