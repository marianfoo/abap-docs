  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Expressions](javascript:call_link\('abenpredicate_expressions.htm'\)) → 

rel\_exp - IS INITIAL

Syntax

... operand IS *\[*NOT*\]* INITIAL ...

Effect

This predicate expression checks whether the operand operand is initial. The expression is true, if the operand contains its type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). Any data objects can be specified for operand. This is an [extended functional operand position](javascript:call_link\('abenextended_functional_positions.htm'\)) in which, alongside [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), certain predefined functions can also be specified.

If the addition NOT is specified, the expression is true if the operand contains a value other than its type-dependent initial value

Notes

-   If a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") is specified as operand, a potential short form of the following:

... operand IS NOT INITIAL ...

is a [predicative method call](javascript:call_link\('abenpredicative_method_calls.htm'\)).

-   It is possible, but not recommended, to always specify predefined functions or expressions as operand, for example:

-   It is better to use str IS INITIAL or itab IS INITIAL instead of strlen( str ) IS INITIAL or lines( itab ) IS INITIAL.

-   It is better to use the predicate function [matches](javascript:call_link\('abenmatches_functions.htm'\)) instead of [match( ... )](javascript:call_link\('abenmatch_functions.htm'\)) IS INITIAL.

-   It is better to use the arguments of the constructor expression instead of [VALUE type( ... )](javascript:call_link\('abenconstructor_expression_value.htm'\)) IS INITIAL.

-   An [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") can be specified for operand. A check is made on the initial value in accordance with its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

-   [Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") cannot be specified for operand.

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