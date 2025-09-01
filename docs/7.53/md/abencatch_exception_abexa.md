---
title: "Exceptions, CATCH"
description: |
  This example demonstrates how class-based exceptions are caught. Source Code REPORT demo_catch_exception. DATA(in) = cl_demo_input=>new( ). DATA: resumable     TYPE abap_bool VALUE abap_false, before_unwind TYPE abap_bool VALUE abap_false, resume        TYPE abap_bool VALUE abap_false. in
version: "7.53"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatch_exception_abexa.htm"
abapFile: "abencatch_exception_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "exception-handling", "abencatch", "exception", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_abexas.htm) → 

Exceptions, CATCH

This example demonstrates how class-based exceptions are caught.

Source Code

REPORT demo\_catch\_exception.
DATA(in) = cl\_demo\_input=>new( ).
DATA: resumable     TYPE abap\_bool VALUE abap\_false,
      before\_unwind TYPE abap\_bool VALUE abap\_false,
      resume        TYPE abap\_bool VALUE abap\_false.
in->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'RAISE RESUMABLE'
               CHANGING  field = resumable
)->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'CATCH BEFORE UNWIND'
               CHANGING  field = before\_unwind
)->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'RESUME'
               CHANGING  field = resume
)->request( ).
CLASS lcx\_exception DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS exc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS: main,
      meth1 RAISING lcx\_exception,
      meth2 RAISING RESUMABLE(lcx\_exception).
ENDCLASS.
FIELD-SYMBOLS <fs> TYPE any.
CLASS exc\_demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    DATA exc TYPE REF TO lcx\_exception.
    IF before\_unwind = abap\_false.
      TRY.
          out->write( 'Trying method call' ).
          IF resumable = abap\_false.
            exc\_demo=>meth1( ).
          ELSEIF resumable = abap\_true.
            exc\_demo=>meth2( ).
          ENDIF.
        CATCH lcx\_exception.
          IF <fs> IS ASSIGNED.
            out->write( 'Context of method available' ).
          ELSE.
            out->write( 'Context of method not available' ).
          ENDIF.
      ENDTRY.
      out->write( 'Continue after main TRY block' ).
    ELSEIF before\_unwind = abap\_true.
      TRY.
          out->write( 'Trying method call' ).
          IF resumable = abap\_false.
            exc\_demo=>meth1( ).
          ELSEIF resumable = abap\_true.
            exc\_demo=>meth2( ).
          ENDIF.
        CATCH BEFORE UNWIND lcx\_exception INTO exc.
          IF <fs> IS ASSIGNED.
            out->write( 'Context of method available' ).
          ELSE.
            out->write( 'Context of method not available' ).
          ENDIF.
          IF resume = abap\_true.
            IF exc->is\_resumable = abap\_true.
              RESUME.
            ELSE.
              out->write( 'Resumption not possible' ).
            ENDIF.
          ENDIF.
      ENDTRY.
      out->write( 'Continue after main TRY block' ).
    ENDIF.
    out->display( ).
  ENDMETHOD.
  METHOD meth1.
    DATA loc TYPE i.
    ASSIGN loc TO <fs>.
    TRY.
        out->write( 'Raising non-resumable exception' ).
        RAISE EXCEPTION TYPE lcx\_exception.
        out->write( 'Never executed' ).
      CLEANUP.
        out->write( 'Cleanup in method' ).
    ENDTRY.
    out->write( 'Continue after TRY block in method' ).
  ENDMETHOD.
  METHOD meth2.
    DATA loc TYPE i.
    ASSIGN loc TO <fs>.
    TRY.
        out->write( 'Raising resumable exception' ).
        RAISE RESUMABLE EXCEPTION TYPE lcx\_exception.
        out->write( 'Resuming method' ).
      CLEANUP.
        out->write( 'Cleanup in method' ).
    ENDTRY.
    out->write( 'Continue after TRY block in method' ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  exc\_demo=>main( ).

Description

The method meth1 raises a non-resumable exception and the method meth2 raises a resumable exception that is handled in the TRY control structures of the method main using CATCH.

-   If handled without BEFORE UNWIND, the CLEANUP block is executed in both cases before handling and the context of the called method does not exist during handling.

-   If handled with BEFORE UNWIND, the context of the called method exists in both cases during handling and the CLEANUP block is executed after handling.

-   When a resumable exception is raised, the statement RESUME can be executed during handling. This statement makes sure that processing in the called method is continued without its CLEANUP block being executed.