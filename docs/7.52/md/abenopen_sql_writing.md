---
title: "Open SQL - Write Accesses"
description: |
  Writes include inserting, modifying, and deleting content in database tables. All writes can be made as individual accesses or as mass access. If multiple rows of a database table are to be changed, mass access using internal tables generally gives better performance than individual accesses. -   I
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm"
abapFile: "abenopen_sql_writing.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "class", "data", "internal-table", "abenopen", "sql", "writing"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) → 

Open SQL - Write Accesses

Writes include inserting, modifying, and deleting content in database tables. All writes can be made as individual accesses or as mass access. If multiple rows of a database table are to be changed, mass access using internal tables generally gives better performance than individual accesses.

-   [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm)

-   [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm)

-   [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm)

-   [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm)

Notes

-   When making writes, always pay attention to [data consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm). The [LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenluw_glosry.htm "Glossary Entry") concept is designed for this purpose. In application programs of an AS ABAP, the implicit [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry")s are normally not sufficient for consistent data storage. Instead, explicit [SAP LUWs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry") need to be programmed, which normally contain multiple database LUWs.

-   When making writes to a database table for which a database cursor is open in a [SELECT loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) or opened by using [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm), the results set is database-specific and undefined. Avoid this kind of parallel access if possible.

-   Write access to tables or classic views with [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) is still performed on the database table or the classic view and lead to a syntax warning.

-   Once a [global temporary table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm) is filled using Open SQL, this table must be emptied again explicitly before the next implicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") using the Open SQL statement [DELETE FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) without WHERE or using an explicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_rollback.htm). If not, the runtime error COMMIT\_GTT\_ERROR is produced.

Continue
[INSERT dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm)
[UPDATE dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm)
[MODIFY dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm)
[DELETE dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm)
[INSERT, UPDATE, MODIFY dbtab - LOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_update_modify_lob.htm)
[INSERT, UPDATE, MODIFY, DELETE dbtab - connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm)