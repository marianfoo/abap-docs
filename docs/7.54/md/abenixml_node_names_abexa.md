---
title: "Source Code"
description: |
  REPORT demo_ixml_access_names. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA source_tab TYPE TABLE OF i. source_tab = VALUE #( FOR j = 1 UNTIL j > 10 ( ipow( base = 2 exp = j ) ) ). DATA(ixml) = cl_ixml=>create( ).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenixml_node_names_abexa.htm"
abapFile: "abenixml_node_names_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenixml", "node", "names", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib.htm) →  [iXML Library, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML Library, Access Using Name

Accesses elements of a DOM using the name.

Source Code

REPORT demo\_ixml\_access\_names.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    DATA(element)  = document->find\_from\_name\_ns( name = 'TEXT' ).
    IF element IS NOT INITIAL.
      cl\_demo\_output=>write\_data( element->get\_value( ) ).
    ENDIF.
    DATA(elements) =
      document->get\_elements\_by\_tag\_name( name = 'item' ).
    DATA target\_tab LIKE source\_tab.
    DO elements->get\_length( ) TIMES.
      DATA(node) = elements->get\_item( sy-index - 1 ).
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    cl\_demo\_output=>display( target\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation.

In the XML document, first the element TEXT is found and then its value displayed. All elements item are then collected and their values appended to an internal table in a loop, which then becomes the output.