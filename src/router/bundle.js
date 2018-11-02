import React from 'react';

class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
}


class BundleHelper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Bundle load={() => import(this.props.address)}>
            {(TT) => <TT {...this.props}></TT>}
        </Bundle>
    }
}

export { BundleHelper, Bundle }