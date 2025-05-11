// Generated from c:/Users/pedro/Documents/52058/cola.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import colaListener from './colaListener.js';
import colaVisitor from './colaVisitor.js';

const serializedATN = [4,1,17,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,
0,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,3,2,39,8,2,1,3,1,3,1,3,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,5,7,67,8,7,10,7,12,7,70,9,7,3,7,72,8,7,1,7,1,7,1,8,1,
8,3,8,78,8,8,1,9,1,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,
0,79,0,22,1,0,0,0,2,31,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,46,1,0,0,0,10,
52,1,0,0,0,12,57,1,0,0,0,14,62,1,0,0,0,16,77,1,0,0,0,18,79,1,0,0,0,20,81,
1,0,0,0,22,23,5,1,0,0,23,24,5,16,0,0,24,25,5,10,0,0,25,26,3,2,1,0,26,27,
5,11,0,0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,
0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,39,3,8,4,0,35,39,3,10,
5,0,36,39,3,12,6,0,37,39,3,6,3,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,
0,38,37,1,0,0,0,39,5,1,0,0,0,40,41,5,2,0,0,41,42,5,6,0,0,42,43,3,14,7,0,
43,44,5,7,0,0,44,45,5,12,0,0,45,7,1,0,0,0,46,47,5,3,0,0,47,48,5,6,0,0,48,
49,3,16,8,0,49,50,5,7,0,0,50,51,5,12,0,0,51,9,1,0,0,0,52,53,5,4,0,0,53,54,
5,6,0,0,54,55,5,7,0,0,55,56,5,12,0,0,56,11,1,0,0,0,57,58,5,5,0,0,58,59,5,
6,0,0,59,60,5,7,0,0,60,61,5,12,0,0,61,13,1,0,0,0,62,71,5,8,0,0,63,68,3,16,
8,0,64,65,5,13,0,0,65,67,3,16,8,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,
0,0,68,69,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,71,63,1,0,0,0,71,72,1,0,0,
0,72,73,1,0,0,0,73,74,5,9,0,0,74,15,1,0,0,0,75,78,3,18,9,0,76,78,3,20,10,
0,77,75,1,0,0,0,77,76,1,0,0,0,78,17,1,0,0,0,79,80,5,14,0,0,80,19,1,0,0,0,
81,82,5,15,0,0,82,21,1,0,0,0,5,31,38,68,71,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class colaParser extends antlr4.Parser {

    static grammarFileName = "cola.g4";
    static literalNames = [ null, "'cola'", "'crear'", "'encolar'", "'desencolar'", 
                            "'verPrimero'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'", "'!'", "','" ];
    static symbolicNames = [ null, "COLA", "CREAR", "ENCOLAR", "DESENCOLAR", 
                             "VERPRIMERO", "LPAREN", "RPAREN", "LBRACK", 
                             "RBRACK", "LLLAVE", "RLLAVE", "EXCL", "COMA", 
                             "NUMERO", "TEXTO", "ID", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "encolar", 
                         "desencolar", "verPrimero", "lista", "valor", "numero", 
                         "texto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = colaParser.ruleNames;
        this.literalNames = colaParser.literalNames;
        this.symbolicNames = colaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, colaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(colaParser.COLA);
	        this.state = 23;
	        this.match(colaParser.ID);
	        this.state = 24;
	        this.match(colaParser.LLLAVE);
	        this.state = 25;
	        this.comandos();
	        this.state = 26;
	        this.match(colaParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, colaParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 28;
	            this.operacion();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, colaParser.RULE_operacion);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.encolar();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.desencolar();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.verPrimero();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, colaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(colaParser.CREAR);
	        this.state = 41;
	        this.match(colaParser.LPAREN);
	        this.state = 42;
	        this.lista();
	        this.state = 43;
	        this.match(colaParser.RPAREN);
	        this.state = 44;
	        this.match(colaParser.EXCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	encolar() {
	    let localctx = new EncolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, colaParser.RULE_encolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(colaParser.ENCOLAR);
	        this.state = 47;
	        this.match(colaParser.LPAREN);
	        this.state = 48;
	        this.valor();
	        this.state = 49;
	        this.match(colaParser.RPAREN);
	        this.state = 50;
	        this.match(colaParser.EXCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desencolar() {
	    let localctx = new DesencolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, colaParser.RULE_desencolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(colaParser.DESENCOLAR);
	        this.state = 53;
	        this.match(colaParser.LPAREN);
	        this.state = 54;
	        this.match(colaParser.RPAREN);
	        this.state = 55;
	        this.match(colaParser.EXCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verPrimero() {
	    let localctx = new VerPrimeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, colaParser.RULE_verPrimero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(colaParser.VERPRIMERO);
	        this.state = 58;
	        this.match(colaParser.LPAREN);
	        this.state = 59;
	        this.match(colaParser.RPAREN);
	        this.state = 60;
	        this.match(colaParser.EXCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, colaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(colaParser.LBRACK);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 63;
	            this.valor();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 64;
	                this.match(colaParser.COMA);
	                this.state = 65;
	                this.valor();
	                this.state = 70;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 73;
	        this.match(colaParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, colaParser.RULE_valor);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.numero();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.texto();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, colaParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(colaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, colaParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(colaParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

colaParser.EOF = antlr4.Token.EOF;
colaParser.COLA = 1;
colaParser.CREAR = 2;
colaParser.ENCOLAR = 3;
colaParser.DESENCOLAR = 4;
colaParser.VERPRIMERO = 5;
colaParser.LPAREN = 6;
colaParser.RPAREN = 7;
colaParser.LBRACK = 8;
colaParser.RBRACK = 9;
colaParser.LLLAVE = 10;
colaParser.RLLAVE = 11;
colaParser.EXCL = 12;
colaParser.COMA = 13;
colaParser.NUMERO = 14;
colaParser.TEXTO = 15;
colaParser.ID = 16;
colaParser.WS = 17;

colaParser.RULE_programa = 0;
colaParser.RULE_comandos = 1;
colaParser.RULE_operacion = 2;
colaParser.RULE_crear = 3;
colaParser.RULE_encolar = 4;
colaParser.RULE_desencolar = 5;
colaParser.RULE_verPrimero = 6;
colaParser.RULE_lista = 7;
colaParser.RULE_valor = 8;
colaParser.RULE_numero = 9;
colaParser.RULE_texto = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_programa;
    }

	COLA() {
	    return this.getToken(colaParser.COLA, 0);
	};

	ID() {
	    return this.getToken(colaParser.ID, 0);
	};

	LLLAVE() {
	    return this.getToken(colaParser.LLLAVE, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	RLLAVE() {
	    return this.getToken(colaParser.RLLAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_operacion;
    }

	encolar() {
	    return this.getTypedRuleContext(EncolarContext,0);
	};

	desencolar() {
	    return this.getTypedRuleContext(DesencolarContext,0);
	};

	verPrimero() {
	    return this.getTypedRuleContext(VerPrimeroContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(colaParser.CREAR, 0);
	};

	LPAREN() {
	    return this.getToken(colaParser.LPAREN, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	RPAREN() {
	    return this.getToken(colaParser.RPAREN, 0);
	};

	EXCL() {
	    return this.getToken(colaParser.EXCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EncolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_encolar;
    }

	ENCOLAR() {
	    return this.getToken(colaParser.ENCOLAR, 0);
	};

	LPAREN() {
	    return this.getToken(colaParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(colaParser.RPAREN, 0);
	};

	EXCL() {
	    return this.getToken(colaParser.EXCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterEncolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitEncolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitEncolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesencolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_desencolar;
    }

	DESENCOLAR() {
	    return this.getToken(colaParser.DESENCOLAR, 0);
	};

	LPAREN() {
	    return this.getToken(colaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(colaParser.RPAREN, 0);
	};

	EXCL() {
	    return this.getToken(colaParser.EXCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterDesencolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitDesencolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitDesencolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerPrimeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_verPrimero;
    }

	VERPRIMERO() {
	    return this.getToken(colaParser.VERPRIMERO, 0);
	};

	LPAREN() {
	    return this.getToken(colaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(colaParser.RPAREN, 0);
	};

	EXCL() {
	    return this.getToken(colaParser.EXCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterVerPrimero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitVerPrimero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitVerPrimero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_lista;
    }

	LBRACK() {
	    return this.getToken(colaParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(colaParser.RBRACK, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(colaParser.COMA);
	    } else {
	        return this.getToken(colaParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(colaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = colaParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(colaParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof colaListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof colaVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




colaParser.ProgramaContext = ProgramaContext; 
colaParser.ComandosContext = ComandosContext; 
colaParser.OperacionContext = OperacionContext; 
colaParser.CrearContext = CrearContext; 
colaParser.EncolarContext = EncolarContext; 
colaParser.DesencolarContext = DesencolarContext; 
colaParser.VerPrimeroContext = VerPrimeroContext; 
colaParser.ListaContext = ListaContext; 
colaParser.ValorContext = ValorContext; 
colaParser.NumeroContext = NumeroContext; 
colaParser.TextoContext = TextoContext; 
