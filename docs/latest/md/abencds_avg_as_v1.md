  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, aggr\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20AVG%2C%20AS%2C%20ABENCDS_AVG_AS_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DDIC-Based View, AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* arg AS dtype ) ...

Effect

Aggregate expression [AVG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") with a data type dtype specified. The data type determines the result type in which the average value is returned.

The same can be specified for the arg as for all [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) with one exception; [CASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v1.htm) cannot be specified. The data type of arg must be numeric and have one of the types [INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). arg can also have data type [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), but with this data type, the addition AS is mandatory.

The data type dtype can have the built-in numeric type [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The data type FLTP, however, can only be specified for operands of type FLTP. The data type dtype can be specified as follows:

-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") with a allowed type.
-   Directly as a [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

The value range of the data type dtype must cover the value range of the operand type:

-   If arg is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.
-   If arg has type DEC, CURR, QUAN, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits and decimal places.
-   If arg has type FLTP, this type must also be specified for dtype.

If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Hints

-   The addition AS to AVG bridges the gap for average values where FLTP cannot be cast to other numeric data types with [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm).
-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.
-   An aggregate expression AVG with the addition AS dtype can be used in accordance with this type in a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v1.htm) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of dtype. For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   If FLTP is specified explicitly for operands of type FLTP, this ensures that the result of AVG actually has this type at each operand position, which cannot be guaranteed otherwise.

Example

The following CDS view demonstrates different uses of the aggregate expression AVG. The class CL\_DEMO\_CDS\_AVG accesses the view. The average value is calculated with and without addition DISTINCT and is returned in various types.

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