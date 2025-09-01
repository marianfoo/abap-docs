  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) → 

OPEN CURSOR

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor_shortref.htm)

Syntax

OPEN CURSOR *\[*WITH HOLD*\]* @dbcur*|*@DATA(dbcur) FOR
  *\[*[WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm)
    +cte1 AS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_subquery.htm) )*\[*,
    +cte2 AS ( SELECT [subquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_subquery.htm) )
    ...*\]**\]*
  SELECT [mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor_mainquery.htm)
  *\[*[UNION ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)*\]*
  *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm)
  *\[*[abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm)*\]*.

Addition:

[... WITH HOLD](#!ABAP_ONE_ADD@1@)

Effect

The [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement OPEN CURSOR opens a [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") for the result set of the [main query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmainquery_glosry.htm "Glossary Entry") defined after FOR and links a cursor variable dbcur with this database cursor. The results set of the main query can be read with the statement [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm).

The main query is specified after FOR as follows:

-   The main query is specified using language element SELECT, and its clauses and additions [mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor_mainquery.htm) define the result set.
    
-   The language element [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) can be used to combine the result sets of multiple queries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm) apply for specifying clauses.
    
-   Finally, the optional additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) can be specified.
    
-   Optional [common table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") can be defined in the main query by using the language element WITH. When defining and using common table expressions, the same applies as when using WITH to introduce a [standalone statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm).
    

The following can be specified for the cursor:

-   A [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) dbcur declared using a specific predefined data type: [cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm). The name of this host variable must be prefixed with the escape character @. A database cursor dbcur that has already been opened cannot be opened again.
    
-   An [inline declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of a corresponding [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) dbcur. The [declaration operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) must be prefixed with the escape character @.
    

A line of the result set is always assigned to an opened database cursor as a cursor position. After the statement OPEN CURSOR, the database cursor is positioned in front of the first line of the results set.

In a single program, a maximum of 17 database cursors can be open simultaneously across the [Open SQL interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry"). If more than 17 database cursors are opened, the runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR occurs. An open database cursor can be closed using the statement [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclose_cursor.htm). Here, any open database cursors are closed by [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollbacks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"), if these occur after the first use of the cursor in a [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm) statement.

If a cursor variable dbcur of an open database cursor is assigned to another cursor variable or passed as a parameter, the latter is associated with the same database cursor at the same position. A cursor variable of an open database cursor can also be passed to [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") that have been called externally, to enable the database cursor to be accessed from there.

Notes

-   It is not recommended that cursor variables are assigned to each other and they should be set only using the statements OPEN CURSOR and CLOSE CURSOR.
    
-   If [write accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) are made on a database table for which a database cursor is open, the results set is database-specific and undefined. Avoid this kind of parallel access if possible.
    
-   As well as explicit Open SQL reads using OPEN CURSOR and [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) loops, the Open SQL interface also opens database cursors implicitly, such as when loading [buffered](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm) tables. The runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
    
-   If a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") is defined as a [replacement object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) for a database table or database view specified as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of the SELECT statement of OPEN CURSOR, the statement [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm) accesses the CDS view and not the database table or the database view.
    
-   Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05. The use of an inline declaration for dbcur activates the strict mode with [release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_751.htm) and higher.
    

Example

Opens two cursors for the database table SPFLI. For more information on how to use this function, see the example for [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm).

OPEN CURSOR @DATA(dbcur1) FOR
  SELECT carrid, COUNT(\*) AS count
         FROM spfli
         GROUP BY carrid
         ORDER BY carrid.
OPEN CURSOR @DATA(dbcur2) FOR
  SELECT \*
         FROM spfli
         ORDER BY carrid.

Addition

... WITH HOLD

Effect

If the addition WITH HOLD is specified, the database cursor is not closed by a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") executed using [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry").

The addition WITH HOLD can be used only in reads performed on the standard database. It cannot be specified together with the addition [CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm).

Notes

-   A Native SQL database commit closes the database cursor only after the cursor is used in a [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm) statement. A Native SQL database commit between the statement OPEN CURSOR and the first FETCH statement does not close the cursor.
    
-   The addition WITH HOLD is ignored by the following:
    

-   Implicit [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry")

-   Commits made by the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm)

-   Any rollbacks

These always close the database cursor.

-   A Native SQL database commit can be made explicitly using the statement [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm).
    

Example

The addition WITH HOLD stops the database cursor from being closed using an explicit database commit and the statement [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit_rollback_connection.htm) and hence stops an exception from being raised in the second [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm) statement. An exception is, however, raised after the statement COMMIT WORK.

DATA wa TYPE scarr.
OPEN CURSOR WITH HOLD @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
FETCH NEXT CURSOR @dbcur INTO @wa.
COMMIT CONNECTION default.
FETCH NEXT CURSOR @dbcur INTO @wa.
CLOSE CURSOR @dbcur.
TRY.
    OPEN CURSOR WITH HOLD @dbcur FOR
      SELECT \*
             FROM scarr.
    COMMIT WORK.
    FETCH NEXT CURSOR @dbcur INTO @wa.
    CLOSE CURSOR @dbcur.
  CATCH cx\_sy\_open\_sql\_db.
    ...
ENDTRY.

Continue
[OPEN CURSOR - mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor_mainquery.htm)
[FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm)
[CLOSE CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclose_cursor.htm)
![Example](exa.gif "Example") [Reading Data Through the Cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_cursor_abexa.htm)