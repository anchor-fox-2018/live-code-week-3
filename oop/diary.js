class Diary{
    constructor(namaBulan,jumlahHari,catatanHarian){
        this._namaBulan = namaBulan;
        this._jumlahHari = jumlahHari;
        this._catatanHarian = catatanHarian;
    }
}
class DiaryFactory{
    
    static create(bulan){
        let isiBulan = [[30,'januari'],[28,'februari'],[30,'september']]
       for(let i = 0;i < isiBulan.length;i++){
           if(bulan === isiBulan[i][1]){
               let harian = [];
               for(let j = 1;j <= isiBulan[i][0];j++){
                   let obj = {
                       tanggal : j,
                       note : []
                   }
                   harian.push(obj)
               }
               let diary = new Diary(bulan,isiBulan[i][0],harian);
               //console.log(diary)
               return diary
           }
       }
       
    }
    static write(bulan,tanggal,cttnHarian){
        let wrBulnan = this.create(bulan);
        let ctt = wrBulnan._catatanHarian;
        for(let i = 0;i < ctt.length;i++){
            if(ctt[i].tanggal === tanggal){
                ctt[i].note += cttnHarian
            }else{
                ctt[i].note = 'no data'
            }
        }
        //console.log(wrBulnan)
        return wrBulnan
    }
    static report(){
        //console.log(septemberDiary._catatanHarian)
        for(let i = 0;i < septemberDiary._catatanHarian.length;i++){
            //if(septemberDiary._catatanHarian[i].note)
            console.log(`Day ${septemberDiary._catatanHarian[i].tanggal} => ${septemberDiary._catatanHarian[i].note}`)
        }
    }

}
let septemberDiary = DiaryFactory.write('september',2,'belajar sodoku');
//console.log(septemberDiary)


DiaryFactory.report()

