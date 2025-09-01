  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperators_expressions.htm) → 

Expressions

The following expressions can be constructed in certain [operand positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions.htm):

-   Write positions

-   [Declaration expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm)

-   Certain [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm)

-   Certain [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm)

-   Read positions

-   [Logical expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm)

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm) and [mesh path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_expression.htm)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_arith.htm)

-   [String expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm)

-   [Bit expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm)

An expression in a [write position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwriting_position_glosry.htm "Glossary Entry") has a result that is assigned a value.

An expression in a [read position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreading_position_glosry.htm "Glossary Entry") has a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), that is, arithmetic expressions, string expressions, and bit expressions as operands of relational expressions. The three different calculation expression types cannot currently be mixed within a calculation expression.

Hints

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a allowed function in another expression. In the same way, logical expressions can occur as arguments of [Boolean functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry") in calculation expressions.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"), three other kinds of expressions are possible:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expression_glosry.htm "Glossary Entry")

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_expression_glosry.htm "Glossary Entry")

-   [SQL path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_path_expression_glosry.htm "Glossary Entry")

The ABAP expressions above can be used as [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm "Glossary Entry") in ABAP SQL.