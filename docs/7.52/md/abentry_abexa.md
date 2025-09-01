  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

Exceptions, TRY

This example demonstrates the TRYcontrol structure.

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

-   If the content of number is larger than 100, in the TRY block the TRY control structure of the [framework program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") will trigger an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE. This exception is handled by the second CATCH block of the same TRY control structure since the subclass of the most general exception is CX\_ROOT.

-   If the content of number is 0, the runtime environment in the TRY block of the TRY control structure of the called method calculation triggers an exception of the predfined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.

-   If the content of number is a negative number, the runtime environment in the TRY block of the TRY control structure of the called method calculation triggers an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since in this TRY control structure there is no handler defined for this exception, the exception is propagated from the method - which is possible through the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR with RAISING in the method interface. Beforehand, the CLEANUP block of the inner TRY control structure is executed.

-   Other possible exceptions are handled in the last CATCH block of the TRY control structure of the framework program. This block catches all possible exceptions through the specification of the most general exception class CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses is not declared in the method interface, you would have the exception CX\_SY\_NO\_HANDLER, which would be handled in the last CATCH block.