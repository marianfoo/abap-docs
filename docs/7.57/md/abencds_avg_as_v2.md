  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, aggr\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, AVG, AS, ABENCDS_AVG_AS_V2, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* arg AS dtype ) ...

Effect

Aggregate expression [AVG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") specifying the data type dtype. The data type determines the result type in which the average value is returned.

The same can be specified for arg as for all [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm). The data type of arg must be numeric and have one of the types [INT1, INT2, INT4, INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), and [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The data type dtype can have the built-in numeric type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), or [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The data type dtype can be specified as follows:

-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_element_glosry.htm "Glossary Entry") with a allowed type.
-   Directly as a [built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.decfloat16*\[*(len,decimals)*\]*

[DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.decfloat34*\[*(len,decimals)*\]*

[DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

The value range of the data type dtype must cover the value range of the type of arg:

-   If arg is an integer type, a type dtype of type DEC or QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.
-   If arg has type DEC or QUAN, then dtype of type DEC or QUAN must have at least as many integer digits and decimal places.
-   If arg has the data type DECFLOAT16, then dtype must be DECFLOAT16 or DECFLOAT34. If arg has the data type DECFLOAT34, then the target data type dtype must also be DECFLOAT34.
-   If arg has type FLTP, this type must also be specified for dtype.
-   If arg has type CURR, this type must also be specified for dtype and the number of decimal places must match exactly.
-   If arg has any other type except CURR and dtype is specified as CURR, then dtype must have exactly two decimal places.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

If arg is assigned a currency key using the annotation [Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm), then the result field must also be assigned a currency key using the same annotation.

If arg is assigned a unit of measurement key using the annotation [Semantics.quantity.unitofMeasure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm), then the result field must also be assigned a unit of measurement key using the same annotation.

Hints

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm).
-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.
-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype. For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/HANA_SERVICE_CF/7c78579ce9b14a669c1f3295b0d8ca16/f327b70cae564c53a766367a8aad0164.html).

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