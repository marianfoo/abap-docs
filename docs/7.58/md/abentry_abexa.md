  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%2C%20TRY%2C%20ABENTRY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions, TRY

This example demonstrates the TRY control structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_try DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    DATA: result TYPE p LENGTH 8 DECIMALS 2,
          oref   TYPE REF TO cx\_root,
          text   TYPE string.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA number TYPE i.
    METHODS calculation
      IMPORTING p\_number LIKE number
      CHANGING  p\_result LIKE result
                p\_text   LIKE text
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_try IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
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
    out->write( |Final result: { result ALIGN = LEFT }| ).
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

Description   

-   If the content of number is greater than 100, the TRY control structure of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") raises an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE in the TRY block. This exception is handled by the second CATCH block of the same TRY control structure, since the subclass of the most general exception is CX\_ROOT.
-   If the content of number is 0, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.
-   If the content of number is a negative number, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since no handler is defined for this exception in this TRY control structure, the exception is propagated from the method, which is made possible by the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR using RAISING in the method interface. The CLEANUP block of the inner TRY control structure is executed first.
-   Any other exceptions are handled in the final CATCH block of the TRY control structure of the compilation unit, which catches all possible exceptions by specifying the most generic exception class CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses was not declared in the method interface, the exception CX\_SY\_NO\_HANDLER would be raised and would be handled in the final CATCH block.