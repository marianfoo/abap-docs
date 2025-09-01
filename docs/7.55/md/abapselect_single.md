  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) → 

SELECT, SINGLE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

Syntax

... SINGLE *\[*FOR UPDATE*\]* ...

Addition:

[... FOR UPDATE](#!ABAP_ONE_ADD@1@)

Effect

The ABAP-specific addition SINGLE makes the result set of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") a single row set. The addition is possible with a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement or with the [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") of a standalone [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement. If SINGLE is specified, these statements does not open a loop closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendwith.htm) during imports to a non-table-like [target area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm), and no internal tables can be specified as a [target area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

-   If the selection of the SELECT statement covers exactly one row, this row is included in the result set.

-   If the selection of the SELECT statement covers more than one row, one of these rows is included in the result set at random.

The following restrictions apply:

-   The additions [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm), [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm), and [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) cannot be used together with SINGLE.

-   The addition SINGLE cannot be used in the [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") of statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm) or in [subqueries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry").

Hints

-   The addition SINGLE is designed to pass exactly one row to a [flat structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_structure_glosry.htm "Glossary Entry") as a work area without opening a loop closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendwith.htm).

-   Usually, the row must be identified exactly and it must be specified uniquely in the [WHERE condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm). In a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm), this is usually done by specifying comparison values for the [primary key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_key_glosry.htm "Glossary Entry"). The [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_glosry.htm "Glossary Entry") produces a warning if no exact row is identified.

-   If no unique row is identified, the addition SINGLE can also be used to detect whether a corresponding row exists. In this case, the warning from the extended program check must be hidden using a [pragma](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma_glosry.htm "Glossary Entry"). To avoid unnecessary transports of data, a SELECT list can also be used that contains nothing but a single constant (see the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_literal_abexa.htm)).

In the case of rows specified in full, a SELECT statement with the addition SINGLE is generally faster than specifying only part of the row.

-   The result set of SELECT statements with the addition SINGLE matches the set from the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) without using the addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm).

-   If the addition SINGLE is used, it is not necessary to use the statements [ENDSELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendselect.htm), [ENDWITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendwith.htm) or to import the row into an internal table. Not all additions of the SELECT statement, however, can be used.

-   If the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) is used, the statement [ENDSELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendwith.htm) must be specified or the row must be imported into an internal table. The addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) can, however, be specified.

A SELECT statement with the addition SINGLE can be optimized for reading a single row, which means is generally somewhat faster than when using the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm). In practice, however, this difference can usually be ignored. In light of this, the following is recommended:

-   Use of the addition SINGLE to read a row specified in full exactly.

-   Use of the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) to read a maximum of one row from a set of selected rows.

-   The addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) cannot be used together with SINGLE, which means that it is not possible to define which row is read from a non-unique selection. Instead, the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) can be specified with the addition [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) to define which row is read from a non-unique selection.

-   If SINGLE is specified and [LOB handles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm) are created in the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm), all primary key fields joined by AND in logical expressions must be checked for equivalence in the [WHERE condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm). If this is not possible, the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) can be used instead of SINGLE.

-   If the addition SINGLE is used, after the [creation of LOB handles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm), all [reader streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm) which are created when executing the statement SELECT, as well as [locators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm), continue to exist until they are closed, either explicitly with one of their methods, or implicitly at the end of the current database LUW. The associated database operation is not completed during this time. It is best to close all LOB handles as soon as possible.

Example

Reads the row with the information about Lufthansa flight 0400 from the DDIC database table SPFLI.

SELECT SINGLE \*
       FROM spfli
       WHERE carrid = 'LH' AND
             connid = '0400'
       INTO @DATA(wa).

Example

The program DEMO\_SELECT\_SINGLE\_VS\_UP\_TO compares the performance of SELECT statements with the addition SINGLE with similar statements with the addition [UP TO 1 ROWS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm).

Addition

... FOR UPDATE

Effect

When reading an individual row using SINGLE, the addition FOR UPDATE sets a [database lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_lock_glosry.htm "Glossary Entry") as an [exclusive lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") for this row on the database. The statement SELECT is then only executed if, in the [WHERE condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm), all primary key fields in logical expression which are joined using AND are checked for equivalence. Otherwise the result set is empty and sy-subrc is set to 8.

The addition FOR UPDATE can only be used when accessing data sources where writes are allowed. This addition cannot be used when accessing views where only reads are allowed.

Hints

-   If set incorrectly, the lock can produce a [deadlock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeadlock_glosry.htm "Glossary Entry").

-   If the addition FOR UPDATE is used, a standalone [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Example

In the following example, the [exclusive lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") set by the statement [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_dbtab.htm) is resolved using a [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm). This means that an exclusive lock is applied by the statement SELECT rather than waiting until the statement [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate.htm) is executed.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
COMMIT CONNECTION default.
...
SELECT SINGLE FOR UPDATE id, num1
       FROM demo\_expressions
       WHERE id = 'X'
       INTO @DATA(wa).
...
UPDATE demo\_expressions SET num1 = 111 WHERE id = 'X'.