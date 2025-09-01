  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

UPDATE dbtab

[Quick Reference](javascript:call_link\('abapupdate_shortref.htm'\))

Syntax

UPDATE [target](javascript:call_link\('abapupdate_target.htm'\)) *\[* [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\))*\]* [source](javascript:call_link\('abapupdate_source.htm'\)).

Effect

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement UPDATE changes the content of one or more rows of the database table specified in [target](javascript:call_link\('abapupdate_target.htm'\)). The entries in [source](javascript:call_link\('abapupdate_source.htm'\)) determine which columns of which rows are changed, and how they are changed.
The addition [connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\)) can be used to specify a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").

System Fields
The statement UPDATE sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0 (means:

When SET was specified in source, at least one row was changed. When a work area was specified in source, the specified row was changed. When an internal table was specified in source, all specified rows were changed or the internal table is empty.

2 (means:

If a [LOB handle](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") structure with a component for [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry") or a reference variable for writer streams was specified after SET, the components which are not associated with writer streams were not yet written to the database, but instead are passed when the stream is closed at latest. Whether this situation occurs or not depends on the database. See [LOB handles](javascript:call_link\('abeninsert_update_modify_lob.htm'\)).

4 (means:

When SET or a work area was specified in source, no row was changed; or when an internal table was specified in source, not all specified rows were changed. This is either because no appropriate row was found, or because the change would created a row that produces duplicate entries in the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or a unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") in the database table.

The statement UPDATE sets sy-dbcnt to the number of changed rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2, sy-dbcnt is also set to the value -1 (for undefined).

Notes

-   The changes are committed to the database by the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Until that point, they can still be undone using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") The current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) defines whether the modified data can be read into other [database LUWs](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") before or only after the database commit.
    
-   The statement UPDATE sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") as an [exclusive lock](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").
    
-   The number of rows that can be modified in the tables of a database within a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
    
-   The statement UPDATE cannot be applied to the system table TRDIR.
    

Example

The statement UPDATE overwrites the content of the columns of a database table row specified by a key with values from a work area created using the value operator VALUE.

DELETE FROM demo\_update.
INSERT demo\_update FROM @( VALUE #( id = 'X' ) ).
UPDATE demo\_update FROM @( VALUE #( id = 'X' col1 = 100
                                             col2 = 200
                                             col3 = 300
                                             col4 = 400 ) ).

Continue
[UPDATE dbtab - target](javascript:call_link\('abapupdate_target.htm'\))
[UPDATE dbtab - source](javascript:call_link\('abapupdate_source.htm'\))