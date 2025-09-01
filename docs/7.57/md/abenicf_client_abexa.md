  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ICF - ABAP as HTTP Client, ABENICF_CLIENT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ICF - ABAP as HTTP Client

This example demonstrates an [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf_glosry.htm "Glossary Entry") client object.

Source Code   

REPORT demo\_http\_client.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA query TYPE string VALUE 'SAP'.
    cl\_demo\_input=>request( CHANGING field = query ).
    cl\_http\_client=>create(
      EXPORTING
        host =    'wikipedia.org'
        service = ''
      IMPORTING
        client = FINAL(client)
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    cl\_http\_utility=>set\_request\_uri(
      request = client->request
      uri     = \`/wiki/\` && query ).
    client->send(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = FINAL(smsg) ).
      cl\_demo\_output=>display( smsg ).
      RETURN.
    ENDIF.
    client->receive(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = FINAL(rmsg) ).
      cl\_demo\_output=>display( rmsg ).
      RETURN.
    ENDIF.
    FINAL(html) = client->response->get\_cdata( ).
    cl\_demo\_output=>display\_html( html ).
    client->close( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The factory method CREATE of the class CL\_HTTP\_CLIENT is used to create a client object for the address wikipedia.org. The reference variable client of the type IF\_HTTP\_CLIENT points to this object. A specific request, which also contains the value of a user input, is added to the URI of the REQUEST object of the client object. The request is sent and the result is passed to the RESPONSE method of the client object. In this example, the HTML page produced by the requested is retrieved and displayed.

Hint

For the example to work, the proxy setting for the HTTP client must be configured correctly in transaction SICF.