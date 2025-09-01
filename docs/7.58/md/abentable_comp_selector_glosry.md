  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20column%20selector%2C%20ABENTABLE_COMP_SELECTOR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

column selector

Character ~. A column col of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) can be addressed in a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") using name~col, where name is the name of the entity in which the column is defined. This type of addressing is necessary if, when multiple database tables are accessed, the name of a column occurs in a number of different database tables, when a comparison of a [SQL condition](javascript:call_link\('abensql_cond_glosry.htm'\) "Glossary Entry") compares two columns.