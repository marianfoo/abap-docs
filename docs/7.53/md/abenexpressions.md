  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperators_expressions.htm) → 

Expressions

The following expressions can be constructed in certain [operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions.htm):

-   Writer positions

-   [Declaration expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declarations.htm)

-   Certain [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm)

-   Certain [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm)

-   Reader positions

-   [Logical expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm)

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) and [mesh path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_expression.htm)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm)

-   [String expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm)

-   [Bit expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_bit.htm)

An expression in a [writer position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry") produces a result to which a value is assigned.

An expression in a [reader position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") produces a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry") (arithmetic expressions, string expressions, and bit expressions) as relational expressions. The three different calculation expression types cannot currently be mixed in a single calculation expression.

Notes

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a permitted function in another expression. In the same way, logical expressions can be used as arguments of [Boolean functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboole_function_glosry.htm "Glossary Entry") in calculation expressions.

-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"), three other kinds of expressions are possible:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expression_glosry.htm "Glossary Entry")

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry")

-   [CDS path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_path_expression_glosry.htm "Glossary Entry")

The ABAP expressions above can be used as [host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_expression_glosry.htm "Glossary Entry") in ABAP SQL.