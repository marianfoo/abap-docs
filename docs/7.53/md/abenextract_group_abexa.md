  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) →  [Examples of Extracts](javascript:call_link\('abenextract_abexas.htm'\)) → 

Extracts, Control Level Processing

This example demonstrates control level processing of extracts.

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
    DATA(out) = cl\_demo\_output=>new( ).
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

An example extract is created that contains only the fields from the field group header and is sorted by these fields. The content of the data set and the resulting group level change are produced in the LOOP.