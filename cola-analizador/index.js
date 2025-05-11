import antlr4 from 'antlr4';
import colaLexer from './generated/colaLexer.js';
import colaParser from './generated/colaParser.js';
import fs from 'fs';

// Leer el archivo input.txt
const input = fs.readFileSync('input.txt', 'utf8');

// === FASE LÉXICA ===
// Crear lexer y token stream
const chars = new antlr4.InputStream(input);
const lexer = new colaLexer(chars);

// Analizar directamente los tokens (y guardarlos)
const rawTokens = [];
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  rawTokens.push(token);
  token = lexer.nextToken();
}

// Mostrar tabla de lexemas y tokens
console.log("\n📋 Tabla de Lexemas y Tokens:");
rawTokens.forEach(tok => {
  const tokenName = colaLexer.symbolicNames[tok.type];
  console.log(`Línea ${tok.line}, Columna ${tok.column}: '${tok.text}' → ${tokenName}`);
});

// === FASE SINTÁCTICA ===
// Re-crear lexer y tokens para el parser (porque ya consumimos los primeros)
const lexer2 = new colaLexer(new antlr4.InputStream(input));
const tokens = new antlr4.CommonTokenStream(lexer2);
const parser = new colaParser(tokens);

// Capturar errores personalizados
class SyntaxErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

const errorListener = new SyntaxErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

parser.buildParseTrees = true;
const tree = parser.programa(); // 🌳 Obtener el árbol

// Verificar errores de sintaxis
if (errorListener.errors.length > 0) {
  console.log("\n❌ Errores de sintaxis encontrados:");
  errorListener.errors.forEach(err => {
    console.log(`  Línea ${err.line}, columna ${err.column}: ${err.msg}`);
  });
} else {
  console.log("\n✅ Sintaxis válida. No se encontraron errores.");
}

// Mostrar árbol sintáctico en texto
console.log("\n🌳 Árbol de Análisis Sintáctico (texto):");
console.log(tree.toStringTree(parser.ruleNames));
