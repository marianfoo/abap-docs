  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Native SQL](javascript:call_link\('abennative_sql_obsolete.htm'\)) →  [Obsolete Cursor Processing in Native SQL](javascript:call_link\('abenexec_sql_cursor_implicit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20EXIT%20FROM%20SQL%2C%20ABAPEXIT_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXEC SQL - EXIT FROM SQL

[Short Reference](javascript:call_link\('abapexit_from_sql_shortref.htm'\))

Obsolete Syntax

EXIT FROM SQL.

Effect

This statement, which is forbidden in classes, is only executed during the processing of subroutines called using the obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)) of the statement [EXEC SQL](javascript:call_link\('abapexec.htm'\)). Otherwise it is ignored.

The statement terminates [implicit cursor processing](javascript:call_link\('abapexec_implicit.htm'\)) after the current subroutine has ended. Processing of the called ABAP program is resumed after ENDEXEC, where sy-dbcnt contains the number of rows read so far and sy-subrc is set to the value 4. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.