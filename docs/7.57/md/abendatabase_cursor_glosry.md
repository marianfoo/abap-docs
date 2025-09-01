  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: database cursor, ABENDATABASE_CURSOR_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

database cursor

Pointer to the result set of a database selection. The database cursor is always assigned to a line of the result set. In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), cursor handling is implicit, except for the statements [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), [FETCH](javascript:call_link\('abapfetch.htm'\)), and [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)). A program can open a maximum of 17 database cursors simultaneously using the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry").