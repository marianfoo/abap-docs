---
title: "COND - Conditional Operator"
description: |
  Syntax ... COND type( let_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) WHEN log_exp1(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) THEN  let_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm"
abapFile: "abenconditional_expression_cond.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abenconditional", "expression", "cond"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm) → 

COND - Conditional Operator

Syntax

... COND type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]*
               WHEN [log\_exp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* [result1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm)
             *\[* WHEN [log\_exp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* [result2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) *\]*
             ...
             *\[* ELSE *\[* [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* [resultn](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) *\]* ) ...

Effect

A [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_glosry.htm "Glossary Entry") with the conditional operator COND has a result, [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm), that is specified by logical expressions. Either a value with the data type specified by type is produced or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_type_glosry.htm "Glossary Entry").

-   If the data type required in an operand position is unique and fully identifiable, this type is used.

-   If the operand type is not fully identifiable, an operand with a statically identifiable type must be specified after the first THEN (except when passing the constructor parameter to an actual parameter with generically typed formal parameter). This type is then used. In particular, [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm)s cannot then be specified after THEN.

-   If the constructor expression is passed to an actual parameter with generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencond_constructor_inference.htm).

-   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") must be possible.

WHEN must be specified at least once with any [logical expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) in the parentheses. This can be followed by any number of WHENs with further logical expressions. An ELSE can be specified at the end. The expression evaluates the logical expressions one after the other and selects the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) specified (after THEN) in the first logical expression whose result is true. The selected [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) determines the result of the conditional expression. If none of the logical expressions are true, the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

To define local helper fields, an optional [LET expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) can be specified before the first WHEN, after every THEN, and after ELSE.

Notes

-   Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.

-   No suitable full type can be derived for formal parameters with the generic types c, n, and x.

Example

Transforms a time to 12 hour format using a conditional expression in an operand position. The type of the result is used by the operand after the first specified THEN. This makes the type string.

CLASS cx\_cant\_be DEFINITION INHERITING FROM cx\_no\_check.
ENDCLASS.
cl\_demo\_output=>display(
  COND #( LET t = '120000' IN
          WHEN sy-timlo < t THEN
            |{ sy-timlo TIME = ISO } AM|
          WHEN sy-timlo > t AND sy-timlo < '240000' THEN
            |{ CONV t( sy-timlo - 12 \* 3600 ) TIME = ISO } PM|
          WHEN sy-timlo = t THEN
            |High Noon|
          ELSE
            THROW cx\_cant\_be( ) ) ).