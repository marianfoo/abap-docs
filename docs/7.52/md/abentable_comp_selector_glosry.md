  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

column selector

The ~ character. A column col of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) can be addressed in a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") from [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary when multiple database tables are accessed and the name of a column occurs in a number of different database tables or if two columns are compared with one another by a comparison in an [SQL condition](javascript:call_link\('abensql_cond_glosry.htm'\) "Glossary Entry").