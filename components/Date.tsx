import { parseISO, format } from 'date-fns'

export type DateProps = {
    date: string | Date
}

function Date({ date }: DateProps) {
    const dateString = date.toString()
    const dateParsed = parseISO(dateString)
    return <time dateTime={dateString}>{format(dateParsed, 'LLLL d, yyyy')}</time>
}

export default Date
