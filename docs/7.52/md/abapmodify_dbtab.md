---
title: "MODIFY dbtab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab_shortref.htm) Syntax MODIFY target(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm)  connection(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm"
abapFile: "abapmodify_dbtab.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "class", "data", "internal-table", "abapmodify", "dbtab"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Write Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) → 

MODIFY dbtab

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab_shortref.htm)

Syntax

MODIFY [target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm) *\[* [connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm)*\]* FROM [source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_source.htm).

Effect

The [Open-SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement MODIFY inserts one or more rows specified in [source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm) in the database table or classic view specified in [target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm), or overwrites existing rows. The addition [connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm) can be used to specify a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

System Fields
The statement MODIFY sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0 (means:

When a work area was declared in source, the specified row was inserted or modified. When an internal table was specified in source, all specified lines were inserted, modified, or the internal table is empty.

2 (means:

When a [LOB handle structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") was specified with a component for [writer streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriter_stream_glosry.htm "Glossary Entry"), the non-LOB handle components were not yet written to the database, but instead are passed when the stream is closed, at the latest. Whether this situation occurs or not depends on the database. Refer to [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_update_modify_lob.htm).

4 (means:

When a work area was specified in source, no rows were processed, or when an internal table was specified in source, not all specified rows were processed because there is already a row with the same unique [secondary index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_index_glosry.htm "Glossary Entry") in the database table.

The statement MODIFY sets sy-dbcnt to the number of processed rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2, sy-dbcnt is also set to the value -1 (for undefined).

Notes

-   The changes are committed to the database by the next [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). Until that point, they can still be undone using a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") The current [isolation level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_isolation.htm) defines whether the modified data can be read into other [database LUWs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") before or only after the database commit.
    
-   The statement MODIFY sets a [database lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_lock_glosry.htm "Glossary Entry") as an [exclusive lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeadlock_glosry.htm "Glossary Entry").
    
-   The number of rows that can be inserted or modified in the tables of a database within a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
    
-   Once rows have been inserted in a [global temporary table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm), this table must be emptied again explicitly before the next implicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") using the Open SQL statement [DELETE FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) without WHERE or using an explicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_rollback.htm). If not, the runtime error COMMIT\_GTT\_ERROR is produced.
    
-   The statement MODIFY dbtab FROM wa has the statement [MODIFY itab FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.
    

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
[MODIFY dbtab - target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm)
[MODIFY dbtab - source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_source.htm)
![Example](exa.gif "Example") [MODIFY FROM TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbulk_modify_abexa.htm)