import { trainResponse } from './index'

class Train {
  reservePossible = false // 예약 가능여부
  delay_time: string

  dep_date: string
  dep_code: string
  dep_time: string
  
  arr_date: string
  arr_code: string
  arr_time: string
  
  train_no: string
  run_date: string

  train_type: string
  train_group: string

  constructor(train: trainResponse) {
    const { 
      h_rsv_psb_flg,
      h_expct_dlay_hr,

      h_dpt_rs_stn_cd,
      h_dpt_dt,
      h_dpt_tm,

      h_arv_rs_stn_cd, 
      h_arv_dt,
      h_arv_tm,
      
      h_run_dt,
      
      h_trn_no, 
      h_trn_clsf_cd, 
      h_trn_gp_cd,
      
    } = train

    this.reservePossible = h_rsv_psb_flg === 'Y'
    this.delay_time = h_expct_dlay_hr
    
    this.dep_code = h_dpt_rs_stn_cd
    this.dep_date = h_dpt_dt
    this.dep_time = h_dpt_tm

    this.arr_code = h_arv_rs_stn_cd
    this.arr_date = h_arv_dt
    this.arr_time = h_arv_tm

    this.train_no = h_trn_no
    this.run_date = h_run_dt

    this.train_type = h_trn_clsf_cd
    this.train_group = h_trn_gp_cd
  }
}



export default Train