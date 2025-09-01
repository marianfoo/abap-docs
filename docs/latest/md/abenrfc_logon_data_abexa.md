---
title: "RFC - Implicit Logon Data"
description: |
  This example demonstrates how the logon data of an RFC session is set implicitly. Source Code  Public class definition CLASS cl_demo_rfc_implct_logon_data DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS.  Public class
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_logon_data_abexa.htm"
abapFile: "abenrfc_logon_data_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenrfc", "logon", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Implicit%20Logon%20Data%2C%20ABENRFC_LOGON_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Implicit Logon Data

This example demonstrates how the logon data of an RFC session is set implicitly.

Source Code   

\* Public class definition
CLASS cl\_demo\_rfc\_implct\_logon\_data DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rfc\_implct\_logon\_data IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF logon\_data,
        uname       TYPE sy-uname,
        mandt       TYPE sy-mandt,
        logon\_langu TYPE sy-langu,
        langu       TYPE sy-langu,
      END OF logon\_data.
    IF cl\_abap\_syst=>get\_logon\_language( ) <> 'E'.
      SET LOCALE LANGUAGE 'E'.
    ELSE.
      SET LOCALE LANGUAGE 'D'.
    ENDIF.
    logon\_data = VALUE #(
        uname       = sy-uname
        mandt       = sy-mandt
        logon\_langu = cl\_abap\_syst=>get\_logon\_language( )
        langu       = cl\_abap\_syst=>get\_language( ) ).
    ASSERT logon\_data-langu = sy-langu.
    out->next\_section( 'Parameters of Caller'
      )->write( logon\_data ).
    CALL FUNCTION 'DEMO\_RFM\_LOGON\_DATA' DESTINATION 'NONE'
      IMPORTING
        uname       = logon\_data-uname
        mandt       = logon\_data-mandt
        logon\_langu = logon\_data-logon\_langu
        langu       = logon\_data-langu.
    out->next\_section( 'Parameters of Callee'
      )->write( logon\_data ).
  ENDMETHOD.
ENDCLASS.

Description   

A remote-enabled function module DEMO\_RFM\_LOGON\_DATA is called with the destination NONE using the RFC interface. The logon data user name, client, and logon language of the corresponding [RFC session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_context.htm) are provided implicitly. To demonstrate that the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the RFC session is set by the language of the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") of the caller, it is set to a language other than the logon language of the caller before the call with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm). In the called RFM the language of the text environment of the RFC session is also changed and is then also different to the logon language.

If the function module DEMO\_RFM\_LOGON\_DATA is called remotely again, the RFC session is reused with the existing logon data. Changing the language of the text environment again in the caller would no longer have any effect.