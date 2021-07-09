
const array = ['a', 'c', 'b', 'a', 'f', 'd', 'a', 'a', 'b', 'b'];





if ( document.URL.includes("main.html") ) {
  localStorage.clear()
const list = document.querySelectorAll('.testt1')

for (let i = 0; i < 6; i++){
    list[i].addEventListener('click', (Event) =>{
    const target = Event.target
    sum_1 = 0

    for(let i = 0; i < 6; i++){
        if(list[i].className == 'testt1'){
        sum_1 = sum_1+1
        }
    }

    if( sum_1 == 6){
        if (Event.target.className == 'testt1'){
            target.classList.remove('testt1')
            target.classList.add('active')
          }
        else{
            target.classList.remove('active')
            target.classList.add('testt1')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list[i].className != 'testt1'){
            list[i].classList.remove('active')
            list[i].classList.add('testt1')}}
        }
    target.classList.remove('testt1')
    target.classList.add('active') 

    const ans_1 = target.value
    localStorage.setItem('ans_1', ans_1)

  })
}

const list2 = document.querySelectorAll('.testt2')
for (let i = 0; i < 6; i++){
    list2[i].addEventListener('click', (Event) =>{
    const target2 = Event.target
    sum_22 = 0

    console.log(list2[0])
    for(let i = 0; i < 6; i++){
        if(list2[i].className == 'testt2'){
        sum_22 = sum_22+1
        }
    }

    if( sum_22 == 6){
        if (Event.target.className == 'testt2'){
            target2.classList.remove('testt2')
            target2.classList.add('active')
          }
        else{
            target2.classList.remove('active')
            target2.classList.add('testt2')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list2[i].className != 'testt2'){
            list2[i].classList.remove('active')
            list2[i].classList.add('testt2')}}
        }
    target2.classList.remove('testt2')
    target2.classList.add('active') 
    const ans_2 = target2.value
    localStorage.setItem('ans_2', ans_2)
    
    
  })
}



const list3 = document.querySelectorAll('.testt3')
for (let i = 0; i < 6; i++){
    list3[i].addEventListener('click', (Event) =>{
    const target3 = Event.target
    sum_33 = 0

    console.log(list3[0])
    for(let i = 0; i < 6; i++){
        if(list3[i].className == 'testt3'){
        sum_33 = sum_33+1
        }
    }

    if( sum_33 == 6){
        if (Event.target.className == 'testt3'){
            target3.classList.remove('testt3')
            target3.classList.add('active')
          }
        else{
            target3.classList.remove('active')
            target3.classList.add('testt3')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list3[i].className != 'testt3'){
            list3[i].classList.remove('active')
            list3[i].classList.add('testt3')}}
        }
    target3.classList.remove('testt3')
    target3.classList.add('active') 
    const ans_3 = target3.value
    localStorage.setItem('ans_3', ans_3)
  })
}




const list4 = document.querySelectorAll('.testt4')
for (let i = 0; i < 6; i++){
    list4[i].addEventListener('click', (Event) =>{
    const target4 = Event.target
    sum_44 = 0

    console.log(list4[0])
    for(let i = 0; i < 6; i++){
        if(list4[i].className == 'testt4'){
        sum_44 = sum_44+1
        }
    }

    if( sum_44 == 6){
        if (Event.target.className == 'testt4'){
            target4.classList.remove('testt4')
            target4.classList.add('active')
          }
        else{
            target4.classList.remove('active')
            target4.classList.add('testt4')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list4[i].className != 'testt4'){
            list4[i].classList.remove('active')
            list4[i].classList.add('testt4')}}
        }
    target4.classList.remove('testt4')
    target4.classList.add('active') 
    const ans_4 = target4.value
    localStorage.setItem('ans_4', ans_4)
    
  })
}




const list5 = document.querySelectorAll('.testt5')
for (let i = 0; i < 6; i++){
    list5[i].addEventListener('click', (Event) =>{
    const target5 = Event.target
    sum_55 = 0

    console.log(list5[0])
    for(let i = 0; i < 6; i++){
        if(list5[i].className == 'testt5'){
        sum_55 = sum_55+1
        }
    }

    if( sum_55 == 6){
        if (Event.target.className == 'testt5'){
            target5.classList.remove('testt5')
            target5.classList.add('active')
          }
        else{
            target5.classList.remove('active')
            target5.classList.add('testt5')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list5[i].className != 'testt5'){
            list5[i].classList.remove('active')
            list5[i].classList.add('testt5')}}
        }
    target5.classList.remove('testt5')
    target5.classList.add('active') 
    const ans_5 = target5.value
    localStorage.setItem('ans_5', ans_5)
  })
}




const list6 = document.querySelectorAll('.testt6')
for (let i = 0; i < 6; i++){
    list6[i].addEventListener('click', (Event) =>{
    const target6 = Event.target
    sum_66 = 0

    console.log(list6[0])
    for(let i = 0; i < 6; i++){
        if(list6[i].className == 'testt6'){
        sum_66 = sum_66+1
        }
    }

    if( sum_66 == 6){
        if (Event.target.className == 'testt6'){
            target6.classList.remove('testt6')
            target6.classList.add('active')
          }
        else{
            target6.classList.remove('active')
            target6.classList.add('testt6')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list6[i].className != 'testt6'){
            list6[i].classList.remove('active')
            list6[i].classList.add('testt6')}}
        }
    target6.classList.remove('testt6')
    target6.classList.add('active') 
    const ans_6 = target6.value
    localStorage.setItem('ans_6', ans_6)
  })
}





