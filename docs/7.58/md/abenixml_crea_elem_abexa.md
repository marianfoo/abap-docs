  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Create%20Nodes%2C%20ABENIXML_CREA_ELEM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Create Nodes

Creates DOM nodes step by step.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_create\_elmnts DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_create\_elmnts IMPLEMENTATION.
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
    out->write\_xml( xml\_string ).
    DATA result TYPE string.
    CALL TRANSFORMATION id SOURCE XML xml\_string
                           RESULT  text = result.
    out->write\_data( result ).
  ENDMETHOD.
ENDCLASS.

Description   

Nodes are created as elements, attributes, and content and inserted into XML data. The result represents XML data in asXML format, which can be deserialized to ABAP using CALL TRANSFORMATION id.