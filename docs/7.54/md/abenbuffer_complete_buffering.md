---
title: "Table Buffering - Full Buffering"
description: |
  When a row is read, all rows in the table or view are loaded to the table buffer(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm 'Glossary Entry'). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data rec
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_complete_buffering.htm"
abapFile: "abenbuffer_complete_buffering.htm"
keywords: ["do", "while", "if", "try", "data", "types", "abenbuffer", "complete", "buffering"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_kind.htm) → 

Table Buffering - Full Buffering

When a row is read, all rows in the table or view are loaded to the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry"). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data records are sorted by the key of the table or view. Optimized access requires that the left-justified part of the primary key or of the fields of a secondary index be as large as possible. If not, the buffer is scanned in a linear fashion.

If full buffering is switched on in a client-specific table or view, generic buffering using the client column as a generic key is performed internally.

Notes

-   In a fully buffered table or view, access to nonexistent data is very fast (see [Buffer Management](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_memory.htm)).

-   Full buffering should be used in small tables, such as customizing tables. In larger tables, full buffering is worthwhile only if large quantities of data are read frequently. Writes on fully buffered tables should be performed only rarely.

Example

The table T005 is fully buffered since it is small and accessed often by reads.