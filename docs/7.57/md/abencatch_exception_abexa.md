  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exceptions, CATCH, ABENCATCH_EXCEPTION_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Exceptions, CATCH

This example demonstrates how class-based exceptions are caught.

Source Code   

REPORT demo\_catch\_exception.
FINAL(in) = cl\_demo\_input=>new( ).
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
-   If a resumable exception is raised, the statement RESUME can be executed during handling, which ensures that processing in the called method is continued without its CLEANUP block being executed.