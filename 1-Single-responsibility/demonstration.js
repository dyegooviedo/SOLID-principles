/*
-----------------------------------
S.O.L.I.D. Principles demonstration
-----------------------------------

S = Single Responsability Principle

Este princípio diz que funções, classes, componentes e entidades
devem ter uma única responsabilidade.

Veja os exemplos abaixo:
*/

// Caso 1: Verificar se o email é válido e registrar na newsletter
// ERRADO:
function verifyAndRegisterEmailNewsletter(email)
{
    if( !email.includes("@") )
        return "Por favor digite um e-mail válido.";
    else
        return "E-mail registrado.";
}

// CORRETO:
function registerEmailNewsletter(email)
{
    checkIsEmail(email);
    return "E-mail registrado.";
}

function checkIsEmail(string)
{
    const isEmail = string.includes("@");
    if(!isEmail){
        throw new Error("Por favor digite um e-mail válido.");
    } 
    return true;
}

// Caso 2: Verificar se os parâmetros são números e somá-los
// ERRADO:
const sum = (a, b) => {
    if(typeof(a) === "number" && typeof(b) === "number")
        return a + b;
    else
        return "Por favor, informe números para somá-los";
}

// CORRETO:
const sum = (a, b) => {
    checkIsNumber(a,b);
    return a + b;
}

const checkIsNumber = (a,b) => {
    const isNumber = typeof(a) === "number" && typeof(b) === "number";
    if(!isNumber){
        throw new Error("Por favor, informe números válidos para somá-los");
    }
    return true;
}