---
title: "Exceptions, RAISE"
description: |
  This example demonstrates the statement RAISE EXCEPTION. Source Code REPORT demo_raise_exception. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: oref    TYPE REF TO cx_demo_constructor, text     TYPE string, position TYPE i. TRY
version: "7.56"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenraise_abexa.htm"
abapFile: "abenraise_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "exception-handling", "abenraise", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_abexas.htm) → 

Exceptions, RAISE

This example demonstrates the statement RAISE EXCEPTION.

Source Code

REPORT demo\_raise\_exception.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: oref    TYPE REF TO cx\_demo\_constructor,
          text     TYPE string,
          position TYPE i.
    TRY.
        TRY.
            RAISE EXCEPTION TYPE cx\_demo\_constructor
              EXPORTING
                my\_text = sy-repid.
          CATCH cx\_demo\_constructor INTO oref.
            text = oref->get\_text( ).
            oref->get\_source\_position(
              IMPORTING  source\_line  = position ).
            cl\_demo\_output=>WRITE\_text( |{ position } { text }| ).
            RAISE EXCEPTION oref.
        ENDTRY.
      CATCH cx\_demo\_constructor INTO oref.
        text = oref->get\_text( ).
        oref->get\_source\_position(
          IMPORTING source\_line  = position ).
        cl\_demo\_output=>WRITE\_text( |{ position } { text }| ).
    ENDTRY.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows the two variants of the statement RAISE EXCEPTION. The first statement raises an exception of the class CX\_DEMO\_CONSTRUCTOR in the inner TRY block, creates the relevant object, and passes the program name to the instance constructor. The inner CATCH block handles the exception, produces the exception text as output and raises the exception again without creating a new object. The outer CATCH block handles the exception again. The class CX\_DEMO\_CONSTRUCTOR is defined in such a way that the passed program name appears in the exception text. The generated instance constructor ensures this.

The output of the line number in which the exception was raised indicates that, when the existing exception object was reused, its information was changed.