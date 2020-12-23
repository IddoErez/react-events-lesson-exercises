import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)
  }

  render() {
    let t = this.props.task
    return (
      <div>
        {!t.complete ? <span>{t.text}-<button className="complete" onClick={this.complete}>Complete</button></span> : null}
      </div>
    )
  }
}
export default Task;