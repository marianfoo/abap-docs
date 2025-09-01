  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, SINGLE, ABAPSELECT_SINGLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

SELECT, SINGLE

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax Forms

1\. ... SINGLE *\[*FOR UPDATE*\]* ...

2\. ... SINGLE ... *\[*FOR UPDATE NOWAIT*\]*.

Addition:

[*\[*... FOR UPDATE ... *|* ... FOR UPDATE NOWAIT.*\]*](#!ABAP_ONE_ADD@1@)

Effect

With the ABAP-specific addition SINGLE, the result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") contains a single row set. The addition is possible with a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement or with the [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of a standalone [WITH](javascript:call_link\('abapwith.htm'\)) statement. If SINGLE is specified, a SELECT statement does not open a loop that must be closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)) or [ENDWITH](javascript:call_link\('abapendwith.htm'\)) when reading into a non-table-like [target area](javascript:call_link\('abapinto_clause.htm'\)). No internal tables can be specified as a [target area](javascript:call_link\('abapinto_clause.htm'\)).

-   If the selection of the SELECT statement covers exactly one row, this row is included in the result set.
-   If the selection of the SELECT statement covers more than one row, one of these rows is included in the result set.

The following restrictions apply:

-   The additions [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)), [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)), and [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) cannot be used together with SINGLE.
-   The addition SINGLE cannot be used in the [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) or in [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").

Hints

-   The addition SINGLE is designed to pass exactly one row to a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") as a work area without opening a loop that must be closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)) or [ENDWITH](javascript:call_link\('abapendwith.htm'\)).
    
    -   Usually, the row must be identified exactly, and it must be specified uniquely in the [WHERE condition](javascript:call_link\('abapwhere.htm'\)). In a [data source](javascript:call_link\('abapselect_data_source.htm'\)), this is usually done by specifying comparison values for the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry"). The [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") produces a warning if no exact row is determined.
    -   If a row is not uniquely determined, the addition SINGLE can also be used to detect whether a corresponding row exists. In this case, the warning from the extended program check must be hidden using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry"). To avoid unnecessary transports of data, a SELECT list can also be used that contains nothing but a single constant (see the [executable example](javascript:call_link\('abensql_expr_literal_abexa.htm'\))).
    
    A SELECT statement with the addition SINGLE is generally faster for completely specified rows than for incompletely specified rows.
    
-   The result set of SELECT statements with the addition SINGLE matches the set from the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) without using the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)). The difference between the statements is:
    
    -   If the addition SINGLE is used, ABAP SQL handles the result set as a single row. The target area is a structure or a list of elementary fields, but the statement [ENDSELECT](javascript:call_link\('abapendselect.htm'\)) or [ENDWITH](javascript:call_link\('abapendwith.htm'\)) is not necessary. The row cannot be read into an internal table. Not all additions of the SELECT statement, however, can be used.
    -   If the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) is used, ABAP SQL handles the result set as tabular. The statement [ENDSELECT](javascript:call_link\('abapendselect.htm'\)) or [ENDWITH](javascript:call_link\('abapendwith.htm'\)) must be specified or the row must be read into an internal table. The addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) can, however, be specified.
    
    A SELECT statement with the addition SINGLE is optimized for reading a single row. This means that a SELECT statement with the addition SINGLE is generally slightly faster than with the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)), since no loop has to be opened. In practice, however, this difference can usually be ignored. The following is recommended:
    
    -   Use of the addition SINGLE to read exactly one completely specified row.
    -   Use of the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) to read a maximum of one row from a set of selected rows.
-   The addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) cannot be specified together with SINGLE, which means that it is not possible to define which row is read from a non-unique selection. Instead, the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can be specified with the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) to define which row is read from a non-unique selection.
-   If SINGLE is specified and [LOB handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) are created in the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)), all primary key fields joined by AND in logical expressions must be checked for equality in the [WHERE condition](javascript:call_link\('abapwhere.htm'\)). If this is not possible, the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can be used instead of SINGLE.
-   If the addition SINGLE is used and [LOB handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) are created, all [reader streams](javascript:call_link\('abenselect_into_lob_handles.htm'\)) that are created when the SELECT statement is executed as well as [locators](javascript:call_link\('abenselect_into_lob_handles.htm'\)) continue to exist until they are closed, either explicitly with one of their methods, or implicitly at the end of the current database LUW. During this time, the associated database operation is not completed. It is recommended that all LOB handles are closed explicitly as soon as possible.

Example

Reads the row with the information about Lufthansa flight 0400 from the DDIC database table SPFLI.

SELECT SINGLE \*
       FROM spfli
       WHERE carrid = 'LH' AND
             connid = '0400'
       INTO @FINAL(wa).

Example

The program DEMO\_SELECT\_SINGLE\_VS\_UP\_TO compares the performance of SELECT statements with the addition SINGLE with equivalent statements with the addition [UP TO 1 ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)).

Addition   

*\[*... FOR UPDATE ... *|* ... FOR UPDATE NOWAIT.*\]*

Effect

When reading an individual row using SINGLE, the addition FOR UPDATE sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") as an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") for this row on the database. With this addition, the SELECT statement is only executed if, in the [WHERE condition](javascript:call_link\('abapwhere.htm'\)), all primary key fields in logical expression that are joined using AND are checked for equivalence. Otherwise the result set is empty and sy-subrc is set to 8.

The addition FOR UPDATE can only be used when accessing data sources where writes are allowed. This addition cannot be used when accessing views where only reads are allowed.

The addition FOR UPDATE NOWAIT works in the same way as the addition FOR UPDATE and must be specified at the end of a SELECT SINGLE statement. Using the addition NOWAIT, an attempt is made to set the lock without waiting. If no lock can be set, sy-subrc is set to 6. In this case, no data is read.

Hints

-   If set incorrectly, the lock can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").
-   If the addition FOR UPDATE is used, a standalone [SELECT](javascript:call_link\('abapselect.htm'\)) statement bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Examples

In the following example, the [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") set by the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)) is released using a [database commit](javascript:call_link\('abendb_commit.htm'\)). Then, an exclusive lock is already set by the SELECT statement and not only by the [UPDATE](javascript:call_link\('abapupdate.htm'\)) statement.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
COMMIT CONNECTION default.
...
SELECT SINGLE  id, num1
       FROM demo\_expressions
       WHERE id = 'X'
       INTO @FINAL(wa)
       FOR UPDATE NOWAIT.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS id, num1
       WHERE id = 'X'
       INTO @FINAL(wa2)
       FOR UPDATE NOWAIT.
...
UPDATE demo\_expressions SET num1 = 111 WHERE id = 'X'.