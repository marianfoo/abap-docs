  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, sql\_functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Coalesce%20Function%2C%20ABENCDS_COALESCE_EXPRESSION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CDS DDL - CDS View Entity, Coalesce Function

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). Can be used to check whether arg1 contains a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"). In ABAP CDS, the coalesce function has two mandatory [positional parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"), arg1 and arg2. It checks whether arg1 contains a null value. If yes, then it returns the value of arg2. If no, then it returns the value of arg1. If both arg1 and arg2 are null, then the null value is returned.

The following can be specified as the arguments arg:

-   [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm) of a suitable type.
-   Suitable [fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm) of the current CDS view entity.
-   [Path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) that identify a suitable field of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm).
-   [Input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v2.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v2.htm).
-   [Reuse expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_reusable_expression_v2.htm) using $projection
-   [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm) (if they return a matching type)
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_v2.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm)
    -   Type modifications using [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm)

The valid argument types for arg1 and arg2 are all [dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

Rules for Amounts and Quantities

The arguments of a coalesce function can be [CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), [CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or [CDS calculated quantities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"). The following table shows how the result data type is calculated if one or more of the arguments are amount and/or quantity fields.

arg1/arg2

Amount

Quantity

Calculated Quantity

Number

Amount

Amount

Calculated Quantity

Calculated Quantity

Calculated Quantity

Quantity

Calculated Quantity

Quantity

Calculated Quantity

Calculated Quantity

Calculated Quantity

Calculated quantity

Calculated quantity

Calculated Quantity

Calculated Quantity

Number

Calculated Quantity

Calculated quantity

Calculated Quantity

Number

-   If the result is an amount or quantity field, a reference annotation must be assigned.
-   It is not mandatory that the arguments and the result point to the same reference field.
-   The following rules apply to amount fields of data type CURR:
    -   Fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hint

The coalesce function is a short form of the following [complex case distinction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_searched_case_expr_v2.htm):

CASE WHEN arg1 IS NOT NULL THEN arg1
     ELSE arg2
END

Example

The following CDS view entity demonstrates the syntax of the coalesce function.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_COALESCE  
as select from demo\_ddic\_types  
{
  key id,
  coalesce(int1, int2) as coalesced
}