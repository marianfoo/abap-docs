  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operators and Expressions](javascript:call_link\('abenoperators_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions, ABENEXPRESSIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

Expressions

The following expressions can be specified in [expression positions](javascript:call_link\('abenexpression_position_glosry.htm'\) "Glossary Entry"):

-   Write positions
    -   [Declaration expressions](javascript:call_link\('abeninline_declarations.htm'\))
    -   Certain [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))
    -   Certain [table expressions](javascript:call_link\('abentable_expressions.htm'\))
-   Read positions
    -   [Logical expressions](javascript:call_link\('abenlogexp.htm'\))
    -   [Constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\))
    -   [Table expressions](javascript:call_link\('abentable_expressions.htm'\)) and [mesh path expressions](javascript:call_link\('abenmesh_path_expression.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\))
    -   [String expressions](javascript:call_link\('abapcompute_string.htm'\))
    -   [Bit expressions](javascript:call_link\('abapcompute_bit.htm'\))

An expression in a [write position](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry") has a result that is assigned a value.

An expression in a [read position](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry") has a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), that is, arithmetic expressions, string expressions, and bit expressions as operands of relational expressions. The three different calculation expression types cannot currently be mixed within a calculation expression.

Hints

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a allowed function in another expression. In the same way, logical expressions can occur as arguments of [Boolean functions](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry") in calculation expressions.
-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), three other kinds of expressions are possible:
    
    -   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry")
    -   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry")
    -   [SQL path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry")
    
    The ABAP expressions above can be used as [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") in ABAP SQL.