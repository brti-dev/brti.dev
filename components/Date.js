import { parseISO, format } from 'date-fns'
import propTypes from 'prop-types'

function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
Date.propTypes = {
    dateString: propTypes.string.isRequired,
}

export default Date
