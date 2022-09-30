import React from 'react';
import CardAttribute from '../../static/cardAttribute'

type Props = {
    cardAttribute: CardAttribute,
    onClick: () => void
}

class Card extends React.Component<Props>{
    render() {
        // let classes = "card w-1/3 "
        let classes = "card rounded border bg-lime-500 p-3 w-1/3 "
        classes += this.props.cardAttribute.isRemoved() ? " removed" : ""
        return (
            <div key={this.props.cardAttribute.getId()} className={classes} onClick={() => this.props.onClick()}>
                <div>
                    {this.props.cardAttribute.getLine1Body()}
                </div>
                <div>
                    {this.props.cardAttribute.getLine2Body()}
                </div>
                <div>
                    {this.props.cardAttribute.getLine3Body()}
                </div>
            </div>
        )
    }
}

export default Card