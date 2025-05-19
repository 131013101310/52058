import AnalizadorVisitor from "./generated/AnalizadorVisitor.js";

export class AnalizadorToJSVisitor extends AnalizadorVisitor {
  visitPrograma(ctx) {
    return ctx.instruccion().map(instr => this.visit(instr)).join('\n');
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.seleccion());
  }

  visitSeleccion(ctx) {
    const expr = this.visit(ctx.expresion());
    const casos = ctx.caso().map(c => this.visit(c)).join('\n');
    const defecto = ctx.caso_defecto() ? this.visit(ctx.caso_defecto()) : '';

    return `switch (${expr}) {\n${casos}${defecto}\n}`;
  }

  visitCaso(ctx) {
    const valor = this.visit(ctx.constante());
    const sentencias = ctx.sentencia().map(s => this.visit(s)).join('\n');
    return `  case ${valor}:\n${this.indent(sentencias)}\n    break;`;
  }

  visitCaso_defecto(ctx) {
    const sentencias = ctx.sentencia().map(s => this.visit(s)).join('\n');
    return `  default:\n${this.indent(sentencias)}\n    break;`;
  }

  visitSentencia(ctx) {
    if (ctx.salida().length > 0) {
      return ctx.salida().map(s => this.visit(s)).join('\n');
    } else if (ctx.terminar()) {
      return this.visit(ctx.terminar());
    }
    return '';
  }

  visitSalida(ctx) {
    const texto = ctx.cadena().getText(); // ya incluye las comillas
    return `    console.log(${texto});`;
  }

  visitTerminar(ctx) {
    return `    break;`;
  }

  visitExpresion(ctx) {
    return this.visit(ctx.constante());
  }

  visitConstante(ctx) {
    return ctx.cadena() ? ctx.cadena().getText() : ctx.numero().getText();
  }

  indent(code) {
    return code.split('\n').map(line => '    ' + line).join('\n');
  }
}