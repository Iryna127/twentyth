import React from 'react';
import FormattedDate from '../components/date';

class ClockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    this.timerID = undefined;
  }
  componentDidMount(prevProps, prevState) {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('prevProps, prevState,', this.state);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.date);  
    return nextState.date.getSeconds() % 2 ? false : true;
  }
  render() {
    const { src } = this.props;
    return (
      <>
        <FormattedDate date={this.state.date} />
        <p>{this.props.nameofimg}</p>
        <img src={src} alt="oh" width="400" height="300" />
      </>
    );
  }
}
export default ClockComponent;
