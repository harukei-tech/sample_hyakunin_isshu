import React from 'react';
import CardAttribute from '../../static/cardAttribute'

type Props = {
    cardAttribute: CardAttribute,
    onClick: () => void
}

class Card extends React.Component<Props>{
    render() {
        let classes = "card w-1/3"
        classes += this.props.cardAttribute.isRemoved() ? " removed" : ""
        return (
            <div key={this.props.cardAttribute.getId()} className={classes} onClick={() => this.props.onClick()}>
                {this.props.cardAttribute.getLastedBody()}
            </div>
        )
    }
}

export default Card