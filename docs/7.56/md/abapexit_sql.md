  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_obsolete.htm) →  [Obsolete Cursor Processing in Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexec_sql_cursor_implicit.htm) → 

EXEC SQL - EXIT FROM SQL

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_from_sql_shortref.htm)

Obsolete Syntax

EXIT FROM SQL.

Effect

This statement, which is forbidden in classes, is only executed during the processing of subroutines called using the obsolete addition [PERFORMING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_implicit.htm) of the statement [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm). Otherwise it is ignored.

The statement terminates [implicit cursor processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_implicit.htm) after the current subroutine has ended. Processing of the called ABAP program is resumed after ENDEXEC, where sy-dbcnt contains the number of rows read so far and sy-subrc is set to the value 4. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.