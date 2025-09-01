  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Create Nodes, ABENIXML_CREA_ELEM_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

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
    FINAL(ixml)     = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    FINAL(root) = document->create\_element\_ns( name = 'abap'
                                              prefix = 'asx' ).
    root->set\_attribute\_ns( name =  'asx'
                            prefix = 'xmlns'
                            value = 'http://www.sap.com/abapxml' ).
    root->set\_attribute\_ns( name =  'version'
                            value = '1.0' ).
    document->append\_child( root ).
    FINAL(node1) = document->create\_element\_ns( prefix = 'asx'
                                               name = 'values' ).
    root->append\_child( node1 ).
    FINAL(node2) = document->create\_element\_ns( name = 'TEXT' ).
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