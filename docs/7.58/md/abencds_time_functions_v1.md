  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Special Functions](javascript:call_link\('abencds_special_functions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Date Functions and Time Functions](javascript:call_link\('abencds_date_time_functions_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Time%20Functions%2C%20ABENCDS_TIME_FUNCTIONS_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - DDIC-Based View, Time Functions

Syntax

... TIMS\_IS\_VALID(time) ...

Variants:

[1\. ... TIMS\_IS\_VALID(time)](#!ABAP_VARIANT_1@1@)

Effect

In a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), these functions execute operations with arguments of the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). The functions have [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry") to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_data_source_v1.htm'\)), [literals](javascript:call_link\('abencds_literal_v1.htm'\)), [parameters](javascript:call_link\('abencds_parameter_v1.htm'\)), [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)), built-in functions, or expressions can all be specified as actual parameters. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except TIMS\_IS\_VALID returns a null value.

Hint

It is not currently possible to access the current system time directly in a CDS view. Instead, a CDS view can be given an appropriate [input parameter](javascript:call_link\('abencds_parameter_list_v1.htm'\)). The special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uzeit to this parameter.

Variant 1   

... TIMS\_IS\_VALID(time)

Effect

The function TIMS\_IS\_VALID determines whether time (if specified) contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Example

The following CDS view applies time functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_TIME\_FUNCTIONS uses SELECT to access the view. The column TIMS1 of the DDIC database table can be given any values.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_TIMFNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_time\_functions
  as select from demo\_expressions
{
  key id,
      tims1                as time1,
      tims\_is\_valid(tims1) as valid1
}