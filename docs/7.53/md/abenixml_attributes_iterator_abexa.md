  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Iterator for Attributes

Accesses the attributes of an element list in DOM using an iterator.

Source Code

REPORT demo\_ixml\_attribute\_iterator.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
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
    DATA(iterator) = attributes->create\_iterator( ).
    DO.
      DATA(attribute) = iterator->get\_next( ).
      IF attribute IS INITIAL.
        EXIT.
      ENDIF.
      cl\_demo\_output=>write\_text( |{ attribute->get\_name( ) } | &&
                                  |{ attribute->get\_value( ) }| ).
    ENDDO.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, an iterator is created for the attributes of the first subnode of the root node and used for iterations.