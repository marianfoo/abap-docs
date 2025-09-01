---
title: "list_cursor_glosry"
description: |
  list_cursor_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_cursor_glosry.htm"
abapFile: "abenlist_cursor_glosry.htm"
keywords: ["do", "if", "try", "class", "abenlist", "cursor", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20list%20cursor%2C%20ABENLIST_CURSOR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

list cursor

Current cursor position for the output in a [list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_list_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). This is represented by the content of the [system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") [sy-colno](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm) (position) and [sy-linno](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.