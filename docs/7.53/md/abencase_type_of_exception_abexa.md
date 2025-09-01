---
title: "Case Distinction CASE TYPE OF for Exceptions"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) for exception classes. Source Code REPORT demo_case_type_of_exception. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-DAT
version: "7.53"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencase_type_of_exception_abexa.htm"
abapFile: "abencase_type_of_exception_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abencase", "type", "exception", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) → 

Case Distinction CASE TYPE OF for Exceptions

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm) for exception classes.

Source Code

REPORT demo\_case\_type\_of\_exception.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS my\_sqrt IMPORTING num TYPE any
                          RAISING   cx\_dynamic\_check.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA number TYPE string.
    out = cl\_demo\_output=>new( ).
    cl\_demo\_input=>request( CHANGING field = number ).
    TRY.
        my\_sqrt( number ).
      CATCH cx\_root INTO DATA(exc).
        CASE TYPE OF exc.
          WHEN TYPE cx\_sy\_arithmetic\_error.
            out->display( 'Arithmetic error' ).
          WHEN TYPE cx\_sy\_conversion\_error.
            out->display( 'Conversion error' ).
          WHEN OTHERS.
            out->display( 'Other error' ).
        ENDCASE.
    ENDTRY.  ENDMETHOD.
  METHOD my\_sqrt.
    DATA(sqrt) = sqrt( CONV decfloat34( num ) ).
    out->display( sqrt ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Non-specific exceptions of the superclass CX\_DYNAMIC\_CHECK can be propagated from a method my\_sqrt. The actual exception class is determined from the calling method using the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase_type.htm).