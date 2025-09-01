---
title: "Case Distinction CASE TYPE OF for RTTI"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) for type description classes. Source Code REPORT demo_case_type_of_rtti. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main IMPORTING param TYPE any.
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencase_type_of_rtti_abexa.htm"
abapFile: "abencase_type_of_rtti_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencase", "type", "rtti", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) → 

Case Distinction CASE TYPE OF for RTTI

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) for type description classes.

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

Actual parameters of various types are passed to the generically typed parameter param of the method main and an [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_object_glosry.htm "Glossary Entry") is created that points to the general object reference variable typedescr. The case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) is used to define a more specific RTTI type description class that matches the type. An online declaration after the addition INTO of the statement WHEN TYPE is used to create an object reference variable of this static type and is assigned the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.