  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) → 

FETCH

[Quick Reference](javascript:call_link\('abapfetch_shortref.htm'\))

Syntax

FETCH NEXT CURSOR dbcur [INTO*|*APPENDING ...](javascript:call_link\('abapinto_clause.htm'\)).

Effect

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement FETCH extracts the requested rows (using the addition INTO or APPENDING) from the results set of the [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") (associated with the cursor variable dbcur) from the current cursor position and assigns these rows to the data objects specified in the results set.

The cursor variable dbcur must be a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) declared by the special predefined data type cursor, which was opened with the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), or to which an opened cursor was assigned. Otherwise, a handleable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

The syntax and meaning of the addition INTO or APPENDING are the same as the identically named [additions](javascript:call_link\('abapinto_clause.htm'\)) of the SELECT statement, with the exception that no inline declarations can be made there without the addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)) and no [LOB handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) can be created.

If non-table-like data objects are specified after INTO, one row is extracted. If an internal table is specified after INTO or APPENDING, either all rows are extracted, or as many as specified in the addition [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)).

The statement FETCH moves the position of the database cursor (which is associated with dbcur) by the amount of extracted rows to the next row to be extracted. If the last row of the results set was extracted in a FETCH statement, each subsequent FETCH statement in which
dbcur is associated with the same database cursor sets sy-subrc to 4, without affecting the data objects specified after INTO or APPENDING.

System Fields
The statement FETCH sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

At least one row was extracted from the results set.

4

No row was extracted.

After every row extraction, the statement FETCH sets sy-dbcnt to the amount of rows extracted so far from the relevant results set. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If no row can be extracted, sy-dbcnt is set to 0.

Notes

-   Consecutive FETCH statements that access the same results set can have the different additions INTO or APPENDING: If specified, work areas can be combined with any internal tables specified and various combinations of PACKAGE SIZE can be specified too. In doing so, the addition CORRESPONDING FIELDS is either not listed at all in any of the FETCH statements involved, or has to be specified in every statement. Moreover, the data types of all work areas wa involved or the row types of the internal tables itab must be identical. A parenthesized list of data objects after INTO cannot be specified together with work areas or internal tables, but every involved FETCH statement must contain a list of this type.
    
-   It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the results set or not. For this reason, it is always better to use the [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)) statement explicitly.
    
-   If a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for a database table or database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the SELECT statement of [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the statement FETCH accesses the CDS view and not the database table or the database view.
    
-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
    
-   If a statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) is checked in accordance with the rules for [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)) from Release 7.50, this also applies to every statement FETCH that accesses the open database cursor. Conversely, a strict syntax check mode in the statement FETCH from [Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)) triggered by the use of NEW in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause also applies the strict mode to the associated statement OPEN CURSOR. If the rules specified by FETCH in OPEN CURSOR are broken, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.
    

Example

Reading of data from the database table SPFLI in packets of varying size using two parallel cursors. The packet size is determined by the first cursor using the [aggregation function](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry")count( \* ) and using the second cursor for access. Variable control of the addition PACKAGE SIZE is not possible within a single SELECT statement.

OPEN CURSOR @DATA(dbcur1) FOR
  SELECT carrid, COUNT(\*) AS count
         FROM spfli
         GROUP BY carrid
         ORDER BY carrid.
OPEN CURSOR @DATA(dbcur2) FOR
  SELECT \*
         FROM spfli
         ORDER BY carrid.
DATA: BEGIN OF counter,
        carrid TYPE spfli-carrid,
        count  TYPE i,
      END OF counter,
      spfli\_tab TYPE TABLE OF spfli.
DO.
  FETCH NEXT CURSOR @dbcur1 INTO @counter.
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  cl\_demo\_output=>next\_section( |{ counter-carrid
                              }, { counter-count }| ).
  FETCH NEXT CURSOR @dbcur2
    INTO TABLE @spfli\_tab PACKAGE SIZE @counter-count.
  cl\_demo\_output=>write( spfli\_tab ).
ENDDO.
CLOSE CURSOR: @dbcur1,
              @dbcur2.
cl\_demo\_output=>display( ).