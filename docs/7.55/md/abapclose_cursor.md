  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) → 

CLOSE CURSOR

[Short Reference](javascript:call_link\('abapclose_cursor_shortref.htm'\))

Syntax

CLOSE CURSOR @dbcur.

Effect

This [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement CLOSE CURSOR closes the [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") and initializes the cursor variable dbcur, with which the database cursor is linked. The cursor variable dbcur is a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) that must be declared using the special predefined data type cursor and that was opened using the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) or was assigned an open cursor.

Hints

-   Since only a limited number of 17 database cursors can be open simultaneously in ABAP SQL, all database cursors no longer required should be closed.

-   Initializing a cursor variable using the CLEAR statement is not enough to close a database cursor. If the value of the cursor variable in the program is known, the database cursor can be further processed using [FETCH](javascript:call_link\('abapfetch.htm'\)).

-   Once a database cursor has been closed, it can no longer be accessed. Other cursor variables that were associated with the database cursor are not initialized, but become invalid and accessing them would raise a catchable exception.

-   The name of the host variable dbcur should be prefixed with the escape character @. If the associated statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) is checked in accordance with the [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)) from Release 7.50, the escape character @ must be specified.

Example

Closes a previously opened and used database cursor.

DATA wa TYPE scarr.
OPEN CURSOR WITH HOLD @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
WHILE sy-subrc = 0.
  FETCH NEXT CURSOR @dbcur INTO @wa.
ENDWHILE.
CLOSE CURSOR @dbcur.