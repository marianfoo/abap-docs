---
title: "Table Buffering - Single Record Buffering"
description: |
  Only those rows in the table are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses. If a WHERE(https://help.sap.com/doc/abapd
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_single_buffering.htm"
abapFile: "abenbuffer_single_buffering.htm"
keywords: ["select", "do", "if", "data", "types", "abenbuffer", "single", "buffering"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_kind.htm) → 

Table Buffering - Single Record Buffering

Only those rows in the table are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) clause is used to access a non-buffered row and this clause specifies equality conditions joined using AND, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified WHERE clause is used to avoid a new database access in the next read.

Notes

-   When using single record buffering, any ABAP SQL statements must respect the full primary key to prevent them from [bypassing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_restrictions.htm) table buffering.

-   Single record buffering is recommended for large tables from which single rows are often read. In smaller tables from which many rows are read, [full buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_complete_buffering.htm) is usually preferred since this reduces the number of direct database accesses that need to be loaded.

-   The use of single record buffering is specified by the WHERE clause only and not by using the addition [SINGLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm).