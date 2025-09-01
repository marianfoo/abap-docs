  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Examples](javascript:call_link\('abenrfc_abexas.htm'\)) → 

RFC - Parameter Passing in sRFC and aRFC

This example demonstrates parameter passing in two RFC variants.

Source Code

REPORT demo\_rfc\_parameters.
CLASS demo\_rfc DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      callback IMPORTING p\_task TYPE clike.
  PRIVATE SECTION.
    CLASS-DATA:
      val\_in     TYPE string,
      val\_out    TYPE string,
      val\_in\_out TYPE string,
      msg        TYPE c LENGTH 80,
      out        TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo\_rfc IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    "Synchronous RFC
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    CALL FUNCTION 'DEMO\_RFM\_PARAMETERS'
      DESTINATION 'NONE'
      EXPORTING
        p\_in                  = val\_in
      IMPORTING
        p\_out                 = val\_out
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->next\_section( 'sRFC'
      )->write( |{ val\_out }\\n{ val\_in\_out }| ).
    "Asynchronous RFC
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    CALL FUNCTION 'DEMO\_RFM\_PARAMETERS'
      DESTINATION 'NONE'
      STARTING NEW TASK 'DEMO'
      CALLING demo\_rfc=>callback ON END OF TASK
      EXPORTING
        p\_in                  = val\_in
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( |Error when calling aRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    WAIT FOR ASYNCHRONOUS TASKS UNTIL val\_out IS NOT INITIAL
                                UP TO 10 SECONDS.
    out->next\_section( 'aRFC'
      )->write( |{ val\_out }\\n{ val\_in\_out }| ).
    out->display( ).
  ENDMETHOD.
  METHOD callback.
    val\_out    = \`\`.
    val\_in\_out = \`\`.
    RECEIVE RESULTS FROM FUNCTION 'DEMO\_RFM\_PARAMETERS'
      IMPORTING
        p\_out                 = val\_out
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( '|Error when receiving aRFC.\\n{ msg }|' ).
      RETURN.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_rfc=>main( ).

Description

The function module DEMO\_RFM\_PARAMETERS is called using [synchronous](javascript:call_link\('abapcall_function_destination.htm'\)) and [asynchronous](javascript:call_link\('abapcall_function_starting.htm'\)) RFC.

-   In synchronous calls, parameters are passed and applied directly in the statement CALL FUNCTION.

-   In asynchronous calls, parameters can only be passed in the statement CALL FUNCTION. Parameters are applied using the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) in a callback routine. The statement [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)) is used to wait for this routine.