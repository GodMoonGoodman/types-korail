import Train from './train'

class Ticket extends Train {
  car_no: string // 열차 번호
  seat_no_count: string // 좌석 수, ex) 001
  seat_no: string // 좌석 번호
  buyer_name: string // 구매자 이름
  sale_date: string // 구매 날짜
}