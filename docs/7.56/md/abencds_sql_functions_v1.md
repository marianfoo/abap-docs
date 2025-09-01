  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) → 

CDS DDL - DDIC-based View, sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](javascript:call_link\('abensql_function_glosry.htm'\) "Glossary Entry") in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))
-   [String functions](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))
-   [Coalesce function](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))

If an argument contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result is always the null value (except in the [Coalesce function](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[CDS DDL - DDIC-based View, Numeric Functions](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))
[CDS DDL - DDIC-based View, String Functions](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))
[CDS DDL - DDIC-Based View, coalesce](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))