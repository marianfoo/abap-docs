  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm) → 

CLOSE CURSOR

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclose_cursor_shortref.htm)

Syntax

CLOSE CURSOR @dbcur.

Effect

This [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement CLOSE CURSOR closes the [database cursor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") and initializes the cursor variable dbcur, with which the database cursor is linked. The cursor variable dbcur is a [host variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) that must be declared using the special predefined data type cursor and that was opened using the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm) or was assigned an open cursor.

Hints

-   Since only a limited number of 17 database cursors can be open simultaneously in ABAP SQL, all database cursors no longer required should be closed.
-   Initializing a cursor variable using the CLEAR statement is not enough to close a database cursor. If the value of the cursor variable in the program is known, the database cursor can be further processed using [FETCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm).
-   Once a database cursor has been closed, it can no longer be accessed. Other cursor variables that were linked with the database cursor are not initialized but become invalid and accessing them would raise a catchable exception.
-   The name of the host variable dbcur should be prefixed with the escape character @. If the associated statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm) is checked in accordance with the [strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm) from Release 7.50, the escape character @ must be specified.

Example

Closing of a previously opened and used database cursor.

DATA wa TYPE scarr.
OPEN CURSOR WITH HOLD @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
WHILE sy-subrc = 0.
  FETCH NEXT CURSOR @dbcur INTO @wa.
ENDWHILE.
CLOSE CURSOR @dbcur.