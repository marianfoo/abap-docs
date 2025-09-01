  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

column selector

Character ~. A column col of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) can be addressed in a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary if, when multiple database tables are accessed, the name of a column occurs in a number of different database tables, when a comparison of a [SQL condition](javascript:call_link\('abensql_cond_glosry.htm'\) "Glossary Entry") compares two columns.