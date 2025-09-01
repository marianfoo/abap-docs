---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_delete_table_using_key DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. DATA: BEGIN OF tline, col1 TYPE i, col2 TYPE i, END OF tline, itab LIKE HASHED TABLE OF tline WITH UNI
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelete_itab_using_key_abexa.htm"
abapFile: "abendelete_itab_using_key_abexa.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "abendelete", "itab", "using", "key", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) →  [DELETE itab, itab\_lines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_lines.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Deleting%20Lines%20Using%20WHERE%2C%20ABENDELETE_ITAB_USING_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Deleting Lines Using WHERE

This example measures the runtime of the statement DELETE ... WHERE with various table keys.

Source Code   

\* Public class definition
CLASS cl\_demo\_delete\_table\_using\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: BEGIN OF tline,
            col1 TYPE i,
            col2 TYPE i,
          END OF tline,
          itab LIKE HASHED TABLE
                 OF tline
                 WITH UNIQUE KEY primary\_key
                 COMPONENTS col1
                 WITH NON-UNIQUE SORTED KEY secondary\_key
                 COMPONENTS col2,
          jtab LIKE SORTED TABLE
                 OF tline
                 WITH NON-UNIQUE KEY primary\_key
                 COMPONENTS col2.
    METHODS refresh\_itab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_delete\_table\_using\_key IMPLEMENTATION.
  METHOD main.
    DATA: t1 TYPE i,
          t2 TYPE i,
          t  TYPE i.
    refresh\_itab( ).
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    CLEAR t.
    t1 = timer->get\_runtime( ).
    DELETE itab WHERE col2 = 10 ##primkey\[secondary\_key\].
    t2 = timer->get\_runtime( ).
    t += t2 - t1.
    out->write\_text(
      |Delete without using secondary sorted key: { t }| ).
    refresh\_itab( ).
    CLEAR t.
    t1 = timer->get\_runtime( ).
    DELETE itab USING KEY secondary\_key
                      WHERE col2 = 10.
    t2 = timer->get\_runtime( ).
    t += t2 - t1.
    out->write\_text(
      |Delete without using secondary sorted key: { t }| ).
    refresh\_itab( ).
    jtab = itab.
    CLEAR t.
    t1 = timer->get\_runtime( ).
    cl\_abap\_itab\_utilities=>flush\_itab\_key(
      EXPORTING keyname = 'SECONDARY\_KEY'
      CHANGING  itab    = itab ).
    t2 = timer->get\_runtime( ).
    t += t2 - t1.
    out->write\_text( |Create secondary index: { t }| ).
    CLEAR t.
    t1 = timer->get\_runtime( ).
    DELETE itab USING KEY secondary\_key
                      WHERE col2 = 10.
    t2 = timer->get\_runtime( ).
    t += t2 - t1.
    out->write\_text(
      |Delete via secondary sorted key with existing index: { t }| ).
    CLEAR t.
    t1 = timer->get\_runtime( ).
    DELETE jtab WHERE col2 = 10.
    t2 = timer->get\_runtime( ).
    t += t2 - t1.
    out->write\_text(
      |Delete via primary sorted key: { t }| ).
  ENDMETHOD.
  METHOD refresh\_itab.
    DATA prng TYPE REF TO cl\_abap\_random\_int.
    prng = cl\_abap\_random\_int=>create(
      seed = + cl\_demo\_date\_time=>get\_system\_time( )
      min  = 1
      max  = 10 ).
    itab = VALUE #(
      FOR j = 1 UNTIL j > 100000 ( col1 = j
                                   col2 = prng->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The table itab is a hashed table with a unique primary key and a non-unique secondary sorted key. The method refresh\_itab fills the table with 100000 lines, whereby the second column contains random numbers between 1 and 10.

The class measures the runtime of the statement DELETE itab, whereby a condition is set after WHERE on the column that determines the secondary key.

-   For demonstration purposes, the [pragma](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpragma_glosry.htm "Glossary Entry") ##PRIMKEY is used to suppress the syntax check warning in the first DELETE statement stating that the primary key is being used to access the internal table without its component being filled. In this access, the entire internal table must be searched linearly.
-   The secondary key is specified in the second DELETE statement. Since this key is not used to access the internal table after the table is filled, the secondary table key must first be constructed ([lazy update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlazy_update_glosry.htm "Glossary Entry")). This time is included in the DELETE statement measurement to make it considerably slower than the previous non-optimized statement.
-   Once the internal table is filled again, the secondary key is constructed explicitly using the method FLUSH\_ITAB\_KEY of the class CL\_ABAP\_ITAB\_UTILITIES. The time measured here is largely the runtime needed to create the index.
-   The third DELETE statement specifies the secondary key again, but it already exists due to the previous method call. As expected, the runtime of this DELETE statement is much faster than the previous two statements. The total of this runtime and the runtime required to construct the index gives the runtime of the second DELETE statement.
-   The fourth DELETE statement performs the same delete operation on a sorted internal table jtab, which has the same line type and content as the previous table itab but no secondary key as its only key. The runtime is approximately the same as an access to itab using the secondary sorted key but is a little shorter since only one key needs to be administered for the internal table. If a secondary key were declared for jtab, such as a hash key for the first column, the runtime of the last two DELETE statements would be about the same.

The example demonstrates that performance is improved significantly by using secondary table keys, which make it unnecessary to copy data to tables with appropriate keys. It also demonstrates, however, that the construction of a secondary index is costly. The use of lazy update also means that these costs are often incurred in unexpected places. Secondary keys are more suitable for frequent reads on large tables, rather than infrequent writes.