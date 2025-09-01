---
title: "Source Code"
description: |
  REPORT demo_ixml_filter_iterator. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA source_tab TYPE TABLE OF i. source_tab = VALUE #( FOR j = 1 UNTIL j > 10 ( ipow( base = 2 exp = j ) ) ). DATA(ixml) = cl_ixml=>create(
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_filter_iterator_abexa.htm"
abapFile: "abenixml_filter_iterator_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenixml", "filter", "iterator", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Iterator Filters

Filtered access to nodes in DOM using an iterator.

Source Code

REPORT demo\_ixml\_filter\_iterator.
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
    DATA(iterator) = document->create\_iterator\_filtered(
                      document->create\_filter\_and(
                        filter1 = document->create\_filter\_node\_type(
                          node\_types = if\_ixml\_node=>co\_node\_element )
                        filter2 = document->create\_filter\_name\_ns(
                          name = 'item' ) ) ).
    DATA target\_tab LIKE source\_tab.
    DO.
      DATA(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    cl\_demo\_output=>display( target\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation. An iterator is created for the entire document that is linked with a filter. The filter is an "and" join between two filters and selects by node type and name. The iterator only returns the selected nodes.