---
title: "RFC - Exception Handling"
description: |
  This example demonstrates exception handling in RFC. Source Code  Public class definition CLASS cl_demo_rfc_exceptions DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS.  Public class implementation CLASS cl_demo_rfc_e
version: "latest"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_exceptions_abexa.htm"
abapFile: "abenrfc_exceptions_abexa.htm"
keywords: ["do", "if", "case", "method", "class", "data", "exception-handling", "abenrfc", "exceptions", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Exception%20Handling%2C%20ABENRFC_EXCEPTIONS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Exception Handling

This example demonstrates exception handling in RFC.

Source Code   

\* Public class definition
CLASS cl\_demo\_rfc\_exceptions DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rfc\_exceptions IMPLEMENTATION.
  METHOD main.
    DATA msg TYPE c LENGTH 255.
    "Classical exception handling
    CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION'
      DESTINATION 'SELF'
      EXCEPTIONS
        system\_failure        = 1 MESSAGE msg
        communication\_failure = 2 MESSAGE msg
        OTHERS                = 3.
    CASE sy-subrc.
      WHEN 1.
        out->write( \`EXCEPTION SYSTEM\_FAILURE \` && msg ).
      WHEN 2.
        out->write( \`EXCEPTION COMMUNICATION\_FAILURE \` && msg ).
      WHEN 3.
        out->write( \`EXCEPTION OTHERS\` ).
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

Description   

The DEMO\_RFM\_CLASSIC\_EXCEPTION function module raises the non-class-based exception CLASSIC\_EXCEPTION.

When DEMO\_RFM\_CLASSIC\_EXCEPTION is called, EXCEPTIONS is specified and values for sy-subrc are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, sy-subrc is set to 3.