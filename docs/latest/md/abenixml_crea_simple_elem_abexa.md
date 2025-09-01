  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Create%20Simple%20Elements%2C%20ABENIXML_CREA_SIMPLE_ELEM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Create Simple Elements

Creates single elements in DOM.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_create\_simple\_elm DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_create\_simple\_elm IMPLEMENTATION.
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
    out->write\_xml( xml\_string ).
    DATA result TYPE string.
    CALL TRANSFORMATION id SOURCE XML xml\_string
                           RESULT  text = result.
    out->write\_data( result ).
  ENDMETHOD.
ENDCLASS.

Description   

As in the executable example [Creating Nodes](javascript:call_link\('abenixml_crea_elem_abexa.htm'\)), but using the method CREATE\_SIMPLE\_ELEMENT\_NS to create elements with content and insert them.