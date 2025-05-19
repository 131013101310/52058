import antlr4 from 'antlr4';
import colaLexer from './generated/colaLexer.js';
import colaParser from './generated/colaParser.js';
import colaVisitor from './generated/colaVisitor.js';
import fs from 'fs';


const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new colaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new colaParser(tokens);

parser.buildParseTrees = true;
const tree = parser.programa();


export default class ColaToJSVisitor extends colaVisitor {
  constructor() {
    super();
    this.output = '';
    this.varName = 'cola'; 
  }

  visitPrograma(ctx) {
    this.varName = ctx.ID().getText();
    this.output += `let ${this.varName};\n`;
    return this.visit(ctx.comandos());
  }

  visitComandos(ctx) {
    for (const op of ctx.operacion()) {
      this.visit(op);
    }
  }

  visitCrear(ctx) {
    const valores = this.visit(ctx.lista());
    this.output += `${this.varName} = [${valores.join(', ')}];\n`;
  }

  visitEncolar(ctx) {
    const valor = this.visit(ctx.valor());
    this.output += `${this.varName}[${this.varName}.length] = ${valor};\n`;
  }

  visitDesencolar(ctx) {
    this.output += `${this.varName}.shift();\n`;
  }

  visitVerPrimero(ctx) {
    this.output += `console.log(${this.varName}[0]);\n`;
  }

  visitLista(ctx) {
    return ctx.valor().map(v => this.visit(v));
  }

  visitValor(ctx) {
    if (ctx.numero()) return ctx.getText();
    if (ctx.texto()) return ctx.getText();
  }
}