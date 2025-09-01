---
title: "Table Buffering - Generic Buffering"
description: |
  When a read is performed on a row, all rows are loaded into the table buffer that match this row in a left-aligned part of the primary key. The number of respected key fields is specified in the definition and is always less than the total number of key fields. These key fields form the generic key.
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_generic_buffering.htm"
abapFile: "abenbuffer_generic_buffering.htm"
keywords: ["do", "if", "case", "data", "types", "abenbuffer", "generic", "buffering"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Table%20Buffering%20-%20Generic%20Buffering%2C%20ABENBUFFER_GENERIC_BUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Table Buffering - Generic Buffering

When a read is performed on a row, all rows are loaded into the table buffer that match this row in a left-aligned part of the primary key. The number of respected key fields is specified in the definition and is always less than the total number of key fields. These key fields form the generic key.

The individual generic areas are handled like standalone tables or views whose primary key is the generic key and that are fully buffered.

If a fully specified generic key is used to access an unbuffered row through ABAP SQL, an attempt is made to load the area. If the row is not found, this is noted in the buffer and the database is not accessed again the next time a row is accessed using a fully specified generic key.

Hints

-   In a generically buffered table or view, access to nonexistent data is very fast (see [Buffer Management](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_memory.htm)).
-   When using generic buffering, any ABAP SQL statements must respect the generic key to prevent them from [bypassing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_restrictions.htm) table buffering.
-   Generic buffering should be used if usually only certain areas of the table or view are required. These areas should not be too small, to prevent too many of them from being created and overloading buffer management. They should also not be too big, to prevent too much data from being loaded. [Full buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_complete_buffering.htm) may also be more efficient in some cases. Accordingly, the generic key must not cover too many or too few fields.

Example

One good application of generic buffering is language-dependent data that has the language code field as a generic key.