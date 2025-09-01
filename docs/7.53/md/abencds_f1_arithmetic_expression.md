---
title: "Syntax"
description: |
  ... -operand1 +-/ -operand2 +-/ -operand3 ...  ... Effect Arithmetic expression in a SELECT statement(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) of a CDS view(https://help.sap.com/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_arithmetic_expression.htm"
abapFile: "abencds_f1_arithmetic_expression.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "arithmetic", "expression"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - arith\_expr

Syntax

... *\[*\-*\]*operand1 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand3 ... *\]**\]* ...

Effect

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"). An arithmetic expression uses arithmetic operators to calculate a numeric value from numeric operands. The possible operators are as follows:

Operator

Meaning

+

Adds the operands

\-

Subtracts the right operand from the left

\*

Multiplies the operands

/

Divides the left operand by the right

A \- in front of an operand multiplies it by -1. The data type of the operands must be numeric and be based on one of the [built-in data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) INT1, INT2, INT4, INT8, DEC, CURR, QUAN, or FLTP. The following can be specified:

-   [Numeric literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm) without a domain prefix

-   Numeric [fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_field.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) of the current CDS view.

-   [Parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter.htm) with numeric data type

-   [Path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm) that identify a numeric field of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm)

-   [Built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_builtin_functions.htm) that return a numeric type

-   [Casting expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression.htm) that return a numeric type

The subexpressions of an arithmetic expression can be placed in parentheses (...). Note the following special conditions:

-   If an expression contains an operand of type DEC, CURR or QUAN, the expression is a decimal expression. In this case, the syntax check checks that the result of each operation is in the value range of the type DEC with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs.

-   If an expression has as operand of type FLTP, then it is a floating point expression, in which all operands must be type FLTP.

-   When a division is performed, a floating point expression is required. This means the operands must be type [FLTP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or numeric literals with fractional digits and the right operand cannot have the value 0.

Arithmetic expressions can be used as [elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm), where they need alternative element names defined using AS.

Notes

-   When a division is performed with two numbers of type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), the SQL function [DIVISION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_sql_functions_numeric.htm) can be used.

-   To convert operands into the appropriate types, [CAST expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression.htm) can be used. The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conv_func_types.htm) can be used for the specific task of converting operands of type FLTP to packed numbers.

Example

SELECT list of a CDS view with arithmetic expressions.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         association \[1..\*\] to snwd\_so\_i as \_item
           on snwd\_so.node\_key = \_item.parent\_key
         { key snwd\_so.node\_key,
               gross\_amount,
               gross\_amount - tax\_amount as pre\_tax\_amount,
               cast(gross\_amount as abap.fltp)
                 + (cast( -gross\_amount as abap.fltp) \* 0.03)
                   as reduced\_amount,
            cast(gross\_amount as abap.fltp) \* 0.03 as overall\_savings,
            \_item.so\_item\_pos as item\_position,
            \_item.gross\_amount as item\_gross\_amount,
            cast(\_item.gross\_amount as abap.fltp) \* 0.97 as item\_savings
}