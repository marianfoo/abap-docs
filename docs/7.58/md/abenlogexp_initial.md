  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20IS%20INITIAL%2C%20ABENLOGEXP_INITIAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This predicate expression checks whether the operand operand is initial. The expression is true, if the operand contains its type-dependent [initial value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry"). Any data objects can be specified for operand. This is an [extended functional operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_functional_positions.htm) in which, in addition to [functional method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry"), certain built-in functions can also be specified.

With the addition NOT, the expression is true if the operand contains a value other than its type-dependent initial value

Hints

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value regardless of its actual data type, instead of comparing it with a type-compliant operand that contains the initial value.
-   If a [functional method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") is specified as operand, a potential short form of the following:
    
    ... operand IS NOT INITIAL ...
    
    is a [predicative method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicative_method_calls.htm).
    
-   The fact that built-in functions or expressions can be specified as operands should not always be exploited, e.g.:
    -   It is better to use str IS INITIAL or itab IS INITIAL instead of strlen( str ) IS INITIAL or lines( itab ) IS INITIAL.
    -   It is better to use the predicate function [matches](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmatches_functions.htm) instead of [match( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmatch_functions.htm) IS INITIAL.
    -   It is better to evaluate the arguments of the constructor expression instead of [VALUE type( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm) IS INITIAL.
-   An [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified for operand. The initial value is checked in accordance with its [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry").
-   [Calculation expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_expression_glosry.htm "Glossary Entry") cannot be specified for operand.

Example

The logical expression in the IF statement is true if the internal table in the SELECT statement was filled with lines.

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