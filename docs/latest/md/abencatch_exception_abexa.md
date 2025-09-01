  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%2C%20CATCH%2C%20ABENCATCH_EXCEPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions, CATCH

This example demonstrates how class-based exceptions are caught.

Source Code   

\* Public class definition
CLASS cl\_demo\_catch\_exception DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS lcx\_exception DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS exc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: in TYPE REF TO if\_demo\_input,
    out TYPE REF TO if\_demo\_output.
    CLASS-DATA dref TYPE REF TO data.
    CLASS-DATA: resumable TYPE abap\_bool VALUE abap\_false,
    before\_unwind TYPE abap\_bool VALUE abap\_false,
    resume TYPE abap\_bool VALUE abap\_false.
    CLASS-METHODS: main IMPORTING out TYPE REF TO if\_demo\_output,
    meth1 RAISING lcx\_exception,
    meth2 RAISING RESUMABLE(lcx\_exception).
ENDCLASS.
CLASS exc\_demo IMPLEMENTATION.
  METHOD main.
    exc\_demo=>out = out.
    in = cl\_demo\_input=>new( ).
    in->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'RAISE RESUMABLE'
    CHANGING field = resumable
    )->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'CATCH BEFORE UNWIND'
    CHANGING field = before\_unwind
    )->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'RESUME'
    CHANGING field = resume
    )->request( ).
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
          IF dref IS BOUND.
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
          IF dref IS BOUND.
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
  ENDMETHOD.
  METHOD meth1.
    DATA loc TYPE i.
    dref = REF #( loc ).
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
    dref = REF #( loc ).
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
\* Public class implementation
CLASS cl\_demo\_catch\_exception IMPLEMENTATION.
  METHOD main.
    exc\_demo=>main( out ).
  ENDMETHOD.
ENDCLASS.

Description   

The method meth1 raises a non-resumable exception and the method meth2 raises a resumable exception that is handled in the TRY control structures of the method main using CATCH.

-   If handled without BEFORE UNWIND, the CLEANUP block is executed in both cases before handling and the context of the called method does not exist during handling.
-   If handled with BEFORE UNWIND, the context of the called method exists in both cases during handling and the CLEANUP block is executed after handling.
-   If a resumable exception is raised, the statement RESUME can be executed during handling, which ensures that processing in the called method is continued without its CLEANUP block being executed.