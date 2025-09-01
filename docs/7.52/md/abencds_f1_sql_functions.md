  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) → 

ABAP CDS - sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](javascript:call_link\('abensql_function_glosry.htm'\) "Glossary Entry") in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). For passed arguments arg1, arg2, ..., a predefined SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\))

-   [String functions](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))

-   [Coalesce function](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))

If an argument contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result is always the null value (except in the [Coalesce function](javascript:call_link\('abencds_f1_coalesce_expression.htm'\)). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[ABAP CDS - Numeric Functions](javascript:call_link\('abencds_f1_sql_functions_numeric.htm'\))
[ABAP CDS - String Functions](javascript:call_link\('abencds_f1_sql_functions_character.htm'\))
[ABAP CDS - coalesce](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))