  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

Expressions

The following expressions can be constructed in certain [operand positions](javascript:call_link\('abenexpression_positions.htm'\)):

-   Writer positions

-   [Declaration expressions](javascript:call_link\('abeninline_declarations.htm'\))

-   Certain [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))

-   Certain [table expressions](javascript:call_link\('abentable_expressions.htm'\))

-   Reader positions

-   [Logical expressions](javascript:call_link\('abenlogexp.htm'\))

-   [Constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))

-   [Table expressions](javascript:call_link\('abentable_expressions.htm'\)) and [mesh path expressions](javascript:call_link\('abenmesh_path_expression.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\))

-   [String expressions](javascript:call_link\('abapcompute_string.htm'\))

-   [Bit expressions](javascript:call_link\('abapcompute_bit.htm'\))

An expression in a [writer position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") produces a result to which a value is assigned.

An expression in a [reader position](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") produces a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") (arithmetic expressions, string expressions, and bit expressions) as relational expressions. The three different calculation expression types cannot currently be mixed in a single calculation expression.

Notes

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a permitted function in another expression. In the same way, logical expressions can be used as arguments of [Boolean functions](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") in calculation expressions.

-   In [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), three other kinds of expressions are possible:

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry")

-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry")

-   [CDS path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry")

The ABAP expressions above can be used as [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL.