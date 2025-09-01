---
title: "Syntax"
description: |
  ...  table_key(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)   index(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_index.htm) . Effect In this variant, the statement DELETE deletes a row specified by a table key in tab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm"
abapFile: "abapdelete_itab_line.htm"
keywords: ["delete", "do", "if", "data", "internal-table", "abapdelete", "itab", "line"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) → 

DELETE itab - itab\_line

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_shortref.htm)

Syntax

... *{* [table\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)  *|* [index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_index.htm) *}*.

Effect

In this variant, the statement DELETE deletes a row specified by a table key in [table\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm) or a row specified by a row number [index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_index.htm).

Example

Deletes individual rows in an internal table. The first DELETE statement uses the primary table key to find the row. The second DELETE statement deletes the row by specifying a row number (here also determined by accessing a key).

DATA itab TYPE SORTED TABLE OF string
          WITH UNIQUE KEY primary\_key COMPONENTS table\_line.
itab = VALUE #( ( \`X\` ) ( \`Y\` ) ( \`Z\` ) ).
DELETE TABLE itab WITH TABLE KEY
  primary\_key COMPONENTS table\_line = \`X\`.
DELETE itab INDEX
  line\_index( itab\[ KEY primary\_key table\_line = \`Z\` \] ).

Continue
[DELETE itab - table\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)
[DELETE itab - index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_index.htm)