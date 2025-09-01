  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20ABAPSELECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

SELECT [mainquery\_clauses](javascript:call_link\('abapselect_mainquery.htm'\))
  *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]*
  [INTO*|*APPENDING](javascript:call_link\('abapinto_clause.htm'\)) target
  *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))
  *\[*[abap\_options](javascript:call_link\('abapselect_additions.htm'\))*\]*.
  ...
*\[*[ENDSELECT](javascript:call_link\('abapendselect.htm'\))*\]*.

Effect

Use of the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement SELECT as a standalone statement. This statement reads data from one or more [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry"), [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry"), or non-abstract [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), uses this data to create a multirow or a single row result set, and assigns this result set to suitable ABAP data objects.

The additions [mainquery\_clauses](javascript:call_link\('abapselect_mainquery.htm'\)) define which data is read from the database in which form. The [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple queries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply when specifying clauses. Finally, the following properties are defined:

-   ABAP target objects
    
    In the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause after INTO or APPENDING, the target data objects are specified, to which the result set is assigned by row or by package.
    
-   Restricting the result set
    
    The additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) and [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) determine the number of rows to be read.
    
-   ABAP-specific additions
    
    Optional additions [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) define whether [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is to be bypassed and define the database connection.
    

In the following cases, the statement SELECT opens a loop that must be closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)).

-   If an assignment is made to a non-table-like target range, that is, a SELECT statement without the addition [INTO*|*APPENDING ... TABLE](javascript:call_link\('abapinto_clause.htm'\)), a loop closed by ENDSELECT always occurs, except in the following instances:
    -   The addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) for reading a single row is specified after SELECT
    -   The columns of the result set are specified statically in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), they contain only [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry"), and the additions [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), [UNION](javascript:call_link\('abapunion_clause.htm'\)), [INTERSECT](javascript:call_link\('abapunion_clause.htm'\)), and [EXCEPT](javascript:call_link\('abapunion_clause.htm'\)) are not specified.
-   If an assignment is made to a table-like target range, that is, a SELECT statement with the addition [INTO*|*APPENDING ... TABLE](javascript:call_link\('abapinto_clause.htm'\)), a loop closed by ENDSELECT occurs whenever the addition PACKAGE SIZE is used.

In each loop iteration, the SELECT statement assigns a row or a package of rows to the data objects specified in target. If the last row has been assigned or the result set is empty, SELECT jumps to ENDSELECT. A [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") is opened implicitly to process a SELECT loop, and is closed again when the loop has ended. In a program, a maximum of 17 database cursors can be open simultaneously across the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry"). If more than 17 database cursors are opened, the runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR occurs. If the entire result set is passed to the data object in one step, no loop is opened and the statement ENDSELECT cannot be specified.

A SELECT loop can be exited with one of the following statements:

-   [EXIT](javascript:call_link\('abapexit_loop.htm'\)) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](javascript:call_link\('abenleave_processing_blocks.htm'\))
-   A statement for [existing the current program](javascript:call_link\('abenabap_leave_program.htm'\))

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](javascript:call_link\('abapcontinue.htm'\)) and [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) can be used.

The [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) introduced using INTO*|*APPENDING must be specified as the final clause of the SELECT statement and the optional additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)), [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)), and [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) must be specified after the INTO clause.

System Fields

The statement SELECT sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

In each value passing to an ABAP data object, the statement SELECT sets sy-subrc to 0. In addition, SELECT sets sy-subrc to 0 before a SELECT loop is exited using ENDSELECT, if at least one row was passed in the loop.

4

The statement SELECT sets sy-subrc to 4 if the result set is empty. This usually means that no data was found on the database. Special rules apply when only [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) [specified as columns](javascript:call_link\('abapselect_clause_col_spec.htm'\)) are used in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the SELECT clause.

6

The statement SELECT sets sy-subrc to 6 if no lock can be set for the addition [FOR UPDATE NOWAIT](abapselect_single.htm#!ABAP_ONE_ADD@1@).

8

The statement SELECT sets sy-subrc to 8 if the addition [FOR UPDATE](abapselect_single.htm#!ABAP_ONE_ADD@1@) is used in result, and the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") is not fully specified after WHERE.

After each value that is passed to an ABAP data object, the statement SELECT sets sy-dbcnt to the number of rows passed. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If the result set is empty, sy-dbcnt is set to 0. As with sy-subrc, special rules apply when only [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) [specified in columns](javascript:call_link\('abapselect_clause_col_spec.htm'\)) are used in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the SELECT clause.

Hints

-   The query formulated in the SELECT statement is implemented in the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") for the programming interface of the database system and is passed to this system. The data is read in [packages](javascript:call_link\('abenabap_sql_oview.htm'\)) from the database and transported from the database server to the current AS ABAP. On AS ABAP, the data is passed to the data objects of the ABAP program in accordance with the settings specified in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) and [APPENDING](javascript:call_link\('abapinto_clause.htm'\)) additions.
-   SELECT loops can be nested. For performance reasons, it may be more efficient to use a join or a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").
-   Within a SELECT loop, no statements can be used that produce a [database commit](javascript:call_link\('abendb_commit.htm'\)) or a [database rollback](javascript:call_link\('abendb_rollback.htm'\)), causing the corresponding [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") to be closed as a result.
-   If [write accesses](javascript:call_link\('abenabap_sql_writing.htm'\)) are performed on the data sources read by a SELECT loop within the loop, the behavior is database-dependent and undefined. Such accesses should therefore be avoided.
-   The statement ENDSELECT closes all the [reader streams](javascript:call_link\('abenselect_into_lob_handles.htm'\)) linked to the SELECT loop.
-   The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) determines whether a SELECT statement accesses only data released by a [database commit](javascript:call_link\('abendb_commit.htm'\)) or whether it also accesses unreleased data in a different [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").
-   Outside of classes, an obsolete [short form](javascript:call_link\('abapselect_obsolete.htm'\)) can be used for which the target area does not need to be specified using INTO or APPENDING. The prerequisites here are as follows: all columns are read with [\*](javascript:call_link\('abapselect_list.htm'\)), a single DDIC database table or a single [classic view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") is specified statically after FROM, and a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") data\_source is declared using the statement [TABLES](javascript:call_link\('abaptables.htm'\)) for the corresponding DDIC database table or DDIC view. In this case, the system adds the addition INTO source to the SELECT implicitly.
-   As well as explicit ABAP SQL reads using SELECT loops and [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the ABAP SQL interface also opens database cursors implicitly in certain situations, such as when loading [buffered](javascript:call_link\('abensap_puffering.htm'\)) tables. The runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
-   The [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) as last clause of the SELECT statement leads to the [strict mode as of ABAP release 7.40, SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)).
-   For compatibility reasons, the INTO clause can also be specified in front of or after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) outside the syntax check [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)) from ABAP release 7.50. The additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)), [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)), and [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) can then also be placed in front of or after the FROM clause.

Example

The example shows two SELECT statements that differ only in the arrangement of their [SELECT](javascript:call_link\('abapselect_clause.htm'\)) and [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clauses. The result of both statements, which access two DDIC database tables via an [INNER JOIN](javascript:call_link\('abapselect_join.htm'\)), is identical.

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
[SELECT, mainquery\_clauses](javascript:call_link\('abapselect_mainquery.htm'\))
[ENDSELECT](javascript:call_link\('abapendselect.htm'\))
![Example](exa.gif "Example") [SELECT, Dynamic Token Specification](javascript:call_link\('abendynamic_sql_abexa.htm'\))