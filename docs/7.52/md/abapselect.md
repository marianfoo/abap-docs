  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) → 

SELECT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm)

Syntax

SELECT [mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_mainquery.htm)
  *\[*[UNION ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)*\]*
  [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) target
  *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm)
  *\[*[abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm)*\]*.
  ...
*\[*[ENDSELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendselect.htm)*\]*.

Effect

Uses the [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement SELECT as a standalone statement. This statement reads data from one or more [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry"), [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") or [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"), uses this data to create a multiple row or a single row results set, and assigns this results set to suitable ABAP data objects.

The additions [mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_mainquery.htm) define which data can be read from the database in which form. The language element [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) can be used to combine the results sets of multiple queries. In this case, special rules [query\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm) apply for specifying clauses. Finally, the following properties are defined:

-   ABAP target objects
    

In the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause after INTO or APPENDING, the target data objects are specified, to which the results set is assigned by row or by package.

-   How the results set is restricted
    

The results [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm) determine the number of rows to read.

-   ABAP-specific additions
    

Optional additions [abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) define whether [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is bypassed and define the database connection.

In the following cases, the statement SELECT opens a loop that must be closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendselect.htm).

-   If an assignment is made to a non-table-like target range (meaning a SELECT statement without the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)), a loop closed by ENDSELECT always occurs, except in the following instances:
    

-   The addition [SINGLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_single.htm) for reading a single row is specified behind SELECT

-   The columns of the results set are specified statically in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), they contain only [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), and the additions [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) and [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm) are not specified.

-   If an assignment is made to a table-like target range (meaning a SELECT statement with the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)), a loop closed by ENDSELECT occurs whenever the addition PACKAGE SIZE is used.
    

In each loop iteration, the SELECT statement assigns a row or a packet of rows to the data objects specified in target. If the last row has been assigned or the results set is empty, SELECT jumps to ENDSELECT. A [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") is opened implicitly to process a SELECT loop, and is closed again when the loop has ended. In a single program, a maximum of 17 database cursors can be open simultaneously across the [Open SQL interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry"). If more than 17 database cursors are opened, the runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR occurs. A SELECT loop can be exited using the statements in the section [Exiting Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm). If the total results set is passed to the data object in a single step, a loop is not opened and the statement ENDSELECT cannot be specified.

System Fields
The statement SELECT sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

In each value passing to an ABAP data object, the statement SELECT sets sy-subrc to 0. In addition, SELECT sets sy-subrc to 0 before a SELECT loop is exited using ENDSELECT, if at least one row is passed in the loop.

4

The statement SELECT sets sy-subrc to 4 if the results set is empty. This means that no data is found on the database in most cases. Special rules apply when only [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) [specified as columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm) are used in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) of the SELECT clause.

8

The statement SELECT sets sy-subrc to 8 if the addition FOR UPDATE is used in result, and the [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry") is not fully specified after WHERE.

After each value that is passed to an ABAP data object, the statement SELECT sets sy-dbcnt to the number of rows passed. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If the results set is empty, sy-dbcnt is set to 0. As with sy-subrc, special rules apply if only [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) [specified in columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm) are used in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) of the SELECT clause.

Notes

-   The query formulated in the SELECT statement is implemented in the [database interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_interface_glosry.htm "Glossary Entry") for the programming interface of the database system and is passed to this system. The data is read in [packets](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) from the database and is transported from the database server to the current [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"). On the application server, the data is passed to the data objects of the ABAP program in accordance with the settings specified in the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) and [APPENDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) additions.
    
-   SELECT loops can be nested. For performance reasons, it may be more efficient to use a join or a [subquery](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry").
    
-   As well as explicit Open SQL reads using SELECT loops and [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm), the Open SQL interface also opens database cursors implicitly, such as when loading [buffered](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm) tables. The runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
    
-   Within a SELECT loop, no statements that produce a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_rollback.htm) can be used, causing the corresponding [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") to be closed as a result.
    
-   If [change accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) are performed on the data sources read by a SELECT loop within the loop, the behavior is database-specific and undefined. Avoid this kind of access if possible.
    
-   The statement ENDSELECT closes all the [reader streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm) which are associated with the SELECT loop.
    
-   The current [isolation level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_isolation.htm) is responsible for determining whether a SELECT statement accesses only data released by a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm) or whether it also accesses unreleased data in a different [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry").
    
-   The [INTO clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) introduced using INTO*|*APPENDING should be specified as the final clause of the SELECT statement. In this case, the optional additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) must be placed after the INTO clause. For compatibility reasons, the INTO clause can be placed before or after the [FROM clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm). The additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) can then be placed in front of or after the FROM clause. In the [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm) of the syntax check from Release 7.50, the INTO clause must be the last clause.
    
-   The [INTO clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) as last clause of the SELECT statement leads to the [strict mode as of Release 7.40, SP08](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm).
    
-   An obsolete [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_obsolete.htm) can be used (not in classes), for which the target area does not need to be specified using INTO or APPENDING. The preconditions here are as follows: all columns are read with [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), a single database table or a single [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") is specified statically after FROM, and a [table work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") data\_source is declared using the statement [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) for the corresponding database table or classic view. In this case, the system adds the addition INTO source to the SELECT implicitly.
    

Example

The example shows two SELECT statements that differ only in the arrangement of their [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) and [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clauses. The result of the two statements, which access two database tables via an [INNER JOIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm), is identical.

DATA cityfrom TYPE spfli-cityfrom VALUE 'NEW YORK'.
SELECT c~carrname, p~connid, p~cityfrom, p~cityto
       FROM scarr AS c
            INNER JOIN spfli AS p
                  ON c~carrid = p~carrid
       WHERE p~cityfrom = @cityfrom
       ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto
       INTO TABLE @DATA(result1)
       UP TO 10 ROWS.
SELECT FROM scarr AS c
            INNER JOIN spfli AS p
                  ON c~carrid = p~carrid
       FIELDS c~carrname, p~connid, p~cityfrom, p~cityto
       WHERE p~cityfrom = @cityfrom
       ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto
       INTO TABLE @DATA(result2)
       UP TO 10 ROWS.
ASSERT result2 = result1.
cl\_demo\_output=>display( result1 ).

Continue
[SELECT - mainquery\_clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_mainquery.htm)
[ENDSELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendselect.htm)
![Example](exa.gif "Example") [SELECT, Dynamic Token Specification](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_sql_abexa.htm)