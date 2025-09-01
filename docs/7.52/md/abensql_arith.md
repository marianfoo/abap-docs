---
title: "Syntax"
description: |
  ... - operand1 +-/ -operand2 +-/ - operand3 ...  ... Effect Arithmetic expression in Open SQL. The operators perform arithmetic calculation between two adjacent operands. The possible operators are: -   + for adding the operands -   - for s
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith.htm"
abapFile: "abensql_arith.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abensql", "arith"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_arith

Syntax

... *\[*\-*\]* operand1 +*|*\-*|*\**|*/ *\[*\-*\]*operand2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]* operand3 ... *\]* ...

Effect

Arithmetic expression in Open SQL. The operators perform arithmetic calculation between two adjacent operands. The possible operators are:

-   + for adding the operands

-   \- for subtracting the right operand from the left operand

-   \* for multiplying the operands

-   / for dividing the left operand by the right operand

The operators \* and / have a higher priority than the operators + and \-. Within a [parenthesis level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_exp_parentheses.htm), operations with a higher priority are performed before those with a lower priority. Operations with identical priorities are performed from left to right. A minus sign \- can be placed in front of an operand that does not directly follow an operator +, \-, \*, or /.

The arithmetic expressions in Open SQL are distinguished as follows, depending on the data type of the operands:

-   Integer Expressions

Integer expressions use only integer operators, regardless of the parenthesis level. These operators have the dictionary type INT1, INT2, INT4, and INT8 or the ABAP type b, s, i, and int8 plus packed numbers of the types DEC, CURR, and QUAN or p without decimal places. The operator / is not allowed in integer expressions. An overflow occurs and an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised when

-   the value range of the type INT4 or i is exceeded in operations between two integer numbers where neither of the numbers has the type INT8,

-   the value range of the type INT8 or int8 is exceeded in operations between two integer numbers where one of the numbers has the type INT8,

-   the value range of a packed number with length 31 without decimal places is exceeded in operations using packed numbers.

Depending on the types of the operators, the result has the type INT4, INT8 or (if packed numbers are involved) is a packed number number with length 31 and no decimal places. Using the associated [assignment rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm), it can be assigned to all [numeric ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) whose value range is large enough, except for decimal floating point numbers.

-   Decimal Expressions

Alongside any integer operators (see above), decimal expression have at least one operator with the type DEC, CURR, or QUAN or p with decimal places. The operator / is not allowed in decimal expressions. The result has the type DEC with the length 31 and a maximum of 14 decimal places. Using the associated [assignment rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm), it can be assigned to all [numeric ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) whose value range is large enough, except for decimal floating point numbers.

If a decimal expression is specified statically, the syntax check checks that the result of each operation is in the value range of the type DEC with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs. If the expression is specified dynamically, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised in this case.

-   Floating Point Expressions

Floating point expressions only have operators with the dictionary type FLTP or with the ABAP type f. Only floating point expressions permit division with the operator /. If an operation exceeds the value range of the type FLTP or division by 0 takes place, an overflow occurs and an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. The result has the type FLTP and can only be assigned to a field with the ABAP type f in accordance with the associated [assignment rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm).

No other combinations of operand are allowed. The operands can be appropriate SQL expressions, which covers columns, literals, host variables, and host expressions.

If the operand of an arithmetic expression has the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full arithmetic expression is the null value.

Notes

-   The arithmetic expressions have been divided into the three categories integer expression, decimal expressions, and floating point expression to achieve the same behavior in all supported database systems.

-   Operators that do not have the type FLTP can be transformed to an operator with the type FLTP using a [CAST expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cast.htm) and hence used in floating point expressions.

-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry") are not supported in SQL expressions and are not valid operands here.

-   A plus sign + cannot be specified in front of an operand of an arithmetic expression. If a minus sign \- is specified after an operator +, \-, \*, or /, the sign and the operand must be placed in parentheses.

-   If an operand is prefixed with a minus sign (\-), the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Arithmetic expression as an argument of the built-in function [DIVISION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm). To be able to use the operator / instead of DIVISION, its operands would have to be [cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cast.htm) to FLTP and the result would also have the type FLTP.

SELECT FROM sflight
       FIELDS fldate, DIVISION( ( seatsmax - seatsocc ) \* 100,
              seatsmax, 2 ) AS availability
       WHERE carrid = 'LH' AND
             connid = 400
       ORDER BY fldate
       INTO TABLE @DATA(result).

Executable Example

[SQL Expressions, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_arith_abexa.htm)