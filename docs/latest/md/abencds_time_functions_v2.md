  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Special Functions](javascript:call_link\('abencds_special_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Date Functions and Time Functions](javascript:call_link\('abencds_date_time_functions_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Time%20Functions%2C%20ABENCDS_TIME_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - CDS View Entity, Time Functions

Syntax

... TIMS\_IS\_VALID(time) ...

Effect

In a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), the function TIMS\_IS\_VALID determines whether the [positional parameter](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry") time contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). time can be specified as [literal](javascript:call_link\('abencds_literal_v2.htm'\)), field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), [reuse expression](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) using $projection, an [SQL-based scalar function](javascript:call_link\('abencds_sql_scalar_function.htm'\)), or [built-in function](javascript:call_link\('abencds_builtin_functions_v2.htm'\)). The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

It is not currently possible to access the current system time directly in a CDS view entity. Instead, a CDS view entity can be given an appropriate [input parameter](javascript:call_link\('abencds_parameter_list_v2.htm'\)). The special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uzeit to this parameter.

Example

The following CDS view entity demonstrates how to use the time function TIMS\_IS\_VALID. The class CL\_DEMO\_CDS\_TIME\_FUNC\_VE uses SELECT to access the view. You can assign any value to the column TIMS1 of the DDIC database table DEMO\_EXPRESSIONS.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_TIME\_FUNC\_VE
  as select from demo\_expressions
{
  key id,
      tims1                                        as time1,
      tims\_is\_valid(120102)                        as valid,
      tims\_is\_valid(tims\_from\_timn(timn1, 'FAIL')) as valid1,
      tims\_is\_valid(tims1)                         as valid2
}