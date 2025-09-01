  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_extracts_extended.htm) →  [Examples of Extracts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextract_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Extracts%2C%20Determining%20Numbers%20and%20Totals%2C%20ABENEXTRACT_SUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Extracts, Determining Numbers and Totals

This example demonstrates how numbers and totals are determined in extracts.

Source Code   

REPORT demo\_extract\_cnt\_sum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS: header, test.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 = 'AABB'. t2 = 1. EXTRACT test.
    t1 = 'BBCC'. t2 = 2. EXTRACT test.
    t1 = 'AAAA'. t2 = 2. EXTRACT test.
    t1 = 'AABB'. t2 = 1. EXTRACT test.
    t1 = 'BBBB'. t2 = 2. EXTRACT test.
    t1 = 'BBCC'. t2 = 2. EXTRACT test.
    t1 = 'AAAA'. t2 = 1. EXTRACT test.
    t1 = 'BBBB'. t2 = 1. EXTRACT test.
    t1 = 'AAAA'. t2 = 3. EXTRACT test.
    t1 = 'AABB'. t2 = 1. EXTRACT test.
    SORT BY t1 t2.
    FINAL(out) = cl\_demo\_output=>new( ).
    LOOP.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->line( ).
      ENDAT.
      AT END OF t1.
        out->write( |Different values: { cnt(t1) }| ).
        out->line( ).
      ENDAT.
      AT LAST.
        out->line( ).
        out->write( |Sum: { sum(t2) }| ).
        out->write( |Different values: { cnt(t1) }| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

An example extract is created that contains only fields from the field group header. After being sorted, the content of the data set, as well as the numbers from the different fields t1 and the sums of the fields t2, are produced at the end of every group level and at the end of the loop.