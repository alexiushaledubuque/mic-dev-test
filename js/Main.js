import React from 'react'
import Header from './Header'
import Articles from './Articles'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container col-sm-12'>
        <nav className='navbar nav' role='navigation'>
          <div>
            <Header />
          </div>
        </nav>
        <div>
          <table className='table table-striped'>
            <tbody>
              <tr>
                <td>
                  <Articles />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

export default Main
