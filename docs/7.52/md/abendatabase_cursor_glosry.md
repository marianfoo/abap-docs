---
title: "database_cursor_glosry"
description: |
  database_cursor_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm"
abapFile: "abendatabase_cursor_glosry.htm"
keywords: ["select", "do", "try", "data", "abendatabase", "cursor", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

database cursor

Pointer to the results set of a database selection. The database cursor is always assigned to a line of the results set. In [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), cursor handling is implicit, except for the statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm), [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm), and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclose_cursor.htm). A program can open a maximum of 17 database cursors simultaneously using the [Open SQL interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry").