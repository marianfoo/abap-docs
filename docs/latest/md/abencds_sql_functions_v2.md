  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20sql_functions%2C%20ABENCDS_SQL_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CDS DDL - CDS View Entity, sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](javascript:call_link\('abensql_function_glosry.htm'\) "Glossary Entry") in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))
-   [String functions](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))
-   [Coalesce function](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))

If an argument contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result is always the null value, except in the coalesce function. If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[CDS DDL - CDS View Entity, Numeric Functions](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))
[CDS DDL - CDS View Entity, String Functions](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))
[CDS DDL - CDS View Entity, Coalesce Function](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))