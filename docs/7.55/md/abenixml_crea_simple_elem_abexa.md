  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

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
    DATA(ixml)     = cl\_ixml=>create( ).
    DATA(document) = ixml->create\_document( ).
    DATA(root) = document->create\_simple\_element\_ns(
                   prefix = 'asx'
                   name = 'abap'
                   parent = document ).
    root->set\_attribute\_ns( prefix = 'xmlns'
                            name = 'asx'
                            value = 'http://www.sap.com/abapxml' ).
    root->set\_attribute\_ns( name =  'version'
                            value = '1.0' ).
    DATA(node1) = document->create\_simple\_element\_ns(
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

As in the executable example [Creating Nodes](javascript:call_link\('abenixml_crea_elem_abexa.htm'\)), but using the method CREATE\_SIMPLE\_ELEMENT\_NS to create elements with content and insert them.