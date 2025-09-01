---
title: "Source Code"
description: |
  REPORT DEMO_IXML_CREATE_ELEMENTS. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA(ixml)     = cl_ixml=>create( ). DATA(document) = ixml->create_document( ). DATA(root) = document->create_element_ns( name = 'abap' pr
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_crea_elem_abexa.htm"
abapFile: "abenixml_crea_elem_abexa.htm"
keywords: ["select", "insert", "do", "method", "class", "data", "abenixml", "crea", "elem", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Create Nodes

Creates DOM nodes step by step.

Source Code

REPORT DEMO\_IXML\_CREATE\_ELEMENTS.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(ixml)     = cl\_ixml=>create( ).
    DATA(document) = ixml->create\_document( ).
    DATA(root) = document->create\_element\_ns( name = 'abap'
                                              prefix = 'asx' ).
    root->set\_attribute\_ns( name =  'asx'
                            prefix = 'xmlns'
                            value = 'http://www.sap.com/abapxml' ).
    root->set\_attribute\_ns( name =  'version'
                            value = '1.0' ).
    document->append\_child( root ).
    DATA(node1) = document->create\_element\_ns( prefix = 'asx'
                                               name = 'values' ).
    root->append\_child( node1 ).
    DATA(node2) = document->create\_element\_ns( name = 'TEXT' ).
    node1->append\_child( node2 ).
    node2->append\_child( document->create\_text( 'Hello XML' ) ).
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

Nodes are created as elements, attributes, and content and inserted into XML data. The result represents XML data in asXML format, which can be deserialized to ABAP using CALL TRANSFORMATION id.