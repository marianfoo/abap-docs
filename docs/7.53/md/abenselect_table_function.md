  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT - FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) → 

SELECT - FROM table\_function

Syntax

... [hierarchy\_function](javascript:call_link\('abenselect_hierarchy_functions.htm'\)) ...

Effect

A table function is a possible data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in a ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). If specified, a ABAP SQL-specific table function is transformed to database-specific access by the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") and a tabular result is produced. The query accesses this result in the same way as it accesses a database table or view.

The following table functions are available:

-   [Hierarchy functions](javascript:call_link\('abenhierarchy_function_glosry.htm'\) "Glossary Entry") [hierarchy\_function](javascript:call_link\('abenselect_hierarchy_functions.htm'\))

Note

Table functions are handled like any other data source. They can have alternative table names defined using [AS](javascript:call_link\('abapfrom_clause.htm'\)) and can be used in join expressions. There are no restrictions on which [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") they can be used in.

Continue
[SELECT - FROM hierarchy\_function](javascript:call_link\('abenselect_hierarchy_functions.htm'\))