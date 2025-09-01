  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [Examples of Extracts](javascript:call_link\('abenextract_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Extracts, Group Level Processing, ABENEXTRACT_GROUP_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Extracts, Group Level Processing

This example demonstrates group level processing of extracts.

Source Code   

REPORT demo\_extract\_at\_new.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
DATA: t1 TYPE c LENGTH 4,
      t2 TYPE i.
FIELD-GROUPS header.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT t2 t1 INTO header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 2. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 2. EXTRACT header.
    t1 ='BBCC'. t2 = 2. EXTRACT header.
    t1 ='AAAA'. t2 = 1. EXTRACT header.
    t1 ='BBBB'. t2 = 1. EXTRACT header.
    t1 ='AAAA'. t2 = 3. EXTRACT header.
    t1 ='AABB'. t2 = 1. EXTRACT header.
    SORT BY t1 t2.
    FINAL(out) = cl\_demo\_output=>new( ).
    LOOP.
      AT FIRST.
        out->write( 'Start of LOOP' ).
        out->line( ).
      ENDAT.
      AT NEW t1.
        out->write( 'New T1' ).
      ENDAT.
      AT NEW t2.
        out->write( 'New T2' ).
      ENDAT.
      out->write( |{ t1 } { t2 }| ).
      AT END OF t2.
        out->write( 'End of T2' ).
      ENDAT.
      AT END OF t1.
        out->write( 'End of T1' ).
      ENDAT.
      AT LAST.
        out->line( ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

An example extract is created that contains only the fields from the field group header and is sorted by these fields. The content of the data set and the resulting group level break are produced in the LOOP.