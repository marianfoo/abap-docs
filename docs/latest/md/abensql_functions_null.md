  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Null%20Values%2C%20ABENSQL_FUNCTIONS_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

DDIC - SQL Functions for Null Values

The following table shows the SQL functions for [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

COALESCE

Returns the first non-null value from a specified list.

[x](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))

[x](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))

[x](javascript:call_link\('abensql_coalesce.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_coalesce_expression_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_coalesce_expression_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_coalesce.htm'\)).