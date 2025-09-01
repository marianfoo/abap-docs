  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) → 

Open SQL - Write Accesses

Writes include inserting, modifying, and deleting content in database tables. All writes can be made as individual accesses or as mass access. If multiple rows of a database table are to be changed, mass access using internal tables generally gives better performance than individual accesses.

-   [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\))

-   [UPDATE](javascript:call_link\('abapupdate.htm'\))

-   [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\))

-   [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))

Notes

-   When making writes, always pay attention to [data consistency](javascript:call_link\('abentransaction.htm'\)). The [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") concept is designed for this purpose. In application programs of an AS ABAP, the implicit [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry")s are normally not sufficient for consistent data storage. Instead, explicit [SAP LUWs](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") need to be programmed, which normally contain multiple database LUWs.

-   When making writes to a database table for which a database cursor is open in a [SELECT loop](javascript:call_link\('abapselect.htm'\)) or opened by using [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the results set is database-specific and undefined. Avoid this kind of parallel access if possible.

-   Write access to tables or classic views with [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) is still performed on the database table or the classic view and lead to a syntax warning.

-   Once a [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) is filled using Open SQL, this table must be emptied again explicitly before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") using the Open SQL statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without WHERE or using an explicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)). If not, the runtime error COMMIT\_GTT\_ERROR is produced.

Continue
[INSERT dbtab](javascript:call_link\('abapinsert_dbtab.htm'\))
[UPDATE dbtab](javascript:call_link\('abapupdate.htm'\))
[MODIFY dbtab](javascript:call_link\('abapmodify_dbtab.htm'\))
[DELETE dbtab](javascript:call_link\('abapdelete_dbtab.htm'\))
[INSERT, UPDATE, MODIFY dbtab - LOB Handles](javascript:call_link\('abeninsert_update_modify_lob.htm'\))
[INSERT, UPDATE, MODIFY, DELETE dbtab - connection](javascript:call_link\('abapinsert_update_modify_conn.htm'\))