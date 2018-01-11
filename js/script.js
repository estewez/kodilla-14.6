var counterNum = 0;

var Counter = React.createClass({

    getDefaultProps: function() {
        console.log('Setting default values of props');
    },

    getInitialState: function() {
        return {
            counter: 0,
            counterElem: 1 + counterNum
        };
    },

    componentWillMount: function() {
        console.log('Setting state before rendering. Can map from server.');
        counterNum++;
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h3', {}, 'Counter ' + this.state.counterElem),
                React.createElement('button', {type: 'button', onClick: this.increment}, 'Increment'),
                React.createElement('button', {type: 'button', onClick: this.decrement}, 'Decrement'),
                React.createElement('span', {}, 'Licznik ' + this.state.counter)
            )
        );
    },
 
    componentDidMount: function() {
        console.log('Setting state after mounting, updating server');
    },

    componentWillReceiveProps: function(nextProp) {
        console.log('Compering incoming prop to current prop and making decision based on that');
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Chcecking if all ', nextState,  ' and all ',  nextProps, ' are to be commited and rerendered');
        return true;
    },

    componentWillUpdate: function(nextProps, nextState){
        console.log('Any changes to make before render. Have access to new and current states/procs');
    },

    componentDidUpdate: function(nextProps, nextState){
        console.log('Any postrendering changes to DOM. Updating server.');
    },

    componentWillUnmount: function() {
        console.log('Any cleanup tasks before destroing component');
    }
});

var counter1 = React.createElement(Counter);
var counter2 = React.createElement(Counter);
var element = React.createElement('div', {}, counter1, counter2);
ReactDOM.render(element, document.getElementById('app'));