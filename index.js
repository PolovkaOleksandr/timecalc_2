const inp11=document.querySelector(".inp11")
const inp12=document.querySelector(".inp12")
const inp13=document.querySelector(".inp13")
const inp14=document.querySelector(".inp14")
const inp15=document.querySelector(".inp15")
const inp16=document.querySelector(".inp16")
const inp17=document.querySelector(".inp17")
const inp18=document.querySelector(".inp18")
const inp19=document.querySelector(".inp19")
const inp110=document.querySelector(".inp110")
const inp111=document.querySelector(".inp111")
const inp112=document.querySelector(".inp112")
const inp113=document.querySelector(".inp113")
const inp114=document.querySelector(".inp114")
const inp115=document.querySelector(".inp115")

const inp21=document.querySelector(".inp21")
const inp22=document.querySelector(".inp22")
const inp23=document.querySelector(".inp23")
const inp24=document.querySelector(".inp24")
const inp25=document.querySelector(".inp25")
const inp26=document.querySelector(".inp26")
const inp27=document.querySelector(".inp27")
const inp28=document.querySelector(".inp28")
const inp29=document.querySelector(".inp29")
const inp210=document.querySelector(".inp210")
const inp211=document.querySelector(".inp211")
const inp212=document.querySelector(".inp212")
const inp213=document.querySelector(".inp213")
const inp214=document.querySelector(".inp214")
const inp215=document.querySelector(".inp215")





const btn=document.querySelector(".btn")
btn.addEventListener("click", main)

const p=document.querySelector(".final")

let years=0
let months=0
let days=0

yearsm=[years1, years2, years3, years4, years5, years6, years7, years8, years9, years10, years11, years12, years13, years14, years15]
monthsm=[months1, months2, months3, months4, months5, months6, months7, months8, months9, months10, months11, months12, months13, months14, months15]
daysm=[days1, days2, days3, days4, days5, days6, days7, days8, days9, days10, days11, days12, days13, days14, days15,]

const inputs1=[inp11, inp12, inp13, inp14, inp15, inp16, inp17, inp18, inp19, inp110, inp111, inp112, inp113, inp114, inp115]
const inputs2=[inp21, inp22, inp23, inp24, inp25, inp26, inp27, inp28, inp29, inp210, inp211, inp212, inp213, inp214, inp215]

function main() {
    for (let i = 0; i < inputs1.length; i++) {
    
    let inv1 = inputs1[i].value.split('.').map(Number);
    let inv2 = inputs2[i].value.split('.').map(Number);
    yearsm[i]=inv2[2]-inv1[2]
    monthsm[i]=inv2[1]-inv1[1]
    daysm[i]=inv2[0]-inv1[0]
    if (daysm[i]<0){
        monthsm[i]=monthsm[i]-1
        daysm[i]=30+daysm[i]
    }
    if (monthsm[i]<0){
        yearsm[i]=years-1
        monthsm[i]=12+monthsm[i]
    }
        
    }
    
    
    
    p.textContent=`${days} днів ${months} місяців ${years} років`
    console.log(inv1, inv2, years)
    console.log(inv2[3],inv1[3])
}