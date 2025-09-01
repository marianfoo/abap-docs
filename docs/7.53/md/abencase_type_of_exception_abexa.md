  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) → 

Case Distinction CASE TYPE OF for Exceptions

This example demonstrates the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) for exception classes.

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

Non-specific exceptions of the superclass CX\_DYNAMIC\_CHECK can be propagated from a method my\_sqrt. The actual exception class is determined from the calling method using the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)).