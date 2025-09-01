  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) → 

ABAP SQL - Write Access

Write accesses include inserting, modifying, and deleting content in DDIC database tables. All write accesses can be made as individual accesses or as bulk access. If multiple rows of a DDIC database table are to be changed, bulk access using internal tables generally gives better performance than individual accesses.

-   [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\))
-   [UPDATE](javascript:call_link\('abapupdate.htm'\))
-   [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\))
-   [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))

Hints

-   In the case of writes, [data consistency](javascript:call_link\('abendata_consistency.htm'\)) must always be ensured. The [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") concept is designed for this purpose. In application programs of an AS ABAP, the implicit [database LUWs](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are normally not sufficient for consistent data storage. Instead, explicit [SAP LUWs](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") must be programmed, which normally contain multiple database LUWs.
-   When making writes to a DDIC database table for which a database cursor is opened in a [SELECT loop](javascript:call_link\('abapselect.htm'\)) or using [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the result set is database-dependent and undefined. This kind of parallel access should therefore be avoided.
-   Write access to DDIC database tables or DDIC table views in the ABAP Dictionary with [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) is still performed on the DDIC database table or the DDIC view and produce a syntax warning.
-   Once a [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) is filled using ABAP SQL, this table must be emptied again explicitly before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") using the ABAP SQL statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without WHERE or using an explicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)), otherwise the runtime error COMMIT\_GTT\_ERROR is produced.

Continue
[INSERT dbtab](javascript:call_link\('abapinsert_dbtab.htm'\))
[UPDATE dbtab](javascript:call_link\('abapupdate.htm'\))
[MODIFY dbtab](javascript:call_link\('abapmodify_dbtab.htm'\))
[DELETE dbtab](javascript:call_link\('abapdelete_dbtab.htm'\))
[INSERT, UPDATE, MODIFY, DELETE, target](javascript:call_link\('abapiumd_target.htm'\))
[INSERT, UPDATE, MODIFY dbtab, LOB Handles](javascript:call_link\('abenium_lob.htm'\))
[INSERT, UPDATE, MODIFY, DELETE dbtab, connection](javascript:call_link\('abapiumd_conn.htm'\))
[INSERT, MODIFY dbtab, subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\))