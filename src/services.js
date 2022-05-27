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

export function fatorial(n){
    let result=n;
    let minicial=n-1;
    for (let i=minicial;i> 1; i--){
        result *= i;
    }
    return result;
}

export function sequenciaPar(limite)
{
    let numeros = [];
    let pos = 0;

    for (let i = 0; i <= limite; i++)
      if(i % 2 == 0 ) 
      {
          numeros[pos] = i
          pos++;
      }
      return numeros;
}