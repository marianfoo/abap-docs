---
title: "Case Distinction CASE TYPE OF for Exceptions"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm) for exception classes. Source Code  Public class definition CLASS cl_demo_case_type_of_exception DEFINITION INHERITING FROM cl_demo_classrun PUBLI
version: "latest"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_type_of_exception_abexa.htm"
abapFile: "abencase_type_of_exception_abexa.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "abencase", "type", "exception", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Case%20Distinction%20CASE%20TYPE%20OF%20for%20Exceptions%2C%20ABENCASE_TYPE_OF_EXCEPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Case Distinction CASE TYPE OF for Exceptions

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm) for exception classes.

Source Code   

\* Public class definition
CLASS cl\_demo\_case\_type\_of\_exception DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS my\_sqrt IMPORTING num TYPE any
                    RAISING   cx\_dynamic\_check.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_case\_type\_of\_exception IMPLEMENTATION.
  METHOD main.
    DATA number TYPE string VALUE -1.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
    TRY.
        my\_sqrt( number ).
      CATCH cx\_root INTO FINAL(exc).
        CASE TYPE OF exc.
          WHEN TYPE cx\_sy\_arithmetic\_error.
            out->write( 'Arithmetic error' ).
          WHEN TYPE cx\_sy\_conversion\_error.
            out->write( 'Conversion error' ).
          WHEN OTHERS.
            out->write( 'Other error' ).
        ENDCASE.
    ENDTRY.
  ENDMETHOD.
  METHOD my\_sqrt.
    FINAL(sqrt) = sqrt( CONV decfloat34( num ) ).
    out->write( sqrt ).
  ENDMETHOD.
ENDCLASS.

Description   

Non-specific exceptions of the superclass CX\_DYNAMIC\_CHECK can be propagated from a method my\_sqrt. The actual exception class is determined in the calling method using the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm).