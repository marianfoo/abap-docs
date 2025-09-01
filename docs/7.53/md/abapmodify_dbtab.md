  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

MODIFY dbtab

[Quick Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Syntax

MODIFY [target](javascript:call_link\('abapmodify_target.htm'\)) *\[* [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\))*\]* FROM [source](javascript:call_link\('abapmodify_source.htm'\)).

Effect

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement MODIFY inserts one or more rows specified in [source](javascript:call_link\('abapmodify_target.htm'\)) in the database table or classic view specified in [target](javascript:call_link\('abapmodify_target.htm'\)), or overwrites existing rows. The addition [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\)) can be used to specify a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").

System Fields
The statement MODIFY sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0 (means:

When a work area was declared in source, the specified row was inserted or modified. When an internal table was specified in source, all specified lines were inserted, modified, or the internal table is empty.

2 (means:

When a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") was specified with a component for [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry"), the non-LOB handle components were not yet written to the database, but instead are passed when the stream is closed, at the latest. Whether this situation occurs or not depends on the database. See [LOB handles](javascript:call_link\('abeninsert_update_modify_lob.htm'\)).

4 (means:

When a work area or a subquery was specified in source, no rows were processed, or when an internal table was specified in source, not all specified rows were processed because there is already a row with the same unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") in the database table.

The statement MODIFY sets sy-dbcnt to the number of processed rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2, sy-dbcnt is also set to the value -1 (for undefined).

Notes

-   The changes are committed to the database by the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Until that point, they can still be undone using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) defines whether the modified data can be read into other [database LUWs](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") before or only after the database commit.
    
-   The statement MODIFY sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") as an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").
    
-   The number of rows that can be inserted or modified in the tables of a database within a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
    
-   Once rows have been inserted in a [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)), this table must be emptied again explicitly before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") using the ABAP SQL statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without WHERE or using an explicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)). If not, the runtime error COMMIT\_GTT\_ERROR is produced.
    
-   The statement MODIFY dbtab FROM wa has the statement [MODIFY itab FROM wa](javascript:call_link\('abapmodify_itab_single.htm'\)) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.
    

Example

The first MODIFY statement inserts a row in an empty table. The second MODIFY statement modifies the values of the non-key fields of this row and inserts two additional rows.

DELETE FROM demo\_update.
MODIFY demo\_update FROM @(
  VALUE #(  id = 'X' col1 = 10 col2 = 20 col3 = 30 col4 = 40 ) ).
MODIFY demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ).

Continue
[MODIFY dbtab - target](javascript:call_link\('abapmodify_target.htm'\))
[MODIFY dbtab - source](javascript:call_link\('abapmodify_source.htm'\))
![Example](exa.gif "Example") [MODIFY FROM TABLE](javascript:call_link\('abenbulk_modify_abexa.htm'\))