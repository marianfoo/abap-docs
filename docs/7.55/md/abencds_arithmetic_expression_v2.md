  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v2.htm) → 

CDS DDL - CDS View Entity arith\_expr

Syntax

... *\[*\-*\]*operand1 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand3 ... *\]**\]* ...

Effect

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). An arithmetic expression uses arithmetic operators to calculate a numeric value from numeric operands. The possible operators are as follows:

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

A minus sign (\-) before an operand multiplies the operand by -1. The data type of the operands must be numeric and be based on one of the [built-in data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) INT1, INT2, INT4, INT8, DEC, DECFLOAT16, DECFLOAT34, or FLTP. The following can be specified:

-   [Numeric literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm)

-   Numeric [fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) of the current CDS view entity

-   [Parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm) with numeric data type

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm) that identify a numeric field of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm)

-   [Built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm) that return a numeric type

-   [Casting expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm) that return a numeric type

-   [Case distinctions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v2.htm) that return a numeric type

-   [Aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm) that return a numeric type

-   Another arithmetic expression

The subexpressions of an arithmetic expression can be placed in parentheses (...).

The following table shows which data types can be linked using the operators +, \-, and \* and the data type of the result:

+, \-, \*

INT1

INT2

INT4

INT8

DEC

DECFLOAT16

DECFLOAT34

FLTP

INT1

INT4

INT4

INT4

INT8

DEC

DECFLOAT16

DECFLOAT34

\-

INT2

INT4

INT4

INT4

INT8

DEC

DECFLOAT16

DECFLOAT34

\-

INT4

INT4

INT4

INT4

INT8

DEC

DECFLOAT16

DECFLOAT34

\-

INT8

INT8

INT8

INT8

INT8

DEC

DECFLOAT16

DECFLOAT34

\-

DEC

DEC

DEC

DEC

DEC

DEC

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

\-

FLTP

\-

\-

\-

\-

\-

\-

\-

FLTP

The following table shows which data types can be linked using the operator / and the data type of the result:

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

-   If an expression contains an operand of type DEC, the expression is a decimal expression. In this case, the syntax check checks that the result of each operation is in the value range of the type DEC with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs.

-   If an expression has an operand of type DECFLOAT16 or DECFLOAT34, then it is a decimal floating point expression.

-   If an expression has an operand of type FLTP, then it is a binary floating point expression, in which all operands must be of type FLTP.

-   When a division is performed with the operator /, it must be a floating point expression. This means the operands must be of type DECFLOAT16, DECFLOAT34, or FLTP in combinations shown in the table above, or numeric literals with fractional digits. Other numeric data types are not possible. The right operand cannot have the value 0.

Operand positions:

-   Arithmetic expressions can be used as [elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm), and there they need alternative element names defined using AS.

-   An arithmetic expression can be used as operand of an [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm), a [cast expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm), or a [case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v2.htm).

-   An arithmetic expression can be used in the condition cds\_cond as operand lhs of a [complex case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_searched_case_expr_v2.htm).

Hints

-   Currently, the built-in data types CURR and QUAN are not supported in arithmetic expressions in CDS view entities.

-   When a division is performed with two numbers of type [DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), the SQL function [DIVISION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v2.htm) can be used.

-   To convert operands into the appropriate types, [CAST expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm) can be used. The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm) can be used for the specific task of converting operands of type FLTP to packed numbers.

Example

SELECT list of a CDS view entity with arithmetic expressions.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SO\_ARITH\_EXPR
  as select from
    demo\_so\_inv\_he
    association to DEMO\_SALES\_CDS\_SO\_I as \_item
      on $projection.so\_key = \_item.so\_item\_key
    {
      key so\_key,
          @Semantics.amount.currencyCode: 'currency\_code'
          gross\_amount,
          cast(gross\_amount as abap.dec(10, 2)) -
          cast(tax\_amount as abap.dec(10,2))        as pre\_tax\_amount,
          cast(gross\_amount as abap.fltp) +
          (cast( gross\_amount as abap.fltp) \* -0.03)  
                                                    as reduced\_amount,
          cast(gross\_amount as abap.fltp) \* 0.33      
                                                    as overall\_savings,
          \_item.posnr                               as item\_position,
          \_item.gross\_amount                        as item\_gross\_amount,
          cast(\_item.gross\_amount as abap.fltp)\*0.97  
                                                    as item\_savings,
          currency\_code,
          \_item.currency
    }