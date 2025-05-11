# Analizador Sintáctico del Lenguaje "cola" (ANTLR + JavaScript)

Este proyecto implementa un **analizador léxico, sintáctico e intérprete** para el lenguaje "cola", definido en una gramática EBNF. Está desarrollado con **ANTLR4** y **JavaScript**, y permite analizar sintaxis, mostrar errores y traducir el código fuente a JavaScript.

---

## Instrucciones de uso

1. Clonar el repositorio o descargarlo.
2. Instalar dependencias:

   ``` npm install antlr4 ```

3. Analizar sintaxis (verifica errores y tokens):

   ``` node index.js ```

4. Traducir código fuente a JavaScript:

   ``` node customVisitor.js ```

> Los comandos esperan que `input.txt` contenga el código fuente en lenguaje "cola".

---

## Comandos válidos en el lenguaje "cola"

| Comando              | Descripción                       | Ejemplo                         |
|----------------------|-----------------------------------|----------------------------------|
| `crear(lista)!`      | Inicializa la cola                | `crear([1, 2, "hola"])!`        |
| `encolar(valor)!`    | Agrega al final                   | `encolar("nuevo")!`            |
| `verPrimero()!`      | Muestra el primer elemento        | `verPrimero()!`                |
| `desencolar()!`      | Quita el primer elemento          | `desencolar()!`                |