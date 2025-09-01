---
title: "database_cursor_glosry"
description: |
  database_cursor_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_cursor_glosry.htm"
abapFile: "abendatabase_cursor_glosry.htm"
keywords: ["select", "do", "try", "data", "abendatabase", "cursor", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

database cursor

Pointer to the result set of a database selection. The database cursor is always assigned to a line of the result set. In [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"), cursor handling is implicit, except for the statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm), [FETCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm), and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclose_cursor.htm). A program can open a maximum of 17 database cursors simultaneously using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry").