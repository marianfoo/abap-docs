---
title: "Source Code"
description: |
  REPORT DEMO_IXML_CREATE_SIMPLE_ELEM. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. FINAL(ixml)     = cl_ixml=>create( ). FINAL(document) = ixml->create_document( ). FINAL(root) = document->create_simple_element_ns( p
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenixml_crea_simple_elem_abexa.htm"
abapFile: "abenixml_crea_simple_elem_abexa.htm"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "abenixml", "crea", "simple", "elem", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Create Simple Elements, ABENIXML_CREA_SIMPLE_ELEM_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Create Simple Elements

Creates single elements in DOM.

Source Code   

REPORT DEMO\_IXML\_CREATE\_SIMPLE\_ELEM.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    FINAL(ixml)     = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    FINAL(root) = document->create\_simple\_element\_ns(
                   prefix = 'asx'
                   name = 'abap'
                   parent = document ).
    root->set\_attribute\_ns( prefix = 'xmlns'
                            name = 'asx'
                            value = 'http://www.sap.com/abapxml' ).
    root->set\_attribute\_ns( name =  'version'
                            value = '1.0' ).
    FINAL(node1) = document->create\_simple\_element\_ns(
                    prefix = 'asx'
                    name = 'values'
                    parent = root ).
    document->create\_simple\_element\_ns(
                name = 'TEXT'
                value = 'Hello XML'
                parent = node1 ).
    DATA xml\_string TYPE string.
    ixml->create\_renderer( document = document
                           ostream  = ixml->create\_stream\_factory(
                                        )->create\_ostream\_cstring(
                                             string = xml\_string )
                                               )->render( ).
    cl\_demo\_output=>write\_xml( xml\_string ).
    DATA result TYPE string.
    CALL TRANSFORMATION id SOURCE XML xml\_string
                           RESULT  text = result.
    cl\_demo\_output=>write\_data( result ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description   

As in the executable example [Creating Nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenixml_crea_elem_abexa.htm), but using the method CREATE\_SIMPLE\_ELEMENT\_NS to create elements with content and insert them.