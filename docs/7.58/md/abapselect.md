  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20ABAPSELECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

SELECT [mainquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_mainquery.htm)
  *\[*[UNION*|*INTERSECT*|*EXCEPT ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm)*\]*
  [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) target
  *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm)
  *\[*[abap\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm)*\]*.
  ...
*\[*[ENDSELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendselect.htm)*\]*.

Effect

Use of the [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement SELECT as a standalone statement. This statement reads data from one or more [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), [DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry"), or non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"), uses this data to create a multirow or a single row result set, and assigns this result set to suitable ABAP data objects.

The additions [mainquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_mainquery.htm) define which data is read from the database in which form. The [set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) can be used to combine the result sets of multiple queries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm) apply when specifying clauses. Finally, the following properties are defined:

-   ABAP target objects
    
    In the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause after INTO or APPENDING, the target data objects are specified, to which the result set is assigned by row or by package.
    
-   Restricting the result set
    
    The additions [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) and [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) determine the number of rows to be read.
    
-   ABAP-specific additions
    
    Optional additions [abap\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm) define whether [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is to be bypassed and define the database connection.
    

In the following cases, the statement SELECT opens a loop that must be closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendselect.htm).

-   If an assignment is made to a non-table-like target range, that is, a SELECT statement without the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm), a loop closed by ENDSELECT always occurs, except in the following instances:
    -   The addition [SINGLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_single.htm) for reading a single row is specified after SELECT
    -   The columns of the result set are specified statically in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm), they contain only [aggregate functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), and the additions [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm), [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm), and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm) are not specified.
-   If an assignment is made to a table-like target range, that is, a SELECT statement with the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm), a loop closed by ENDSELECT occurs whenever the addition PACKAGE SIZE is used.

In each loop iteration, the SELECT statement assigns a row or a package of rows to the data objects specified in target. If the last row has been assigned or the result set is empty, SELECT jumps to ENDSELECT. A [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") is opened implicitly to process a SELECT loop, and is closed again when the loop has ended. In a program, a maximum of 17 database cursors can be open simultaneously across the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry"). If more than 17 database cursors are opened, the runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR occurs. If the entire result set is passed to the data object in one step, no loop is opened and the statement ENDSELECT cannot be specified.

A SELECT loop can be exited with one of the following statements:

-   [EXIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) can be used.

The [INTO clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) introduced using INTO*|*APPENDING must be specified as the final clause of the SELECT statement and the optional additions [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm), [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm) must be specified after the INTO clause.

System Fields

The statement SELECT sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

In each value passing to an ABAP data object, the statement SELECT sets sy-subrc to 0. In addition, SELECT sets sy-subrc to 0 before a SELECT loop is exited using ENDSELECT, if at least one row was passed in the loop.

4

The statement SELECT sets sy-subrc to 4 if the result set is empty. This usually means that no data was found on the database. Special rules apply when only [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) [specified as columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause_col_spec.htm) are used in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of the SELECT clause.

6

The statement SELECT sets sy-subrc to 6 if no lock can be set for the addition [FOR UPDATE NOWAIT](abapselect_single.htm#!ABAP_ONE_ADD@1@).

8

The statement SELECT sets sy-subrc to 8 if the addition [FOR UPDATE](abapselect_single.htm#!ABAP_ONE_ADD@1@) is used in result, and the [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") is not fully specified after WHERE.

After each value that is passed to an ABAP data object, the statement SELECT sets sy-dbcnt to the number of rows passed. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If the result set is empty, sy-dbcnt is set to 0. As with sy-subrc, special rules apply when only [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) [specified in columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause_col_spec.htm) are used in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of the SELECT clause.

Hints

-   The query formulated in the SELECT statement is implemented in the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry") for the programming interface of the database system and is passed to this system. The data is read in [packages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) from the database and transported from the database server to the current AS ABAP. On AS ABAP, the data is passed to the data objects of the ABAP program in accordance with the settings specified in the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) and [APPENDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) additions.
-   SELECT loops can be nested. For performance reasons, it may be more efficient to use a join or a [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry").
-   Within a SELECT loop, no statements can be used that produce a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm) or a [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_rollback.htm), causing the corresponding [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") to be closed as a result.
-   If [write accesses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) are performed on the data sources read by a SELECT loop within the loop, the behavior is database-dependent and undefined. Such accesses should therefore be avoided.
-   The statement ENDSELECT closes all the [reader streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_lob_handles.htm) linked to the SELECT loop.
-   The current [isolation level](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_isolation.htm) determines whether a SELECT statement accesses only data released by a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm) or whether it also accesses unreleased data in a different [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry").
-   Outside of classes, an obsolete [short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_obsolete.htm) can be used for which the target area does not need to be specified using INTO or APPENDING. The prerequisites here are as follows: all columns are read with [\*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm), a single DDIC database table or a single [classic view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry") is specified statically after FROM, and a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry") data\_source is declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm) for the corresponding DDIC database table or DDIC view. In this case, the system adds the addition INTO source to the SELECT implicitly.
-   As well as explicit ABAP SQL reads using SELECT loops and [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm), the ABAP SQL interface also opens database cursors implicitly in certain situations, such as when loading [buffered](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_puffering.htm) tables. The runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
-   The [INTO clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) as last clause of the SELECT statement leads to the [strict mode as of ABAP release 7.40, SP08](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm).
-   For compatibility reasons, the INTO clause can also be specified in front of or after the [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) outside the syntax check [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm) from ABAP release 7.50. The additions [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm), [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm) can then also be placed in front of or after the FROM clause.

Example

The example shows two SELECT statements that differ only in the arrangement of their [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm) and [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) clauses. The result of both statements, which access two DDIC database tables via an [INNER JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm), is identical.

DATA cityfrom TYPE spfli-cityfrom VALUE 'NEW YORK'.
SELECT c~carrname, p~connid, p~cityfrom, p~cityto
       FROM scarr AS c
            INNER JOIN spfli AS p
                  ON c~carrid = p~carrid
       WHERE p~cityfrom = @cityfrom
       ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto
       INTO TABLE @FINAL(result1)
       UP TO 10 ROWS.
SELECT FROM scarr AS c
            INNER JOIN spfli AS p
                  ON c~carrid = p~carrid
       FIELDS c~carrname, p~connid, p~cityfrom, p~cityto
       WHERE p~cityfrom = @cityfrom
       ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto
       INTO TABLE @FINAL(result2)
       UP TO 10 ROWS.
ASSERT result2 = result1.
cl\_demo\_output=>display( result1 ).

Continue
[SELECT, mainquery\_clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_mainquery.htm)
[ENDSELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendselect.htm)
![Example](exa.gif "Example") [SELECT, Dynamic Token Specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_sql_abexa.htm)