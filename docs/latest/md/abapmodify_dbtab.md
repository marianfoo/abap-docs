  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20dbtab%2C%20ABAPMODIFY_DBTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY dbtab

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab_shortref.htm)

Syntax

MODIFY [target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm) *\[* [connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_conn.htm)*\]* FROM [source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_source.htm) *\[*[MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmapping_from_entity.htm)*\]*.

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement MODIFY inserts one or more rows specified in source into the DDIC database table or [DDIC table view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_view_glosry.htm "Glossary Entry") specified in target, or overwrites existing rows. The addition [connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_conn.htm) can be used to specify a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

The addition MAPPING FROM ENTITY is used to handle structures and internal tables that are typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). Find more information in the topic [ABAP SQL Statements with MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmapping_from_entity.htm).

System Fields

The statement MODIFY sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

When a work area was specified in source, the specified row was inserted or modified. When an internal table was specified in source, all specified rows were inserted or modified, or the internal table is empty.

2

When a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") was specified with a component for [writer streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwriter_stream_glosry.htm "Glossary Entry"), the non-LOB handle components were not yet written to the database, and instead are passed when the stream is closed at the latest. Whether this situation occurs or not depends on the database. See [LOB handles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenium_lob.htm).

4

When a work area or a subquery was specified in source, no rows were processed, or when an internal table was specified in source, not all specified rows were processed because there is already a row with the same unique [secondary index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_index_glosry.htm "Glossary Entry") in the database table.

The statement MODIFY sets sy-dbcnt to the number of processed rows. If an overflow occurs because the number of rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2, sy-dbcnt is also set to the value -1 (for undefined).

Hints

-   The changes are finally applied to the database at the next [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). Until that point, they can still be undone using a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). The current [isolation level](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_isolation.htm) defines whether the modified data can no longer be read into other [database LUWs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry") before or only after the database commit.
-   The number of rows that can be inserted or modified in the tables of a database within a [database LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
-   Once rows have been inserted into a [global temporary table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_gtt.htm), this table must be emptied again explicitly before the next implicit [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") using the ABAP SQL statement [DELETE FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) without WHERE or using an explicit [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm). If not, the runtime error COMMIT\_GTT\_ERROR is produced.
-   The statement MODIFY dbtab FROM wa has the statement [MODIFY itab FROM wa](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm) with identical syntax. If an internal table has the same name as a DDIC database table, a statement like this accesses the internal table.
-   The statement MODIFY sets a [database lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_lock_glosry.htm "Glossary Entry") as an [exclusive lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") until the next database commit or rollback.
-   If used incorrectly, setting the lock can produce a [deadlock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeadlock_glosry.htm "Glossary Entry").

Example

The first MODIFY statement inserts a row into an empty table. The second MODIFY statement modifies the values of the non-key fields of this row and inserts two additional rows.

DELETE FROM demo\_update.
MODIFY demo\_update FROM @(
  VALUE #(  id = 'X' col1 = 10 col2 = 20 col3 = 30 col4 = 40 ) ).
MODIFY demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ).

Continue
[MODIFY dbtab, source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_source.htm)
![Example](exa.gif "Example") [MODIFY, FROM TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbulk_modify_abexa.htm)