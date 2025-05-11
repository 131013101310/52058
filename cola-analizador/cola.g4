grammar cola;

// Reglas del parser (sintaxis)
programa     : COLA ID LLLAVE comandos RLLAVE ;
comandos     : (operacion)* ;

operacion    : encolar
             | desencolar
             | verPrimero
             | crear ;

crear        : CREAR LPAREN lista RPAREN EXCL ;
encolar      : ENCOLAR LPAREN valor RPAREN EXCL ;
desencolar   : DESENCOLAR LPAREN RPAREN EXCL ;
verPrimero   : VERPRIMERO LPAREN RPAREN EXCL ;

lista : LBRACK (valor (COMA valor)*)? RBRACK ;
valor        : numero | texto ;
numero       : NUMERO ;
texto        : TEXTO ;

// Reglas del lexer (tokens)

COLA         : 'cola' ;
CREAR        : 'crear' ;
ENCOLAR      : 'encolar' ;
DESENCOLAR   : 'desencolar' ;
VERPRIMERO   : 'verPrimero' ;

LPAREN       : '(' ;
RPAREN       : ')' ;
LBRACK       : '[' ;
RBRACK       : ']' ;
LLLAVE       : '{' ;
RLLAVE       : '}' ;
EXCL         : '!' ;
COMA         : ',' ;

NUMERO       : DIGITO+ ;
TEXTO        : '"' (CARACTER | DIGITO | SIMBOLO | ESPACIO)* '"' ;

// Fragmentos
fragment DIGITO    : [0-9] ;
fragment LETRA     : [a-zA-Z] ;
fragment CARACTER  : LETRA ;
fragment SIMBOLO : '!' | '?' | ':' | ';' | '.' ;
fragment ESPACIO   : ' ' ;

ID          : LETRA (LETRA | DIGITO | '_')* ;

WS          : [ \t\r\n]+ -> skip ;
