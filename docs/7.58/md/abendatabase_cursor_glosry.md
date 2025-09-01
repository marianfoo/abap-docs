  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20database%20cursor%2C%20ABENDATABASE_CURSOR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

database cursor

Pointer to the result set of a database selection. The database cursor is always assigned to a line of the result set. In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), cursor handling is implicit, except for the statements [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), [FETCH](javascript:call_link\('abapfetch.htm'\)), and [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)). A program can open a maximum of 17 database cursors simultaneously using the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry").