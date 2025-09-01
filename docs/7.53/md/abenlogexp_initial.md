  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_expressions.htm) → 

rel\_exp - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This predicate expression checks whether the operand operand is initial. The expression is true, if the operand contains its type-dependent [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry"). Any data objects can be specified for operand. This is an [extended functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_functional_positions.htm) in which, alongside [functional method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry"), certain built-in functions can also be specified.

If the addition NOT is specified, the expression is true if the operand contains a value other than its type-dependent initial value

Notes

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value (regardless of its actual data type), instead of comparing it with a type-friendly operand that contains the initial value.

-   If a [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") is specified as operand, a potential short form of the following:

... operand IS NOT INITIAL ...

is a [predicative method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicative_method_calls.htm).

-   It is possible, but not recommended, to always specify built-in functions or expressions as operand, for example:

-   It is better to use str IS INITIAL or itab IS INITIAL instead of strlen( str ) IS INITIAL or lines( itab ) IS INITIAL.

-   It is better to use the predicate function [matches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatches_functions.htm) instead of [match( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmatch_functions.htm) IS INITIAL.

-   It is better to use the arguments of the constructor expression instead of [VALUE type( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) IS INITIAL.

-   An [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified for operand. A check is made on the initial value in accordance with its [base type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase_type_glosry.htm "Glossary Entry").

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry") cannot be specified for operand.

Example

The logical expression in the IF statement is true if the internal table in the SELECT statement was filled with rows.

DATA spfli\_tab TYPE TABLE OF spfli.
...
CLEAR spfli\_tab.
SELECT \*
       FROM spfli
       WHERE ...
       INTO TABLE @spfli\_tab.
IF spfli\_tab IS NOT INITIAL.
  ...
ENDIF.