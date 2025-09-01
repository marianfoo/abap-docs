  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Native SQL](javascript:call_link\('abennative_sql_obsolete.htm'\)) →  [Obsolete Cursor Processing in Native SQL](javascript:call_link\('abenexec_sql_cursor_implicit.htm'\)) → 

EXEC SQL - PERFORMING

[Short Reference](javascript:call_link\('abapexec_sql_shortref.htm'\))

Obsolete Syntax

EXEC SQL PERFORMING subr.
  SELECT ... INTO :wa1 :wa2 ...
ENDEXEC.

Effect

If the addition PERFORMING (forbidden in classes) is specified after [EXEC SQL](javascript:call_link\('abapexec.htm'\)), the [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") interface performs implicit cursor processing.

Only a SELECT statement can be specified as an embedded Native SQL statement. The Native SQL interface opens a cursor for the SELECT statement and reads the appropriate data, row by row. The subr subroutine is called each time a row is read successfully. The subr subroutine must be defined in the same ABAP program and must not have a parameter interface.

If the [host variables](javascript:call_link\('abapexec_host.htm'\)) specified in the SELECT statement after INTO are global data objects of the ABAP program, they can be evaluated in the subroutine. In the subroutine, sy-dbcnt gets the number of rows read so far and sy-subrc is set to the value 0. After the ENDEXEC statement, sy-dbcnt contains the total number of rows read so far and sy-subrc is set to 4 since no more rows could be read using the implicit cursor. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Hints

-   Implicit cursor processing using the PERFORMING addition is obsolete and forbidden in classes, since methods of global classes do not have access to the global data and the subroutines of the calling ABAP program. Use [explicit cursor processing](javascript:call_link\('abapexec_cursor.htm'\)) instead.

-   Implicit cursor processing can be exited using the (obsolete) statement [EXIT FROM SQL](javascript:call_link\('abapexit_sql.htm'\)).
    

Bad Example

Reads multiple rows from the DDIC database table SCARR and calls the subroutine evaluate for each row read.

DATA wa TYPE spfli-carrid.
EXEC SQL PERFORMING evaluate.
  SELECT carrid FROM spfli INTO :wa WHERE mandt = :sy-mandt
ENDEXEC.
cl\_demo\_output=>display( ).
FORM evaluate.
  cl\_demo\_output=>write( |{ wa } | ).
ENDFORM.

Good Example

Explicit cursor processing.

DATA wa TYPE spfli-carrid.
EXEC SQL.
  OPEN CUR FOR
  SELECT carrid FROM spfli WHERE mandt = :sy-mandt
ENDEXEC.
DO.
  EXEC SQL.
    FETCH NEXT CUR INTO :wa
  ENDEXEC.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ wa } | ).
ENDDO.
cl\_demo\_output=>display( ).