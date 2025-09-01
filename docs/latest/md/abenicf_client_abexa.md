---
title: "ICF - ABAP as HTTP Client"
description: |
  This example demonstrates an ICF(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm 'Glossary Entry') client object. Source Code  Public class definition CLASS cl_demo_http_client DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTIO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_client_abexa.htm"
abapFile: "abenicf_client_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenicf", "client", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ICF%20-%20ABAP%20as%20HTTP%20Client%2C%20ABENICF_CLIENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ICF - ABAP as HTTP Client

This example demonstrates an [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm "Glossary Entry") client object.

Source Code   

\* Public class definition
CLASS cl\_demo\_http\_client DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_http\_client IMPLEMENTATION.
  METHOD main.
    DATA query TYPE string VALUE 'SAP'.
    cl\_demo\_input=>new( )->request( CHANGING field = query ).
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
      out->write( smsg ).
      RETURN.
    ENDIF.
    client->receive(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = FINAL(rmsg) ).
      out->write( rmsg ).
      RETURN.
    ENDIF.
    FINAL(html) = client->response->get\_cdata( ).
    out->write\_html( html ).
    client->close( ).
  ENDMETHOD.
ENDCLASS.

Description   

The factory method CREATE of the class CL\_HTTP\_CLIENT is used to create a client object for the address wikipedia.org. The reference variable client of the type IF\_HTTP\_CLIENT points to this object. A specific request, which also contains the value of a user input, is added to the URI of the REQUEST object of the client object. The request is sent and the result is passed to the RESPONSE method of the client object. In this example, the HTML page produced by the requested is retrieved and displayed.

Hint

For the example to work, the proxy setting for the HTTP client must be configured correctly in transaction SICF.