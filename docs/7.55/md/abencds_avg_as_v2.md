  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, aggr\_expr](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) → 

CDS DDL - CDS View Entity, AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* operand AS dtype ) ...

Effect

Aggregate expression [AVG](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") specifying the data type dtype. The data type determines the result type in which the average value is returned.

For the operand, the same can be specified as for all [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)). The data type of operand must be numeric and have one of the types [INT1, INT2, INT4, INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), and [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data type dtype can have the built-in numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data type dtype can be specified as follows:

-   Using a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") with a allowed type.

-   Directly as a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

abap.decfloat16*\[*(len,decimals)*\]*

[DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

abap.decfloat34*\[*(len,decimals)*\]*

[DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

The value range of the data type dtype must cover the value range of the operand type:

-   If operand is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.

-   If operand has type DEC, CURR, QUAN, then dtype of type DEC, CURR, QUAN must have at least as many integer digits and decimal places.

-   If operand has the data type DECFLOAT16, then dtype must be DECFLOAT16 or DECFLOAT34. If the operand has the data type DECFLOAT34, then the target data type dtype must also be DECFLOAT34.

-   If operand has type FLTP, this type must also be specified for dtype.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Hints

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)).

-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.

-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)) expression.

-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype.

Example

The following CDS view entity demonstrates different uses of the aggregate expression AVG. The program DEMO\_CDS\_AVG\_VE accesses the view. The average value is calculated with and without addition DISTINCT and is returned in various types. A built-in numeric function is used as operand to demonstrate the nesting of built-in functions.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity Demo\_Cds\_Avg\_Ve
  as select from demo\_expressions
    {
      avg(          num1 as abap.dec(10,0) ) as avg\_dec0,
      avg( distinct num1 as abap.dec(10,0) ) as avg\_dec0\_distinct,
      avg(          num1 as abap.dec(12,2) ) as avg\_dec2,
      avg( distinct num1 as abap.dec(12,2) ) as avg\_dec2\_distinct,
      avg(          abs(num1)
                         as abap.dec(12,2))  as avg\_numeric\_func
    }