const list7 = document.querySelectorAll('.testt7')
for (let i = 0; i < 6; i++){
    list7[i].addEventListener('click', (Event) =>{
    const target7 = Event.target
    sum_77 = 0

    console.log(list7[0])
    for(let i = 0; i < 6; i++){
        if(list7[i].className == 'testt7'){
        sum_77 = sum_77+1
        }
    }

    if( sum_77 == 6){
        if (Event.target.className == 'testt7'){
            target7.classList.remove('testt7')
            target7.classList.add('active')
          }
        else{
            target7.classList.remove('active')
            target7.classList.add('testt7')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list7[i].className != 'testt7'){
            list7[i].classList.remove('active')
            list7[i].classList.add('testt7')}}
        }
    target7.classList.remove('testt7')
    target7.classList.add('active') 
    const ans_7 = target7.value
    localStorage.setItem('ans_7', ans_7)
  })
}





const list8 = document.querySelectorAll('.testt8')
for (let i = 0; i < 6; i++){
    list8[i].addEventListener('click', (Event) =>{
    const target8 = Event.target
    sum_88 = 0

    console.log(list8[0])
    for(let i = 0; i < 6; i++){
        if(list8[i].className == 'testt8'){
        sum_88 = sum_88+1
        }
    }

    if( sum_88 == 6){
        if (Event.target.className == 'testt8'){
            target8.classList.remove('testt8')
            target8.classList.add('active')
          }
        else{
            target8.classList.remove('active')
            target8.classList.add('testt8')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list8[i].className != 'testt8'){
            list8[i].classList.remove('active')
            list8[i].classList.add('testt8')}}
        }
    target8.classList.remove('testt8')
    target8.classList.add('active') 
    const ans_8 = target8.value
    localStorage.setItem('ans_8', ans_8)
  })
}





const list9 = document.querySelectorAll('.testt9')
for (let i = 0; i < 6; i++){
    list9[i].addEventListener('click', (Event) =>{
    const target9 = Event.target
    sum_99 = 0

    console.log(list9[0])
    for(let i = 0; i < 6; i++){
        if(list9[i].className == 'testt9'){
        sum_99 = sum_99+1
        }
    }

    if( sum_99 == 6){
        if (Event.target.className == 'testt9'){
            target9.classList.remove('testt9')
            target9.classList.add('active')
          }
        else{
            target9.classList.remove('active')
            target9.classList.add('testt9')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list9[i].className != 'testt9'){
            list9[i].classList.remove('active')
            list9[i].classList.add('testt9')}}
        }
    target9.classList.remove('testt9')
    target9.classList.add('active') 
    const ans_9 = target9.value
    localStorage.setItem('ans_9', ans_9)
  })
}



const list10 = document.querySelectorAll('.testt10')
for (let i = 0; i < 6; i++){
    list10[i].addEventListener('click', (Event) =>{
    const target10 = Event.target
    sum_10 = 0

    console.log(list10[0])
    for(let i = 0; i < 6; i++){
        if(list10[i].className == 'testt10'){
        sum_10 = sum_10+1
        }
    }

    if( sum_10 == 6){
        if (Event.target.className == 'testt10'){
            target10.classList.remove('testt10')
            target10.classList.add('active')
          }
        else{
            target10.classList.remove('active')
            target10.classList.add('testt10')
          }
    }
    else{
      
        for (let i = 0; i < 6; i++){
          if(list10[i].className != 'testt10'){
            list10[i].classList.remove('active')
            list10[i].classList.add('testt10')}}
        }
    target10.classList.remove('testt10')
    target10.classList.add('active') 
    const ans_10 = target10.value
    localStorage.setItem('ans_10', ans_10)
  })
}

}


function redirect(){
  var final_result = 0
  if( localStorage.getItem('ans_1') == array[0]){
     final_result = final_result + 1
   }
  if( localStorage.getItem('ans_2') == array[1]){
     final_result = final_result + 1
   }
   if( localStorage.getItem('ans_3') == array[2]){
     final_result = final_result + 1
   }
   if( localStorage.getItem('ans_4') == array[3]){
   final_result = final_result + 1
  }
  if( localStorage.getItem('ans_5') == array[4]){
    final_result = final_result + 1
  }
  if( localStorage.getItem('ans_6') == array[5]){
    final_result = final_result + 1
  }
  if( localStorage.getItem('ans_7') == array[6]){
    final_result = final_result + 1
  }
  if( localStorage.getItem('ans_8') == array[7]){
    final_result = final_result + 1
  }
  if( localStorage.getItem('ans_9') == array[8]){
    final_result = final_result + 1
  }
  if( localStorage.getItem('ans_10') == array[9]){
     final_result = final_result + 1
  }
  localStorage.setItem('final_result', final_result)
  if(localStorage.getItem('final_result') == 10){
    window.location.href = 'result_1.html';
  }else if(localStorage.getItem('final_result') < 5 ){
    window.location.href = 'result_3.html';
  }else{
    window.location.href = 'result_2.html';
  }
  
 
  

}

if (document.URL.includes('result_3.html')){

  document.getElementById("result").innerHTML = localStorage.getItem('final_result')
 }
if (document.URL.includes('result_1.html')){

 document.getElementById("result").innerHTML = localStorage.getItem('final_result')
}
if (document.URL.includes('result_2.html')){

  document.getElementById("result").innerHTML = localStorage.getItem('final_result')
 }
 








