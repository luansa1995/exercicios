
    let firstName = "luan";
    let lastName = "Sá";

    let text = `Oi, meu nome é: <b>${firstName} ${lastName}</b>, aqui tem 3 variaveis o text que é o Todo e dentro dele adicionei primeiro nome e último`;

    document.getElementById("teste").innerHTML = text;


    // O que voce precisa lembrar !!!

    // > o texto/String deve está Com:
    //     > Shift + Aspas simples  >>>>>       ` textoooooo `
    // >e para adicionar variaveis dentro dessa string, basta usar >>>   ${nomeDaVariavel}    