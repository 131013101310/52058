// Generated from c:/Users/pedro/Documents/52058/cola-analizador/cola.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link colaParser}.
 */
public interface colaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link colaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(colaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(colaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#comandos}.
	 * @param ctx the parse tree
	 */
	void enterComandos(colaParser.ComandosContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#comandos}.
	 * @param ctx the parse tree
	 */
	void exitComandos(colaParser.ComandosContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#operacion}.
	 * @param ctx the parse tree
	 */
	void enterOperacion(colaParser.OperacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#operacion}.
	 * @param ctx the parse tree
	 */
	void exitOperacion(colaParser.OperacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#crear}.
	 * @param ctx the parse tree
	 */
	void enterCrear(colaParser.CrearContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#crear}.
	 * @param ctx the parse tree
	 */
	void exitCrear(colaParser.CrearContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#encolar}.
	 * @param ctx the parse tree
	 */
	void enterEncolar(colaParser.EncolarContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#encolar}.
	 * @param ctx the parse tree
	 */
	void exitEncolar(colaParser.EncolarContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#desencolar}.
	 * @param ctx the parse tree
	 */
	void enterDesencolar(colaParser.DesencolarContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#desencolar}.
	 * @param ctx the parse tree
	 */
	void exitDesencolar(colaParser.DesencolarContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#verPrimero}.
	 * @param ctx the parse tree
	 */
	void enterVerPrimero(colaParser.VerPrimeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#verPrimero}.
	 * @param ctx the parse tree
	 */
	void exitVerPrimero(colaParser.VerPrimeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(colaParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(colaParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(colaParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(colaParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(colaParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(colaParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link colaParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(colaParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link colaParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(colaParser.TextoContext ctx);
}