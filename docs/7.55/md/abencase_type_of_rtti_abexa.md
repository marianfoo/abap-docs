  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) → 

Case Distinction CASE TYPE OF for RTTI

This example demonstrates the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) for type description classes.

Source Code

REPORT demo\_case\_type\_of\_rtti.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING param TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(typedescr) = cl\_abap\_typedescr=>describe\_by\_data( param ).
    CASE TYPE OF typedescr.
      WHEN TYPE cl\_abap\_elemdescr INTO DATA(elemdescr).
        cl\_demo\_output=>write( elemdescr->type\_kind ).
      WHEN TYPE cl\_abap\_structdescr INTO DATA(structdescr).
        cl\_demo\_output=>write( structdescr->components ).
      WHEN TYPE cl\_abap\_tabledescr INTO DATA(tabledescr).
        cl\_demo\_output=>write( tabledescr->table\_kind ).
      WHEN OTHERS.
        cl\_demo\_output=>write( 'Not supported' ).
    ENDCASE.  ENDMETHOD.
ENDCLASS.
DATA: elem TYPE i,
      BEGIN OF struct,
        comp1 TYPE i,
        comp2 TYPE i,
      END OF struct,
      itab LIKE STANDARD TABLE OF struc WITH EMPTY KEY,
      dref TYPE REF TO i.
START-OF-SELECTION.
  demo=>main( elem ).
  demo=>main( struct ).
  demo=>main( itab ).
  demo=>main( dref ).
  cl\_demo\_output=>display( ).

Description

Actual parameters of different types are passed to the generically typed parameter param of the method main, and an [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") [type description object](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") is created, to which the general object reference variable typedescr points. The case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) is used to determine a more specific suitable RTTI type description class. An inline declaration after the addition INTO of the statement WHEN TYPE is used to create an object reference variable of this static type and assign the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.