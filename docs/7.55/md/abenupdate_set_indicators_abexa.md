---
title: "UPDATE, SET INDICATORS"
description: |
  The example demonstrates how the addition SET INDICATORS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_indicator.htm) of the statement UPDATE is used. Source Code REPORT demo_update_set_indicator. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. C
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_set_indicators_abexa.htm"
abapFile: "abenupdate_set_indicators_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "types", "abenupdate", "set", "indicators", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate.htm) →  [UPDATE dbtab, source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm) →  [UPDATE dbtab, set indicators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_indicator.htm) → 

UPDATE, SET INDICATORS

The example demonstrates how the addition [SET INDICATORS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_indicator.htm) of the statement UPDATE is used.

Source Code

REPORT demo\_update\_set\_indicator.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_update.
    INSERT demo\_update FROM TABLE @(
        VALUE #( ( id = 'A' col1 = '1' col2 = '10'   col3 = '100')
                 ( id = 'B' col1 = '2' col2 = '20'   col3 = '200')
                 ( id = 'C' col1 = '3' col2 = '30'   col3 = '300')
                 ( id = 'D' col1 = '4' col2 = '40'   col3 = '400')
                 ( id = 'E' col1 = '5' col2 = '50'   col3 = '500')
                 ( id = 'F' col1 = '6' col2 = '60'   col3 = '600') ) ).
    TYPES ind\_wa TYPE demo\_update WITH INDICATORS col\_ind
                 TYPE abap\_bool.
    DATA ind\_tab TYPE TABLE OF ind\_wa.
    ind\_tab = VALUE #(
           ( id = 'D' col4 = 4000 col\_ind-col4 = abap\_true )
           ( id = 'E' col4 = 5000 col\_ind-col4 = abap\_true )
           ( id = 'F' col4 = 6000 col\_ind-col4 = abap\_true ) ).
    UPDATE demo\_update FROM TABLE @ind\_tab
                       INDICATORS SET STRUCTURE col\_ind.
    SELECT \* FROM demo\_update
             ORDER BY id
             INTO TABLE @DATA(result1).
    cl\_demo\_output=>write( result1 ).
    UPDATE demo\_update FROM TABLE @ind\_tab.
    SELECT \* FROM demo\_update
             ORDER BY id
             INTO TABLE @DATA(result2).
    cl\_demo\_output=>display( result2 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

It modifies the content of three fields of the DDIC database table DEMO\_UPDATE:

-   The rows with the ID values D, E, and F are selected.

-   Within these rows, the column COL4 is indicated for change.

As a result, only these three fields are updated with new values.