  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib.htm) →  [iXML Library, Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML Library, Access Attributes

Accesses the attributes of the elements in a DOM.

Source Code

REPORT demo\_ixml\_access\_attributes.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(ixml)           = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`                                        &&
      \`  <text1 format="bold"   level="1">aaa</text1>\` &&
      \`  <text2 format="italic" level="2">bbb</text2>\` &&
      \`  <text3 format="arial"  level="3">ccc</text3>\` &&
      \`</texts>\` ).
    DATA(document)       = ixml->create\_document( ).
    DATA(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    DATA(rc) = parser->parse( ).
    IF rc <> ixml\_mr\_parser\_ok.
      ... "Error handling
      RETURN.
    ENDIF.
    DATA(element) = document->get\_root\_element( ).
    DATA(child) = element->get\_first\_child( ).
    DATA(attributes) = child->get\_attributes( ).
    DO attributes->get\_length( ) TIMES.
      DATA(attribute) = attributes->get\_item( sy-index - 1 ).
      out->write( |{ attribute->get\_name( ) } | &&
                  |{ attribute->get\_value( ) }| ).
    ENDDO.
    out->line( ).
    child = child->get\_next( ).
    attributes = child->get\_attributes( ).
    attribute = attributes->get\_named\_item\_ns( name = 'format' ).
    out->write( |{ attribute->get\_name( ) } | &&
                |{ attribute->get\_value( ) }| ).
    attribute = attributes->get\_named\_item\_ns( name = 'level' ).
    out->write( |{ attribute->get\_name( ) } | &&
                |{ attribute->get\_value( ) }| ).
    out->line( ).
    child = child->get\_next( ).
    attribute = CAST if\_ixml\_element( child
                       )->get\_attribute\_node\_ns( name = 'format' ).
    out->write( |{ attribute->get\_name( ) } | &&
                |{ attribute->get\_value( ) }| ).
    out->write( |level { CAST if\_ixml\_element(
                   child )->get\_attribute\_ns( name = 'level' ) }| ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, the root node and its subnodes are extracted. Various methods for accessing the attributes of subnodes are displayed.