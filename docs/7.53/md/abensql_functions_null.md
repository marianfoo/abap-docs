  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

SQL Functions for Null Values

The following table shows the SQL functions for [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") that are supported by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

COALESCE( arg1, arg2, ... )

Value of the first argument that does not have a null value.

[x](javascript:call_link\('abencds_f1_coalesce_expression.htm'\))

[x](javascript:call_link\('abensql_coalesce.htm'\))

x

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](javascript:call_link\('abencds_f1_coalesce_expression.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_coalesce.htm'\)).