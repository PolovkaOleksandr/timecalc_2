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

const p1=document.querySelector(".p1")
const p2=document.querySelector(".p2")
const p3=document.querySelector(".p3")
const p4=document.querySelector(".p4")
const p5=document.querySelector(".p5")
const p6=document.querySelector(".p6")
const p7=document.querySelector(".p7")
const p8=document.querySelector(".p8")
const p9=document.querySelector(".p9")
const p10=document.querySelector(".p10")
const p11=document.querySelector(".p11")
const p12=document.querySelector(".p12")
const p13=document.querySelector(".p13")
const p14=document.querySelector(".p14")
const p15=document.querySelector(".p15")

const suma=document.querySelector(".suma")

const pm=[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15,]



const btn=document.querySelector(".btn")
btn.addEventListener("click", main)

const p=document.querySelector(".final")

let years=0
let months=0
let days=0

let years1=0
let years2=0
let years3=0
let years4=0
let years5=0
let years6=0
let years7=0
let years8=0
let years9=0
let years10=0
let years11=0
let years12=0
let years13=0
let years14=0
let years15=0

let months1=0
let months2=0
let months3=0
let months4=0
let months5=0
let months6=0
let months7=0
let months8=0
let months9=0
let months10=0
let months11=0
let months12=0
let months13=0
let months14=0
let months15=0

let days1=0
let days2=0
let days3=0
let days4=0
let days5=0
let days6=0
let days7=0
let days8=0
let days9=0
let days10=0
let days11=0
let days12=0
let days13=0
let days14=0
let days15=0


yearsm=[years1, years2, years3, years4, years5, years6, years7, years8, years9, years10, years11, years12, years13, years14, years15]
monthsm=[months1, months2, months3, months4, months5, months6, months7, months8, months9, months10, months11, months12, months13, months14, months15]
daysm=[days1, days2, days3, days4, days5, days6, days7, days8, days9, days10, days11, days12, days13, days14, days15,]



function main() {
    const inputs1=[inp11, inp12, inp13, inp14, inp15, inp16, inp17, inp18, inp19, inp110, inp111, inp112, inp113, inp114, inp115]
    const inputs2=[inp21, inp22, inp23, inp24, inp25, inp26, inp27, inp28, inp29, inp210, inp211, inp212, inp213, inp214, inp215]
    for (let i = 0; i < inputs1.length; i++) {
        if (inputs1[i].value === "" || inputs2[i].value === "") {
            daysm[i]=0
            monthsm[i]=0
            yearsm[i]=0
            pm[i].textContent=`${daysm[i]} дн ${monthsm[i]} міс ${yearsm[i]} р`
            continue
        }
        else{
    let inv1 = inputs1[i].value.split('.').map(Number);
    let inv2 = inputs2[i].value.split('.').map(Number);
    
    
    daysm[i]=inv2[0]-inv1[0]
    if (daysm[i]<0){
        monthsm[i]=monthsm[i]-1
        daysm[i]=30+daysm[i]
    }
    monthsm[i]=inv2[1]-inv1[1]
    if (monthsm[i]<0){
        yearsm[i]=years[i]-1
        monthsm[i]=12+monthsm[i]
    }
    yearsm[i]=inv2[2]-inv1[2]
    // if (yearsm[i]===NaN){
    //     yearsm[i]=0
    // }
    // if (monthsm[i]===NaN){
    //     monthsm[i]=0
    // }
    // if (daysm[i]===NaN){
    //     daysm[i]=0
    // }
     
    
    

 
        pm[i].textContent=`${daysm[i]} дн ${monthsm[i]} міс ${yearsm[i]} р`
        }
    }
    
    for (let b = 0; b < inputs1.length; b++) {
        days=days+daysm[b]
        if (days>29) {
            days=days-30
            months=months+1
        }
        months=months+monthsm[b]
        if (months>11) {
            years=years+1
            months=0
        }
        years=years+yearsm[b]
        
        suma.textContent=`${days} дн ${months} міс ${years} р`
        
    }
    
    
    // console.log(inv1, inv2, years)
    // console.log(inv2[3],inv1[3])
    console.log(inp19.value)
    years=0
        months=0
        days=0
}