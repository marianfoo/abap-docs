  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Examples](javascript:call_link\('abenrfc_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Exception Handling, ABENRFC_EXCEPTIONS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

RFC - Exception Handling

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
    FINAL(out) = cl\_demo\_output=>new( ).
    "Classical exception handling
    CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION'
      DESTINATION 'NONE'
      EXCEPTIONS
        system\_failure        = 1  MESSAGE msg
        communication\_failure = 2  MESSAGE msg
        OTHERS                = 3.
    CASE sy-subrc.
      WHEN 1.
        out->write( \`EXCEPTION SYSTEM\_FAILURE \` && msg ).
      WHEN 2.
        out->write( \`EXCEPTION COMMUNICATION\_FAILURE \` && msg ).
      WHEN 3.
        out->write( \`EXCEPTION OTHERS\` ).
    ENDCASE.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The DEMO\_RFM\_CLASSIC\_EXCEPTION function module raises the non-class-based exception CLASSIC\_EXCEPTION.

When DEMO\_RFM\_CLASSIC\_EXCEPTION is called, EXCEPTIONS is specified and values for sy-subrc are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, sy-subrc is set to 3.