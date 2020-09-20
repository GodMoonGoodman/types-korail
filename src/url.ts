const SCHEME = "https"
const KORAIL_HOST = "smart.letskorail.com"
const KORAIL_PORT = "443"

export const DEFAULT_USER_AGENT = "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Nexus 4 Build/LMY48T)"

export const KORAIL_DOMAIN = `${SCHEME}://${KORAIL_HOST}:${KORAIL_PORT}`
export const KORAIL_MOBILE = `${KORAIL_DOMAIN}/classes/com.korail.mobile`
export const KORAIL_LOGIN = `${KORAIL_MOBILE}.login.Login`
export const KORAIL_SEARCH_SCHEDULE = `${KORAIL_MOBILE}.seatMovie.ScheduleView`
export const KORAIL_TICKETRESERVATION = `${KORAIL_MOBILE}.certification.TicketReservation`