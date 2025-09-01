---
title: "Example"
description: |
  The first INSERT statement does not insert a line and sets sy-subrc to the value 4. The second INSERT statement produces a runtime error. DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table_line. itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). INSERT 2 INTO TABLE itab. INSERT 2 INTO itab INDEX 2.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_duplicates.htm"
abapFile: "abenitab_key_duplicates.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "internal-table", "abenitab", "key", "duplicates"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Duplicate Unique Keys, ABENITAB_KEY_DUPLICATES, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Duplicate Unique Keys

When lines are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insertion is a single record operation or a mass operation, the ABAP runtime framework reacts as follows to an attempt to insert an entry with duplicate key values:

-   First, it checks whether duplicate key values would occur with respect to the primary key. The system behavior is as follows depending on the operation:
    -   When single lines are inserted using the variant
        
        [INSERT wa INTO TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_position.htm)
        
        duplicate entries with respect to the primary key are ignored and sy-subrc is set to 4. This is often used to filter out duplicates when the table is constructed.
        
    -   In all other cases, such as
        
        [INSERT ... INTO itab INDEX idx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_position.htm)
        [INSERT LINES OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm) (bulk operation)
        [APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm)
        [COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm)
        [\=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove.htm), [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) (bulk operations)
        
        the runtime error ITAB\_DUPLICATE\_KEY occurs.
        
-   A check is then made to see whether duplicate key values would occur with respect to any existing unique secondary keys. If this is the case,
    -   an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised for the statements [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) and [APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm) if the operation is a single record operation.
    -   For all other insert and assignment operations, particularly for all mass operations, the runtime error ITAB\_DUPLICATE\_KEY occurs.

Example

The first INSERT statement does not insert a line and sets sy-subrc to the value 4. The second INSERT statement produces a runtime error.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
INSERT 2 INTO TABLE itab.
INSERT 2 INTO itab INDEX 2.