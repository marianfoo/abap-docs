  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL](javascript:call_link\('abapexec.htm'\)) → 

EXEC SQL - OPEN, FETCH, CLOSE

In embedded [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), similar statements to those in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") can be specified to read data using a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").

Syntax

EXEC SQL.
  OPEN dbcur FOR SELECT ...
ENDEXEC.

Effect

Opens a database cursor dbcur. For dbcur, a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like [host variable](javascript:call_link\('abapexec_host.htm'\)) can be specified.

Note

The number of database cursor open simultaneously is restricted by platform. Any attempts to open too many database cursors raise an exception of the class CX\_SY\_NATIVE\_SQL\_ERROR.

Syntax

EXEC SQL.
  FETCH NEXT dbcur INTO ...
ENDEXEC.

Effect

Uses an open database cursor dbcur to read data to the [host variables](javascript:call_link\('abapexec_host.htm'\)) specified after [INTO](javascript:call_link\('abapexec_into.htm'\)).

Syntax

EXEC SQL.
  CLOSE dbcur
ENDEXEC.

Effect

Closes an opened database cursor dbcur.

If no row can be read using FETCH, sy-subrc is set to 4 by ENDEXEC. After a FETCH statement, the system field sy-dbcnt is set to the number of rows read up to that point using the cursor in question. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1.

Note

It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the results set or not. For this reason, it is advisable to use the statement CLOSE dbcur explicitly.

Example

Reads multiple rows from the database table SPFLI using cursor handling and host variables in static Native SQL. If rows are found, sy-subrc is set to 0 and sy-dbcnt is increased by one for each row read.

DATA: carrid TYPE spfli-carrid VALUE 'LH',
      connid   TYPE spfli-connid,
      cityfrom TYPE spfli-cityfrom,
      cityto   TYPE spfli-cityto.
cl\_demo\_input=>request( CHANGING field = carrid ).
EXEC SQL.
  OPEN dbcur FOR
    SELECT connid, cityfrom, cityto
           FROM spfli
           WHERE mandt  = :sy-mandt AND
                 carrid = :carrid
ENDEXEC.
DO.
  EXEC SQL.
    FETCH NEXT dbcur INTO :connid, :cityfrom, :cityto
  ENDEXEC.
  IF sy-subrc <> 0.
    EXIT.
  ELSE.
    cl\_demo\_output=>write(
      |{ carrid }, { connid }, { cityfrom }, { cityto }| ).
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).
EXEC SQL.
  CLOSE dbcur
ENDEXEC.