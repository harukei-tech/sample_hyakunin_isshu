import Source from './../../static/hyakunin_org.json'

const cardAttributes = Source
.map(d => {
    const fullBodyKana = d.bodyKana.split(/\s/)
    const cardBody = fullBodyKana[3] + fullBodyKana[4]
    const secondLineLength = (cardBody.length === 16) ? 6 : 5
    const line1Body = cardBody.slice(0, 5)
    const line2Body = cardBody.slice(5, 5 + secondLineLength)
    const line3Body = cardBody.slice(5 + secondLineLength)

    return {
        'id': d.n,
        'body1': fullBodyKana[0],
        'body2': fullBodyKana[1],
        'body3': fullBodyKana[2],
        'body4': fullBodyKana[3],
        'body5': fullBodyKana[4],
        'line1Body': line1Body,
        'line2Body': line2Body,
        'line3Body': line3Body,
    }
})

console.log(cardAttributes)