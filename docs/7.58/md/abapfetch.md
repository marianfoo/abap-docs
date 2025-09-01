  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FETCH%2C%20ABAPFETCH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FETCH

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfetch_shortref.htm)

Syntax

FETCH NEXT CURSOR dbcur [INTO*|*APPENDING ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm).

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement FETCH takes the rows requested by the INTO or APPENDING addition from the result set of the [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") linked with the cursor variable dbcur from the current cursor position and assigns them to the data objects specified there.

The cursor variable dbcur must be a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) declared with the special predefined data type cursor, which was opened with the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) or that was assigned an open cursor. Otherwise, a catchable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

The syntax and meaning of the addition INTO or APPENDING are the same as the identically named [additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) of the SELECT statement, with the exception that no inline declarations can be made there without the addition [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_into_target.htm) and no [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_lob_handles.htm) can be created.

If non-table-like data objects are specified after INTO, one row is extracted. If an internal table is specified after INTO or APPENDING, either all rows are extracted or as many as specified in the addition [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm).

The statement FETCH moves the position of the database cursor that is linked with dbcur by the number of extracted rows to the next row to be extracted. If the last row of the result set was extracted in a FETCH statement, each subsequent FETCH statement in which dbcur is linked with the same database cursor sets sy-subrc to 4, without affecting the data objects specified after INTO or APPENDING.

System Fields

The statement FETCH sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

At least one row was extracted from the result set.

4

No row was extracted.

After every row extraction, the statement FETCH sets sy-dbcnt to the number of rows extracted so far from the relevant result set. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If no row can be extracted, sy-dbcnt is set to 0.

Hints

-   Consecutive FETCH statements that access the same result set can have the different additions INTO or APPENDING. The specification of work areas can be combined with any internal table specifications and various combinations of PACKAGE SIZE can be specified as well. In doing so, the addition CORRESPONDING FIELDS must either not be listed at all in any of the FETCH statements involved, or has to be listed in every statement. Moreover, the data types of all work areas wa involved or the row types of the internal tables itab must be identical. The specifications of a parenthesized list of data objects after INTO cannot be combined with the specification of work areas or internal tables, but every involved FETCH statement must contain a list of this type.
-   It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the result set or not. For this reason, it is always better to use the [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclose_cursor.htm) statement explicitly.
-   If a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is defined as a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) for a DDIC database table or DDIC database view specified as a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of the SELECT statement of [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm), the statement FETCH accesses the CDS view and not the DDIC database table or the DDIC database view.
-   The specifications of host variables without the escape character @ is [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.
-   If a statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) is checked in accordance with the rules for [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm) from ABAP release 7.50, this also applies to every statement FETCH that accesses the open database cursor. Conversely, a strict syntax check mode in the statement FETCH from [ABAP release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_754.htm) triggered by the use of NEW in the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause also applies the strict mode to the associated statement OPEN CURSOR. A violation of the rules specified by FETCH in OPEN CURSOR raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.

Example

Reading of data from the DDIC database table SPFLI in packets of varying size using two parallel cursors. The packet size is determined by the first cursor using the [aggregation function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") count( \* ) and using the second cursor for access. Variable control of the addition PACKAGE SIZE is not possible within a single SELECT statement.

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