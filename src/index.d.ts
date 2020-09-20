export interface LoginPayload {

}


export interface trainResponse {
  h_rsv_psb_flg: string // 예약 가능 여부
  h_expct_dlay_hr: string // 지연시간

  h_dpt_dt: string // 출발 날짜 ex) 20200920
  h_dpt_tm: string // 출발 시간 ex) 140530 -> 14시 5분 30초
  h_dpt_rs_stn_cd: string // 출발역?

  h_arv_dt: string // 도착 날짜
  h_arv_tm: string // 도착 시간
  h_arv_rs_stn_cd: string // 도착역?
  

  h_trn_no: string
  h_run_dt: string
  h_trn_clsf_cd: string
  h_trn_gp_cd: string
}



// { h_trn_seq: '009',
// h_chg_trn_dv_cd: '1',
// h_chg_trn_dv_nm: '직통',
// h_chg_trn_seq: '1',
// h_dpt_rs_stn_cd: '0001',
// h_dpt_rs_stn_nm: '서울',
// h_arv_rs_stn_cd: '0020',
// h_arv_rs_stn_nm: '부산',
// h_trn_no: '1205',
// h_trn_no_qb: '1205',
// h_yms_apl_flg: 'N',
// h_trn_gp_cd: '102',
// h_trn_clsf_cd: '02',
// h_run_dt: '20200920',
// h_dpt_dt: '20200920',
// h_dpt_tm: '071000',
// h_dpt_tm_qb: '07:10',
// h_arv_dt: '20200920',
// h_arv_tm: '123600',
// h_arv_tm_qb: '12:36',
// h_expct_dlay_hr: '000000',
// h_rsv_wait_ps_cnt: '0112',
// h_dtour_flg: '',
// h_dtour_txt: '-',
// h_std_rest_seat_cnt: '',
// h_fst_rest_seat_cnt: '',
// h_car_tp_cd: '',
// h_car_tp_nm: '',
// h_trn_cps_cd1: 'M',
// h_trn_cps_nm1: '카페',
// h_trn_cps_cd2: 'X',
// h_trn_cps_nm2: '전동휠체어석',
// h_trn_cps_cd3: '',
// h_trn_cps_nm3: '',
// h_trn_cps_cd4: '',
// h_trn_cps_nm4: '',
// h_trn_cps_cd5: '',
// h_trn_cps_nm5: '',
// h_train_disc_rt: '',
// h_wait_rsv_flg: '-1',
// h_rd_cnd_disc_no: '',
// h_rd_cnd_disc_nm: '',
// h_spe_rsv_cd: '00',
// h_spe_rsv_cd2: null,
// h_spe_rsv_nm: '-',
// h_spe_disc_rt: '0',
// h_spe_seat_map_flg: '',
// h_gen_rsv_cd: '11',
// h_gen_rsv_cd2: '39',
// h_gen_rsv_nm: '좌석많음',
// h_gen_disc_rt: '0',
// h_gen_seat_map_flg: 'Y',
// h_stnd_rsv_cd: '00',
// h_stnd_rsv_nm: '-',
// h_free_rsv_cd: '00',
// h_free_rsv_nm: '-',
// h_free_sracar_cnt: '000',
// h_train_disc_gen_rt: '0000.00',
// h_run_tm: '0526',
// h_rd_add_info: '00',
// h_nonstop_msg: '',
// h_nonstop_msg_txt: '',
// h_rd_seat_map_flg: 'YY',
// h_dpt_stn_cons_ordr: '000001',
// h_arv_stn_cons_ordr: '000071',
// h_dpt_stn_run_ordr: '000001',
// h_arv_stn_run_ordr: '000023',
// h_seat_att_cd: '015',
// h_rcvd_amt: '00000000028600',
// h_rcvd_fare: '00000000004300',
// h_cnec_trfc_psb_flg: '',
// h_cnec_trfc_nd_hm: '',
// h_cnec_trfc_rcvd_prc: '00000000000000',
// h_rsv_psb_flg: 'Y',
// h_rsv_psb_nm: '28,600원',
// h_stn_sale_flg: 'N',
// h_stn_sale_txt: '자유석 또는 입석은\n역에서 구입할 수 있습니다.',
// h_info_txt:
//  '선택하신 열차는 다른 열차에 비해 정차역 수가 적어 가격이 최대 0.6% 높습니다.\n\n계속 진행하시겠습니까?',
// h_trn_clsf_nm: '무궁화호',
// h_trn_gp_nm: '무궁화' 
// }