---
title: "Duplicate Unique Keys"
description: |
  When rows are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insert takes place as a single record operation or a mass operation, the ABAP runtime environment responds as follow
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key_duplicates.htm"
abapFile: "abenitab_key_duplicates.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "internal-table", "abenitab", "key", "duplicates"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_oview.htm) →  [Table Key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key.htm) → 

Duplicate Unique Keys

When rows are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insert takes place as a single record operation or a mass operation, the ABAP runtime environment responds as follows to an attempt to insert an entry with duplicate key values:

-   First, it checks whether duplicate key values would occur with respect to the primary key. The system behavior is as follows depending on the operation:

-   When single rows are inserted using the variant
    [INSERT wa INTO TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_position.htm)
    duplicate with respect to the primary key are ignored and sy-subrc is set to 4. This is often used to filter out duplicates when the table is constructed.

-   In all other cases, such as
    [INSERT ... INTO itab INDEX idx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_position.htm)
    [INSERT LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm) (mass operation)
    [APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm)
    [COLLECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm)
    [\=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm), [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm) (mass operations)
    the runtime error ITAB\_DUPLICATE\_KEY occurs.

-   A check is then made to see whether duplicate key values would occur with respect to any existing unique secondary keys. If this is the case,

-   an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised for the statements [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm) and [APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm), if the operation is a single record operation.

-   For all other insert and assignment operations, particularly for all mass operations, the runtime error ITAB\_DUPLICATE\_KEY occurs.

Example

The first INSERT statement does not insert a line and sets sy-subrc to the value 4. The second INSERT statement produces a runtime error.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
INSERT 2 INTO TABLE itab.
INSERT 2 INTO itab INDEX 2.