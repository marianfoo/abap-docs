  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm) → 

SWITCH, Conditional Operator

Syntax

... SWITCH type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm)*\]*
                 operand
                 WHEN const1 THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm)*\]* [result1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm)
               *\[* WHEN const2 THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm)*\]* [result2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) *\]*
               ...
               *\[* ELSE *\[* [let\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm)*\]* [resultn](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) *\]* ) ...

Effect

A [conditional expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_glosry.htm "Glossary Entry") with the conditional operator SWITCH has a result, [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm), that is dependent on a case distinction. Either a value with the data type specified by type is produced or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_type_glosry.htm "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, an operand with a type known statically must be specified after the first THEN, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) statement can be specified after THEN in this case.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencond_constructor_inference.htm).
    -   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [up cast](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenup_cast_glosry.htm "Glossary Entry") must be possible.

The position operand in the parentheses is the value that is checked in the case distinction. This is a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). It must be followed by at least one WHEN. Literals and [constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry") can be specified for const after WHEN. It must be possible to [compare](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules.htm) them with operand. [Substring access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm) is not possible. This can be followed by any number of WHEN statements with further constant values. An ELSE can be specified at the end. This expression compares the values of the operand operand with the specified constant values one after another and chooses the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) after THEN for which the values of operand and constant are identical for the first time. The selected [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) determines the result of the conditional expression. If no matches are found, the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

If a specification after THEN or ELSE can be selected, either the result is set or a class-based exception is raised, just as with a conditional expression [COND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_cond.htm).

To define local helper fields, an optional [LET expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm) can be specified in front of the operand operand, after every THEN, and after ELSE.

Hints

-   No [text symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_symbol_glosry.htm "Glossary Entry") for const can be specified after WHEN.
-   A conditional expression with SWITCH has the same meaning as the following conditional expression with [COND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_cond.htm):
    
    COND type( WHEN operand = const1 THEN result1
             *\[* WHEN operand = const2 THEN result2 *\]*
             ...
             *\[* ELSE resultn *\]* )
    
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types c, n, and x.

Example

Conditional operator SWITCH in an operand position in a loop. The loop is exited when the exception after ELSE is caught.

CLASS cx\_overflow DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
DATA(out) = cl\_demo\_output=>new( ).
DO.
  TRY.
      out->write(
        SWITCH string( sy-index
                       WHEN 1 THEN 'one'
                       WHEN 2 THEN 'two'
                       WHEN 3 THEN 'three'
                       ELSE THROW cx\_overflow( ) ) ).
    CATCH cx\_overflow.
      out->display( ).
      EXIT.
  ENDTRY.
ENDDO.