  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Examples](javascript:call_link\('abenrfc_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Dynamic%20Parameter%20Passing%20in%20sRFC%2C%20ABENRFC_PARAMETER_TABLES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

RFC - Dynamic Parameter Passing in sRFC

This example demonstrates parameter passing with parameter and exception tables for sRFC.

Source Code   

\* Public class definition
CLASS cl\_demo\_srfc\_parameter\_tables DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
  PRIVATE SECTION.
    DATA:
      val\_in     TYPE string,
      val\_out    TYPE string,
      val\_in\_out TYPE string,
      msg        TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_srfc\_parameter\_tables IMPLEMENTATION.
  METHOD main.
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    DATA(rfm)  = \`DEMO\_RFM\_PARAMETERS\`.
    cl\_demo\_input=>new( )->request( CHANGING field = rfm ).
    FINAL(dest) = 'NONE'.
    TRY.
        rfm = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
            EXPORTING
              val       =  rfm
              whitelist = \`DEMO\_RFM\_PARAMETERS, DEMO\_RFM\_PARAMETERX\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        out->write(
          \`Call either DEMO\_RFM\_PARAMETERS OR DEMO\_RFM\_PARAMETERX\` ).
        RETURN.
    ENDTRY.
    DATA: ptab TYPE abap\_func\_parmbind\_tab,
          etab TYPE abap\_func\_excpbind\_tab.
    ptab = VALUE #( ( name  = 'P\_IN'
                      kind  = abap\_func\_exporting
                      value = REF #( val\_in ) )
                    ( name  = 'P\_OUT'
                      kind  = abap\_func\_importing
                      value = REF #( val\_out ) )
                    ( name  = 'P\_IN\_OUT'
                      kind  = abap\_func\_changing
                      value = REF #( val\_in\_out ) ) ).
    etab = VALUE #( ( name = 'SYSTEM\_FAILURE'
                      value = 2
                      message = REF #( msg ) )
                    ( name = 'COMMUNICATION\_FAILURE'
                      value = 4
                      message = REF #( msg ) ) ).
    CALL FUNCTION rfm
      DESTINATION dest
      PARAMETER-TABLE ptab
      EXCEPTION-TABLE etab.
    IF sy-subrc <> 0.
      out->write( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->write( |{ val\_out }\\n{ val\_in\_out }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The function module DEMO\_RFM\_PARAMETERS is called using [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry"). Parameters are passed and exceptions are handled dynamically using internal tables ptab and etab.