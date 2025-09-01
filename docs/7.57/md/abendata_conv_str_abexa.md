  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\)) →  [Conversion Between Flat Structures](javascript:call_link\('abenconversion_flat_flat.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversion Rules for Structures, ABENDATA_CONV_STR_ABEXA, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Conversion Rules for Structures

This example demonstrates how structures can be converted from one type to another.

Source Code   

REPORT demo\_data\_conversion\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF fs1,
             int   TYPE i            VALUE 5,
             pack  TYPE p DECIMALS 2 VALUE '2.26',
             text  TYPE c LENGTH 10  VALUE 'Fine Text',
             float TYPE decfloat16   VALUE '1.234e+05',
             date  TYPE d            VALUE '19950916',
          END OF fs1.
    DATA: BEGIN OF fs2,
             int  TYPE i            VALUE 3,
             pack TYPE p DECIMALS 2 VALUE '72.34',
             text TYPE c LENGTH 5   VALUE 'Hello',
          END OF fs2.
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Source'
      )->write( |{ fs1-int   width = 10 } {
                   fs1-pack  width = 10 } {
                   fs1-text  width = 10 } {
                   fs1-float width = 10 } {
                   fs1-date  width = 10 }| ).
    out->next\_section( 'Target'
      )->write( |{ fs2-int  width = 10 } {
                   fs2-pack width = 10 } {
                   fs2-text width = 10 }| ).
    fs2 = fs1.
    out->next\_section( 'Result'
      )->display( |{ fs2-int  width = 10 } {
                     fs2-pack width = 10 } {
                     fs2-text width = 10 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In this example, two different structures are defined, fs1 and fs2. The prerequisites of the third [conversion rule for flat structures](javascript:call_link\('abenconversion_flat_flat.htm'\)) apply to both structures and the corresponding rule is also applied. After the assignment of fs1 to fs2, only the result for the first two components is the same as if they were passed component by component. fs2-text is filled with the first five places from fs1-text. None of the remaining components of fs1 are passed.