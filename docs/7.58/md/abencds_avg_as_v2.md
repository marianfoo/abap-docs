  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, aggr\_expr](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20AVG%2C%20AS%2C%20ABENCDS_AVG_AS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS DDL - CDS View Entity, AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* arg AS dtype ) ...

Effect

Aggregate expression [AVG](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") specifying the data type dtype. The data type determines the result type in which the average value is returned.

The same can be specified for arg as for all [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)). The data type of arg must be numeric and have one of the types [INT1, INT2, INT4, INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), and [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data type dtype can have the built-in numeric type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), or [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)).

The data type dtype can be specified as follows:

-   Using a [CDS simple type](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry") with an appropriate data type.
-   Using a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") with an appropriate data type.
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

The value range of the data type dtype must cover the value range of the type of arg:

-   If arg is an integer type, a type dtype of type DEC or QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.
-   If arg has type DEC or QUAN, then dtype of type DEC or QUAN must have at least as many integer digits and decimal places.
-   If arg has the data type DECFLOAT16, then dtype must be DECFLOAT16 or DECFLOAT34. If arg has the data type DECFLOAT34, then the target data type dtype must also be DECFLOAT34.
-   If arg has type FLTP, this type must also be specified for dtype.
-   If arg has type CURR, this type must also be specified for dtype and the number of decimal places must match exactly.
-   If arg has any other type except CURR and dtype is specified as CURR, then dtype must have exactly two decimal places.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

If arg is assigned a currency key using the annotation [Semantics.amount.currencyCode](javascript:call_link\('abencds_f1_element_annotation.htm'\)), then the result field must also be assigned a currency key using the same annotation.

If arg is assigned a unit of measurement key using the annotation [Semantics.quantity.unitofMeasure](javascript:call_link\('abencds_f1_element_annotation.htm'\)), then the result field must also be assigned a unit of measurement key using the same annotation.

Hints

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.
-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype. For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

Example

The following CDS view entity demonstrates different uses of the aggregate expression AVG. The class CL\_DEMO\_CDS\_AVG\_VE accesses the view. The average value is calculated with and without addition DISTINCT and is returned in various types. A built-in numeric function is used as operand to demonstrate the nesting of built-in functions.

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