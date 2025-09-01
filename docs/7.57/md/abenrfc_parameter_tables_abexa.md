---
title: "RFC - Dynamic Parameter Passing in sRFC"
description: |
  This example demonstrates parameter passing with parameter and exception tables for sRFC. Source Code REPORT demo_srfc_parameter_tables. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main. PRIVATE SECTION. CLASS-DATA: val_in     TYPE string, val_out    TYPE string, val_in_out TYPE str
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_parameter_tables_abexa.htm"
abapFile: "abenrfc_parameter_tables_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenrfc", "parameter", "tables", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Dynamic Parameter Passing in sRFC, ABENRFC_PARAMETER_TABLES_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC - Dynamic Parameter Passing in sRFC

This example demonstrates parameter passing with parameter and exception tables for sRFC.

Source Code   

REPORT demo\_srfc\_parameter\_tables.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      val\_in     TYPE string,
      val\_out    TYPE string,
      val\_in\_out TYPE string,
      msg        TYPE string,
      out        TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    DATA(rfm)  = \`DEMO\_RFM\_PARAMETERS\`.
    cl\_demo\_input=>request( CHANGING field = rfm ).
    FINAL(dest) = 'NONE'.
    TRY.
        rfm = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
            EXPORTING
              val       =  rfm
              whitelist = \`DEMO\_RFM\_PARAMETERS, DEMO\_RFM\_PARAMETERX\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        out->display(
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
      out->display( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->write( |{ val\_out }\\n{ val\_in\_out }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The function module DEMO\_RFM\_PARAMETERS is called using [sRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensrfc_glosry.htm "Glossary Entry"). Parameters are passed and exceptions are handled dynamically using internal tables ptab and etab.