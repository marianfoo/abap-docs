  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_abexas.htm) → 

Implicit Logon Data in RFC

This example demonstrates how the logon data of an RFC session is set implicitly.

Source Code

REPORT demo\_rfc\_implicit\_logon\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'Parameters of Caller'
      )->write( logon\_data ).
    CALL FUNCTION 'DEMO\_RFM\_LOGON\_DATA' DESTINATION 'NONE'
      IMPORTING
        uname       = logon\_data-uname
        mandt       = logon\_data-mandt
        logon\_langu = logon\_data-logon\_langu
        langu       = logon\_data-langu.
    out->next\_section( 'Parameters of Callee'
      )->write( logon\_data )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A remote-enabled function module DEMO\_RFM\_LOGON\_DATA is called with the destination "NONE" using the RFC interface. The logon data user name, client, and logon language of the corresponding [RFC session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_context.htm) are provided implicitly. To demonstrate that the [logon language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the RFC session is set by the language of the [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry") of the caller, this is set before the call with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm) to a language different from the logon language of the caller. In the called RFM the language of the text environment of the RFC session is also changed and is then different to the logon language there as well.

If the function module DEMO\_RFM\_LOGON\_DATA is called remotely again, the RFC session is reused with the existing logon data. Changing the language of the text environment again in the caller would have no effect.