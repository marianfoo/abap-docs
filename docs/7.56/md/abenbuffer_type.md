---
title: "Table Buffering - Buffering Types"
description: |
  The following buffering types can be configured(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_buffer.htm) for a DDIC database table or DDIC database view in the ABAP Dictionary: -   Table Buffering - Single Record Buffering(https://help.sap.com/doc/abapdocu_
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_type.htm"
abapFile: "abenbuffer_type.htm"
keywords: ["do", "if", "try", "data", "types", "abenbuffer", "type"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm) → 

Table Buffering - Buffering Types

The following buffering types can be [configured](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_buffer.htm) for a DDIC database table or DDIC database view in the ABAP Dictionary:

-   [Table Buffering - Single Record Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_single_buffering.htm)
-   [Table Buffering - Generic Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_generic_buffering.htm)
-   [Table Buffering - Full Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_complete_buffering.htm)

Hint

If generic buffering or full buffering is activated, and the database table or view is specified statically in an ABAP SQL statement, the [secondary indexes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_index_glosry.htm "Glossary Entry") of the table are not ignored when the data is read from the [table buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If single record buffering is used, only the primary index is read. A secondary index defined in the ABAP Dictionary is evaluated regardless of whether the index was created on the database or not.

Continue
[Table Buffering - Single Record Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_single_buffering.htm)
[Table Buffering - Generic Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_generic_buffering.htm)
[Table Buffering - Full Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_complete_buffering.htm)