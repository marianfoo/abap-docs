---
title: "Syntax"
description: |
  ... - sql_exp1 +-/ - sql_exp2 +-/ - sql_exp3 ...  ... Effect Arithmetic expression in ABAP SQL. The operators perform arithmetic calculations between two adjacent operands sql_exp1, sql_exp2, .... The possible operators are: -   + for a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith.htm"
abapFile: "abensql_arith.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abensql", "arith"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - sql_arith, ABENSQL_ARITH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

sql\_exp - sql\_arith

Syntax

... *\[*\-*\]* sql\_exp1 +*|*\-*|*\**|*/ *\[*\-*\]* sql\_exp2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]* sql\_exp3 ... *\]* ...

Effect

Arithmetic expression in ABAP SQL. The operators perform arithmetic calculations between two adjacent operands sql\_exp1, sql\_exp2, .... The possible operators are:

-   + for adding the operands
-   \- for subtracting the right operand from the left operand
-   \* for multiplying the operands
-   / for dividing the left operand by the right operand

The operators \* and / have a higher priority than the operators + and \-. Within a [parenthesis level](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_exp_parentheses.htm), operations with a higher priority are performed before those with a lower priority. Operations with identical priorities are performed from left to right. A minus sign \- can be placed in front of an operand that does not directly follow an operator +, \-, \*, or /.

The arithmetic expressions in ABAP SQL are distinguished depending on the data type of the operands as follows:

-   Integer expressions
    
    Integer expressions use only integer operands, regardless of the parenthesis level. These have the dictionary type INT1, INT2, INT4, and INT8 or the ABAP type b, s, i, and int8 plus packed numbers of the types DEC, CURR, and QUAN or p without decimal places. The operator / is not allowed in integer expressions. An overflow occurs and an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised when
    
    -   the value range of the type INT4 or i is exceeded in operations between two integer numbers where neither of the numbers has the type INT8,
    -   the value range of the type INT8 or int8 is exceeded in operations between two integer numbers where one of the numbers has the type INT8,
    -   the value range of a packed number with length 31 without decimal places is exceeded in operations using packed numbers.
    
    Depending on the types of the operands and whether packed numbers are involved, the result has the type INT4, INT8 or is a packed number with length 31 and no decimal places. Using the associated [assignment rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_conversion.htm), it can be assigned to all [numeric ABAP types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm) whose value range is large enough, except for decimal floating point numbers.
    
-   Decimal expressions
    
    Alongside any integer operands (see above), decimal expression have at least one operand with the type DEC, CURR, or QUAN or p with decimal places. The operator / is not allowed in decimal expressions. The result has the type DEC with the length 31 and a maximum of 14 decimal places. Using the associated [assignment rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_conversion.htm), it can be assigned to all [numeric ABAP types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm) whose value range is large enough, except for decimal floating point numbers.
    
    If a decimal expression is specified statically, the syntax check checks that the result of each operation is in the value range of the type DEC with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs. If the expression is specified dynamically, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised in this case.
    
-   Decimal floating point expressions
    
    Alongside any integer operands and operands of the type DEC, CURR, and QUAN or p, decimal floating point expressions have at least one operand of the type DECFLOAT16 or DECFLOAT34 or of the ABAP type decfloat16 or decfloat34. Decimal floating point expressions allow division between two decimal floating point numbers of types DECFLOAT16 or DECFLOAT34 using the operator /. Depending on the types of the operands, the result has the type DECFLOAT16 or DECFLOAT34. Using the associated [assignment rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_conversion.htm), it can be assigned to the ABAP types decfloat16 or decfloat34. If the value range of the result type is exceeded or division by 0 takes place, an overflow occurs and an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.
    
-   Binary floating point expressions
    
    Binary floating point expressions only have operands with the dictionary type FLTP or with the ABAP type f. Only binary floating point expressions allow division with the operator /. If the value range of the type FLTP is exceeded or division by 0 takes place, an overflow occurs and an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. The result has the type FLTP and can only be assigned to a field with the ABAP type f in accordance with the associated [assignment rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_conversion.htm).
    

No other combinations of operand are allowed. The operands can all be SQL expressions of the specified data types.

If the operand of an arithmetic expression has the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the entire arithmetic expression is the null value.

Hints

-   Specifying an arithmetic expression always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm). Arithmetic expressions can only be specified for operand positions for which SQL expressions are possible.
-   The arithmetic expressions are divided into the three categories integer expressions, decimal expressions, and floating point expressions to achieve the same behavior in all supported database systems.
-   To use operators that do not have the type FLTP in a binary floating point expression, they can be transformed to an operator with the type FLTP using a [CAST expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm).
-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecfloat_glosry.htm "Glossary Entry") are not supported in SQL expressions and are not valid data types of the operands here.
-   A plus sign + cannot be specified in front of an operand of an arithmetic expression. If a minus sign \- is to be specified after an operator +, \-, \*, or /, the sign and the operand must be placed in parentheses.
-   If an operand is prefixed with a minus sign (\-), the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
-   Arithmetic expressions can be calculated in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). They do not bypass [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Example

Arithmetic expression as an argument of the built-in function [DIVISION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm). To use the operator / instead of DIVISION, its operands would have to be [cast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) to DECFLOAT16, DECFLOAT34, or FLTP and the result would also have the corresponding type.

SELECT FROM   sflight
       FIELDS fldate, DIVISION( ( seatsmax - seatsocc ) \* 100,
              seatsmax, 2 ) AS availability
       WHERE carrid = 'LH' AND
             connid = 400
       ORDER BY fldate
       INTO TABLE @FINAL(result).

Executable Example

[SQL Expressions, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_arith_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Arithmetic Calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_arith_abexa.htm)