  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Access%20to%20Attributes%2C%20ABENIXML_ATTRIBUTES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Access to Attributes

Accesses the attributes of the elements in a DOM.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_access\_attributes DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_access\_attributes IMPLEMENTATION.
  METHOD main.
    FINAL(ixml)           = cl\_ixml=>create( ).
    FINAL(stream\_factory) = ixml->create\_stream\_factory( ).
    FINAL(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`                                        &&
      \`  <text1 format="bold"   level="1">aaa</text1>\` &&
      \`  <text2 format="italic" level="2">bbb</text2>\` &&
      \`  <text3 format="arial"  level="3">ccc</text3>\` &&
      \`</texts>\` ).
    FINAL(document)       = ixml->create\_document( ).
    FINAL(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    FINAL(rc) = parser->parse( ).
    IF rc <> ixml\_mr\_parser\_ok.
      ... "Error handling
      RETURN.
    ENDIF.
    FINAL(element) = document->get\_root\_element( ).
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
  ENDMETHOD.
ENDCLASS.

Description   

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, the root node and its subnodes are read. Various methods for accessing the attributes of subnodes are displayed.