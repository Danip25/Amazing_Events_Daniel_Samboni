export function getTimeDate(date) {
    const currentDateParsed = new Date(date.replace("-", "/"))
    const currentDateNumber = currentDateParsed.getTime()
    return currentDateNumber
}
