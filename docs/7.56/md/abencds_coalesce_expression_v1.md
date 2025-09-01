  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, sql\_functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) → 

CDS DDL - DDIC-Based View, coalesce

Syntax

... COALESCE( arg1, arg2 ) ...

Effect

Coalesce function in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). Can be used to check whether arg1 contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). In ABAP CDS, the coalesce function has two mandatory [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"), arg1 and arg2. It checks whether arg1 contains a null value. If yes, then it returns the value of arg2. If no, then it returns the value of arg1. If both arg1 and arg2 are null, then the null value is returned.

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_literal_v1.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.
-   Suitable [fields](javascript:call_link\('abencds_field_v1.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view.
-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)).
-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)).
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](javascript:call_link\('abencds_sql_functions_v1.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))
    -   Type modifications using [CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\))

The valid argument types for arg1 and arg2 are all [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

Hint

A coalesce function is a short form of the following [complex case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)):

CASE WHEN arg1 IS NOT NULL THEN arg1
     ELSE arg2
END

Example

The following DDIC-based CDS view demonstrates the syntax of the coalesce function.

@AbapCatalog.sqlViewName: 'COALV1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_COALESCE\_DDIC  
as select from demo\_ddic\_types  
{
  key id,
  coalesce(int1, int2) as coalesced
}