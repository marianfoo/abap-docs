  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-based View, aggr\_expr](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) → 

CDS DDL - DDIC-Based View, AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* operand AS dtype ) ...

Effect

Aggregate expression [AVG](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") with a data type dtype specified. The data type determines the result type in which the average value is returned.

The same can be specified for the operand as for all [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) with one exception; [CASE](javascript:call_link\('abencds_case_expression_v1.htm'\)) cannot be specified. The data type of operand must be numeric and have one of the types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). operand can also have data type [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), but with this data type, the addition AS is mandatory.

The data type dtype can have the built-in numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)). The data type FLTP, however, can only be specified for operands of type FLTP. The data type dtype can be specified as follows:

-   Using a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") with a allowed type.
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

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

The value range of the data type dtype must cover the value range of the operand type:

-   If operand is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.
-   If operand has type DEC, CURR, QUAN, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits and decimal places.
-   If operand has type FLTP, this type must also be specified for dtype.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Hints

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\)).
-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.
-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\)) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype.
-   If FLTP is specified explicitly for operands of type FLTP, this ensures that the result of AVG actually has this type at each operand position, which cannot be guaranteed otherwise.

Example

The following CDS view demonstrates different uses of the aggregate expression AVG. The program DEMO\_CDS\_AVG accesses the view. The average value is calculated with and without addition DISTINCT and is returned in various types.

@AbapCatalog.sqlViewName: 'DEMOCDSAVG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Avg
  as select from
    demo\_expressions
    {
      avg(          num1                   ) as avg\_no\_type,
      avg( distinct num1                   ) as avg\_no\_type\_distinct,
      avg(          num1 as abap.dec(10,0) ) as avg\_dec0,
      avg( distinct num1 as abap.dec(10,0) ) as avg\_dec0\_distinct,
      avg(          num1 as abap.dec(12,2) ) as avg\_dec2,
      avg( distinct num1 as abap.dec(12,2) ) as avg\_dec2\_distinct
    }