---
title: "Syntax"
description: |
  ... -operand1 +-/ -operand2 +-/ -operand3 ...  ... Effect Arithmetic expression in a SELECT statement(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) of a CDS DDIC-based view (obsolete)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v1.htm"
abapFile: "abencds_arithmetic_expression_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "arithmetic", "expression"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, arith_expr, ABENCDS_ARITHMETIC_EXPRESSION_V1, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, arith\_expr

Syntax

... *\[*\-*\]*operand1 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand3 ... *\]**\]* ...

Effect

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). An arithmetic expression uses arithmetic operators to calculate a numeric value from numeric operands. The possible operators are as follows:

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

A minus sign (\-) before an operand multiplies the operand by -1. The data type of the operands must be numeric and be based on one of the [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, or FLTP. The following can be specified:

-   [Numeric literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm) without a domain prefix
-   Numeric [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) of the current CDS view.
-   [Parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm) with numeric data type
-   [Path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm) that identify a numeric field of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm)
-   [Built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm) that return a numeric type
-   [Casting expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm) that return a numeric type

The subexpressions of an arithmetic expression can be placed in parentheses (...).

The following table shows which data types can be combined using the operators +, \-, and \* and the data type of the result:

+, \-, \*

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

FLTP

INT1

INT4

INT4

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

\-

INT2

INT4

INT4

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

\-

INT4

INT4

INT4

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

\-

INT8

INT8

INT8

INT8

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

\-

DEC

DEC

DEC

DEC

DEC

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

\-

CURR

CURR

CURR

CURR

CURR

CURR

CURR

DEC

DECFLOAT16

DECFLOAT34

\-

QUAN

QUAN

QUAN

QUAN

QUAN

QUAN

DEC

QUAN

DECFLOAT16

DECFLOAT34

\-

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT16

DECFLOAT34

\-

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

DECFLOAT34

\-

FLTP

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

The following table shows which data types can be combined using the operator / and the data type of the result:

/

DECFLOAT16

DECFLOAT34

FLTP

DECFLOAT16

DECFLOAT16

DECFLOAT34

\-

DECFLOAT34

DECFLOAT34

DECFLOAT34

\-

FLTP

\-

\-

FLTP

Note the following special conditions:

-   If an expression contains an operand of type DEC, CURR or QUAN, the expression is a decimal expression. In this case, the syntax check checks that the result of each operation is in the value range of the type DEC with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs.
-   If an expression has an operand of type DECFLOAT16 or DECFLOAT34, then it is a decimal floating point expression.
-   If an expression has an operand of type FLTP, then it is a binary floating point expression, in which all operands must be of type FLTP.
-   When a division is performed with the operator /, it must be a floating point expression. This means the operands must be of type DECFLOAT16, DECFLOAT34, or [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in combinations shown in the table above, or numeric literals with decimal places. Other numeric data types are not possible. The right operand cannot have the value 0.

Arithmetic expressions can be used as [elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm), where they need alternative element names defined using AS.

Hints

-   When a division is performed with two numbers of type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), the SQL function [DIVISION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm) can be used.
-   To convert operands into the appropriate types, [CAST expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm) can be used. The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v1.htm) can be used for the specific task of converting operands of type FLTP to packed numbers.

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