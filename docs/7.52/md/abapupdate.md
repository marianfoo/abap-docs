---
title: "UPDATE dbtab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_shortref.htm) Syntax UPDATE target(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm)  connection(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_updat
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm"
abapFile: "abapupdate.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "data", "internal-table", "abapupdate"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Write Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) → 

UPDATE dbtab

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_shortref.htm)

Syntax

UPDATE [target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm) *\[* [connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm)*\]* [source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm).

Effect

The [Open-SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement UPDATE changes the content of one or more rows of the database table specified in [target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm). The entries in [source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm) determine which columns of which rows are changed, and how they are changed. The addition [connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm) can be used to specify a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").

System Fields
The statement UPDATE sets the values of the system fields sy-subrc and sy-dbcnt.

sy-subrc

Meaning

0

When SET was specified in source, at least one row was changed. When a work area was specified in source, the specified row was changed. When an internal table was specified in source, all specified rows were changed or the internal table is empty.

2

If a [LOB handle structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") with a component for [writer streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriter_stream_glosry.htm "Glossary Entry") or a reference variable for writer streams was specified after SET, the components which are not associated with writer streams were not yet written to the database, but instead are passed when the stream is closed at latest. Whether this situation occurs or not depends on the database. Refer to [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_update_modify_lob.htm).

4

When SET or a work area was specified in source, no row was changed; or when an internal table was specified in source, not all specified rows were changed. This is either because no appropriate row was found, or because the change would created a row that produces duplicate entries in the [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry") or a unique [secondary index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_index_glosry.htm "Glossary Entry") in the database table.

The statement UPDATE sets sy-dbcnt to the number of changed rows. If an overflow occurs because the number or rows is greater than 2,147,483,647, sy-dbcnt is set to -1. If sy-subrc is 2, sy-dbcnt is also set to the value -1 (for undefined).

Notes

-   The changes are committed to the database by the next [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). Until that point, they can still be undone using a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") The current [isolation level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_isolation.htm) defines whether the modified data can be read into other [database LUWs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") before or only after the database commit.
    
-   The statement UPDATE sets a [database lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_lock_glosry.htm "Glossary Entry") as an [exclusive lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeadlock_glosry.htm "Glossary Entry").
    
-   The number of rows that can be modified in the tables of a database within a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
    
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
[UPDATE dbtab - target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm)
[UPDATE dbtab - source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm)