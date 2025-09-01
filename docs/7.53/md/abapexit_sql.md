  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Cursor Processing in Native SQL](javascript:call_link\('abenexec_sql_cursor_implicit.htm'\)) → 

EXEC SQL - EXIT FROM SQL

[Quick Reference](javascript:call_link\('abapexit_from_sql_shortref.htm'\))

Obsolete Syntax

EXIT FROM SQL.

Effect

This statement, forbidden in classes, is only executed during processing of subroutines called using the obsolete addition [PERFORMING](javascript:call_link\('abapexec_implicit.htm'\)) of the statement [EXEC SQL](javascript:call_link\('abapexec.htm'\)). Otherwise it is ignored.

The statement terminates [implicit cursor processing](javascript:call_link\('abapexec_implicit.htm'\)) after the current subroutine has finished. Processing of the called ABAP program is resumed after ENDEXEC, where sy-dbcnt contains the number of rows read up until that point and sy-subrc is set to the value 4. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.