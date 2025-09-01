---
title: "database_cursor_glosry"
description: |
  database_cursor_glosry - ABAP latest language reference documentation
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_cursor_glosry.htm"
abapFile: "abendatabase_cursor_glosry.htm"
keywords: ["select", "do", "if", "try", "data", "abendatabase", "cursor", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20database%20cursor%2C%20ABENDATABASE_CURSOR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

database cursor

Pointer to the result set of a database selection. The database cursor is always assigned to a line of the result set. In [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), cursor handling is implicit, except for the statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm), [FETCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfetch.htm), and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclose_cursor.htm). A program can open a maximum of 17 database cursors simultaneously using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry").