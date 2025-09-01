---
title: "Case Distinction CASE TYPE OF for RTTI"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm) for type description classes. Source Code  Public class definition CLASS cl_demo_case_type_of_rtti DEFINITION INHERITING FROM cl_demo_classrun PUBLIC C
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_type_of_rtti_abexa.htm"
abapFile: "abencase_type_of_rtti_abexa.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencase", "type", "rtti", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Case%20Distinction%20CASE%20TYPE%20OF%20for%20RTTI%2C%20ABENCASE_TYPE_OF_RTTI_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Case Distinction CASE TYPE OF for RTTI

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm) for type description classes.

Source Code   

\* Public class definition
CLASS cl\_demo\_case\_type\_of\_rtti DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS meth IMPORTING param TYPE any.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_case\_type\_of\_rtti IMPLEMENTATION.
  METHOD main.
    DATA: elem TYPE i,
          BEGIN OF struct,
            comp1 TYPE i,
            comp2 TYPE i,
          END OF struct,
          itab TYPE STANDARD TABLE OF struc WITH EMPTY KEY,
          dref TYPE REF TO i.
    meth( elem ).
    meth( struct ).
    meth( itab ).
    meth( dref ).
  ENDMETHOD.
  METHOD meth.
    FINAL(typedescr) = cl\_abap\_typedescr=>describe\_by\_data( param ).
    CASE TYPE OF typedescr.
      WHEN TYPE cl\_abap\_elemdescr INTO FINAL(elemdescr).
        out->write( elemdescr->type\_kind ).
      WHEN TYPE cl\_abap\_structdescr INTO FINAL(structdescr).
        out->write( structdescr->components ).
      WHEN TYPE cl\_abap\_tabledescr INTO FINAL(tabledescr).
        out->write( tabledescr->table\_kind ).
      WHEN OTHERS.
        out->write( 'Not supported' ).
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

Description   

Actual parameters of different types are passed to the generically typed parameter param of the method main, and an [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_object_glosry.htm "Glossary Entry") is created, to which the general object reference variable typedescr points. The case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm) is used to determine a more specific suitable RTTI type description class. An inline declaration after the addition INTO of the statement WHEN TYPE is used to create an object reference variable of this static type and assign the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.