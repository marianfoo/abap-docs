# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Class-Based Exceptions / Examples of Exceptions

Included pages: 4


### abenexception_abexas.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) → 

Examples of Exceptions

Continue
![Example](exa.gif "Example") [Exceptions, RAISE](javascript:call_link\('abenraise_abexa.htm'\))
![Example](exa.gif "Example") [Exceptions, TRY](javascript:call_link\('abentry_abexa.htm'\))
![Example](exa.gif "Example") [Exceptions, CATCH](javascript:call_link\('abencatch_exception_abexa.htm'\))


### abenraise_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

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


### abentry_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

Exceptions, TRY

This example demonstrates the TRY control structure.

Source Code

REPORT demo\_try.
CLASS try\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: result TYPE p LENGTH 8 DECIMALS 2,
                oref   TYPE REF TO cx\_root,
                text   TYPE string.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA number TYPE i.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS calculation
      IMPORTING  p\_number LIKE number
      CHANGING p\_result LIKE result
               p\_text   LIKE text
      RAISING  cx\_sy\_arithmetic\_error.
ENDCLASS.
CLASS try\_demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>request( CHANGING field = number ).
    out = cl\_demo\_output=>new( ).
    TRY.
        IF abs( number ) > 100.
          RAISE EXCEPTION TYPE cx\_demo\_abs\_too\_large.
        ENDIF.
        calculation( EXPORTING p\_number = number
                     CHANGING  p\_result = result
                               p\_text   = text ).
      CATCH cx\_sy\_arithmetic\_error INTO oref.
        text = oref->get\_text( ).
      CATCH cx\_root INTO oref.
        text = oref->get\_text( ).
    ENDTRY.
    IF NOT text IS INITIAL.
      out->write( text ).
    ENDIF.
    out->display( |Final result: { result ALIGN = LEFT }| ).
  ENDMETHOD.
  METHOD calculation.
    DATA l\_oref TYPE REF TO cx\_root.
    TRY.
        p\_result =  1 / p\_number.
        out->write(
          |Result of division: { p\_result ALIGN = LEFT }| ).
        p\_result = sqrt( p\_number ).
        out->write(
          |Result of square root: { p\_result ALIGN = LEFT }| ).
      CATCH cx\_sy\_zerodivide INTO l\_oref.
        p\_text = l\_oref->get\_text( ).
      CLEANUP.
        CLEAR p\_result.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  try\_demo=>main( ).

Description

-   If the content of number is greater than 100, the TRY control structure of the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") raises an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE in the TRY block. This exception is handled by the second CATCH block of the same TRY control structure, since the subclass of the most general exception is CX\_ROOT.
-   If the content of number is 0, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.
-   If the content of number is a negative number, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since no handler is defined for this exception in this TRY control structure, the exception is propagated from the method, which is made possible by the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR using RAISING in the method interface. The CLEANUP block of the inner TRY control structure is executed first.
-   Any other exceptions are handled in the final CATCH block of the TRY control structure of the compilation unit, which catches all possible exceptions by specifying the most generic exception class CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses was not declared in the method interface, the exception CX\_SY\_NO\_HANDLER would be raised and would be handled in the final CATCH block.


### abencatch_exception_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

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
-   If a resumable exception is raised, the statement RESUME can be executed during handling, which ensures that processing in the called method is continued without its CLEANUP block being executed.
