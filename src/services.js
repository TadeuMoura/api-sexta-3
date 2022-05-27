export function semaforo (cor){
    if (cor=='vermelho')
    return "Aguarde";

    else if (cor== 'verde')
    return "Vá em frente"

    else 
    throw new Error ('Inválida')
}

export function diaSemana (dia){
    if(dia==0)
    return "Domingo"

    else if (dia==1)
    return "Segunda"

    else if (dia==2)
    return "Terça"

    else if (dia==3)
    return "Quarta"

    else if (dia==4)
    return "Quinta"

    else if (dia==5)
    return "Sexta"

    else if (dia==6)
    return "Sábado"

    else
    throw new Error ('Digite um número de 0 à 6') 
}

export function sequenciaPar(limite){
    let limi = [];
    let pos = 0
    for(let cont= 0; cont < limite; cont++){
        if(cont % 2 == 0 && cont != 0){
            limi[pos] = cont 
            pos++
        }
    }
}