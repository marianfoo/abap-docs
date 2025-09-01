  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [Examples for Remote Function Call](javascript:call_link\('abenrfc_abexas.htm'\)) → 

Exception Handling in RFC

This example demonstrates exception handling in RFC.

Source Code

REPORT demo\_rfc\_exceptions.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA msg TYPE c LENGTH 255.
    DATA(out) = cl\_demo\_output=>new( ).
    "Classical exception handling
    CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION'
      DESTINATION 'NONE'
      EXCEPTIONS
        system\_failure        = 1  MESSAGE msg
        communication\_failure = 2  MESSAGE msg
        OTHERS                = 3.
    CASE sy-subrc.
      WHEN 1.
        out->write( |EXCEPTION SYSTEM\_FAILURE | && msg ).
      WHEN 2.
        out->write( |EXCEPTION COMMUNICATION\_FAILURE | && msg ).
      WHEN 3.
        out->write( |EXCEPTION OTHERS| ).
    ENDCASE.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The DEMO\_RFM\_CLASSIC\_EXCEPTION function module triggers the non-class-based exception CLASSIC\_EXCEPTION.

When DEMO\_RFM\_CLASSIC\_EXCEPTION is called, EXCEPTIONS is specified and values for sy-subrc are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, sy-subrc is set to 3.