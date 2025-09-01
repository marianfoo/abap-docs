  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) → 

ABAP SQL - Write Access

Write accesses include inserting, modifying, and deleting content in DDIC database tables. All write accesses can be made as individual accesses or as bulk access. If multiple rows of a DDIC database table are to be changed, bulk access using internal tables generally gives better performance than individual accesses.

-   [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm)
-   [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm)
-   [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm)
-   [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm)

Hints

-   In the case of writes, [data consistency](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_consistency.htm) must always be ensured. The [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry") concept is designed for this purpose. In application programs of an AS ABAP, the implicit [database LUWs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry") are normally not sufficient for consistent data storage. Instead, explicit [SAP LUWs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry") must be programmed, which normally contain multiple database LUWs.
-   When making writes to a DDIC database table for which a database cursor is opened in a [SELECT loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) or using [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm), the result set is database-dependent and undefined. This kind of parallel access should therefore be avoided.
-   Write access to DDIC database tables or DDIC table views in the ABAP Dictionary with [replacement objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_replacement_objects.htm) is still performed on the DDIC database table or the DDIC view and produce a syntax warning.
-   Once a [global temporary table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_gtt.htm) is filled using ABAP SQL, this table must be emptied again explicitly before the next implicit [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") using the ABAP SQL statement [DELETE FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm) without WHERE or using an explicit [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_rollback.htm), otherwise the runtime error COMMIT\_GTT\_ERROR is produced.

Continue
[INSERT dbtab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm)
[UPDATE dbtab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm)
[MODIFY dbtab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm)
[DELETE dbtab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm)
[INSERT, UPDATE, MODIFY, DELETE, target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_target.htm)
[INSERT, UPDATE, MODIFY dbtab, LOB Handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenium_lob.htm)
[INSERT, UPDATE, MODIFY, DELETE dbtab, connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_conn.htm)
[INSERT, MODIFY dbtab, subquery\_clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_from_select.htm)