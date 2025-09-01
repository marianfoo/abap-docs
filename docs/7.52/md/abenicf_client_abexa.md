---
title: "ABAP as HTTP Client"
description: |
  This example demonstrates an ICF(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_glosry.htm 'Glossary Entry') client object. Source Code REPORT demo_http_client. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA q
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_client_abexa.htm"
abapFile: "abenicf_client_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenicf", "client", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_abexas.htm) → 

ABAP as HTTP Client

This example demonstrates an [ICF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_glosry.htm "Glossary Entry") client object.

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
        client = DATA(client)
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
        IMPORTING message = DATA(smsg) ).
      cl\_demo\_output=>display( smsg ).
      RETURN.
    ENDIF.
    client->receive(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = DATA(rmsg) ).
      cl\_demo\_output=>display( rmsg ).
      RETURN.
    ENDIF.
    DATA(html) = client->response->get\_cdata( ).
    cl\_demo\_output=>display\_html( html ).
    client->close( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The factory method CREATE of the class CL\_HTTP\_CLIENT is used to create a client object for the address wikipedia.org. The reference variable client of the type IF\_HTTP\_CLIENT points to this object. A specific request, which also contains the value of a user input, is added to the URI of the REQUEST object of the client object. The request is sent and the result is passed to the RESPONSE object of the client object. In the case in question, the HTML page produced by the requested is retrieved and displayed.

Note

The proxy setting for the HTTP client must be configured correctly in transaction SICF before this example can work.