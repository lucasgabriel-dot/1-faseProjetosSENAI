function viagem(){
    let distViagem = Number(prompt("Qual foi a distância da sua viagem?"))
    let tempoDVigem = distViagem / 300000

    if(tempoDVigem <= 60 && tempoDVigem >= 0 ){
        alert(" Sua viagem durou" + tempoDVigem +"segundo(s)")
    }else if (tempoDVigem > 60 && tempoDVigem <= 3600){
        tempoDVigem = tempoDVigem / 60
        alert("Sua viagem durou" + tempoDVigem +" Hora(s)")
    }else if(tempoDVigem > 864000 && tempoDVigem <= 604800){
        tempoDVigem = tempoDVigem / 86400
        alert("Sua viagem durou "+ tempoDVigem +"Dia(a)")
    }else if(tempoDVigem > 6048000 && tempoDVigem <= 18144000){
        tempoDVigem = tempoDVigem / 604800
        alert("Sua viagem durou "+ tempoDVigem +"Mês(es)")
    }else(tempoDVigem <= 217728000){
        tempoDVigem = tempoDVigem / 217728000
        alert("Sua viagem durou"+ tempoDVigem +"anos")
        }
    }
