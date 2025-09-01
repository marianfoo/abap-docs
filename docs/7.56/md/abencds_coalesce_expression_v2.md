  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, sql\_functions](javascript:call_link\('abencds_sql_functions_v2.htm'\)) → 

CDS DDL - CDS View Entity, Coalesce Function

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). Can be used to check whether arg1 contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). In ABAP CDS, the coalesce function has two mandatory [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"), arg1 and arg2. It checks whether arg1 contains a null value. If yes, then it returns the value of arg2. If no, then it returns the value of arg1. If both arg1 and arg2 are null, then the null value is returned.

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_literal_v2.htm'\)) of a suitable type.
-   Suitable [fields](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity.
-   [Path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)).
-   [Input parameters](javascript:call_link\('abencds_parameter_v2.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v2.htm'\)).
-   [Reuse expressions](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) using $projection
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](javascript:call_link\('abencds_sql_functions_v2.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))
    -   Type modifications using [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\))

The valid argument types for arg1 and arg2 are all [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

Rules for amounts and quantities

The arguments of a coalesce function can be [CDS amount fields](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry"), [CDS quantity fields](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry"), or [CDS calculated quantities](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry"). The following table shows how the result data type is calculated if one or more of the arguments are amount and/or quantity fields.

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
    -   fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hint

The coalesce function is a short form of the following [complex case distinction](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)):

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