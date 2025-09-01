---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_modify_table_using_key DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_modify_table_using_key IMPLEMENTATION. METHOD main. DATA: sf
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodify_itab_using_key_abexa.htm"
abapFile: "abenmodify_itab_using_key_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "internal-table", "field-symbol", "abenmodify", "itab", "using", "key", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) →  [MODIFY itab, itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Index%20Access%20with%20Key%2C%20ABENMODIFY_ITAB_USING_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

itab - Index Access with Key

The example shows an index access to a hashed table.

Source Code   

\* Public class definition
CLASS cl\_demo\_modify\_table\_using\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_modify\_table\_using\_key IMPLEMENTATION.
  METHOD main.
    DATA: sflight\_tab TYPE HASHED TABLE
                      OF sflight
                      WITH UNIQUE KEY primary\_key
                        COMPONENTS carrid connid fldate
                      WITH NON-UNIQUE SORTED KEY plane\_type
                        COMPONENTS planetype,
          sflight\_wa  LIKE LINE OF sflight\_tab,
          count       TYPE i.
    SELECT \*
           FROM sflight
           WHERE carrid = 'LH'
           INTO TABLE @sflight\_tab.
    LOOP AT sflight\_tab INTO sflight\_wa USING KEY plane\_type
                                        WHERE planetype = 'A310-300'.
      sflight\_wa-seatsmax += 20.
      MODIFY sflight\_tab INDEX sy-tabix
                         USING KEY loop\_key
                         FROM  sflight\_wa
                         TRANSPORTING seatsmax.
      IF sy-subrc = 0.
        count += 1.
      ENDIF.
    ENDLOOP.
    out->write( |{ count } flights modified| ).
  ENDMETHOD.
ENDCLASS.

Description   

The table sflight\_tab is a hashed table with a unique primary key and a non-unique secondary sorted key. Since a secondary sorted key is specified in the statement MODIFY after USING KEY, it is possible to access the hashed table using the associated secondary table index.

This example only demonstrates the syntax. Generally, instead of using the statement MODIFY, modifications of this type should be made using a field symbol or a data reference:

LOOP AT sflight\_tab ASSIGNING <sflight\_wa> USING KEY plane\_type
                    WHERE planetype = 'A310-300'.
  <sflight\_wa>-seatsmax = <sflight\_wa>-seatsmax + 20.
ENDLOOP.