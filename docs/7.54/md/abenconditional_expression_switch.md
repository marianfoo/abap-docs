  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm) → 

SWITCH - Conditional Operator

Syntax

... SWITCH type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]*
                 operand
                 WHEN const1 THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]* [result1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm)
               *\[* WHEN const2 THEN *\[* [let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]* [result2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) *\]*
               ...
               *\[* ELSE *\[* [let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]* [resultn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) *\]* ) ...

Effect

A [conditional expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_glosry.htm "Glossary Entry") with the conditional operator SWITCH has a result, [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm), that is specified by a case distinction. Either a value with the data type specified by type is produced or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_type_glosry.htm "Glossary Entry").

-   If the data type required in an operand position is unique and fully identifiable, this type is used.

-   If the operand type is not fully identifiable, an operand with a statically identifiable type must be specified after the first THEN (except when passing the constructor parameter to an actual parameter with generically typed formal parameter). This type is then used. In particular, [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm)s cannot then be specified after THEN.

-   If the constructor expression is passed to an actual parameter with generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_constructor_inference.htm).

-   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") must be possible.

The position operand in the parentheses is the value checked in the case distinction. This is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). It must be followed by at least one WHEN. Literals and [constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstant_glosry.htm "Glossary Entry") can be specified for const after WHEN. It must be possible to [compare](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) them with operand. [Substring access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) is not possible. This can be followed by any number of WHENs with further constant values. An ELSE can be specified at the end. This expression compares the values of the operand operand with the specified constant values, one by one, and chooses the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) after THEN for which the values of operand and constant are identical for the first time. The selected [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) determines the result of the conditional expression. If no matches are found, the [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

If an item specified after THEN or ELSE can be selected, either the result is set or a class-based exception is raised, just as with a conditional expression [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm).

To define local helper fields, an optional [LET expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm) can be specified in front of the operand operand, after every THEN, and after ELSE.

Notes

-   [Text symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_symbol_glosry.htm "Glossary Entry") for const cannot be specified after WHEN.

-   A conditional expression with SWITCH has the same meaning as the following conditional expression with [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm):

COND type( WHEN operand = const1 THEN result1
         *\[* WHEN operand = const2 THEN result2 *\]*
         ...
         *\[* ELSE resultn *\]* )

-   Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.

-   No suitable full type can be derived for formal parameters with the generic types c, n, and x.

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