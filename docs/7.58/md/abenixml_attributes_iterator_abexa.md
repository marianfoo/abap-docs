  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Iterator%20for%20Attributes%2C%20ABENIXML_ATTRIBUTES_ITERATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

iXML - Iterator for Attributes

Accesses the attributes of an element list in DOM using an iterator.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_attribute\_itrtr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_attribute\_itrtr IMPLEMENTATION.
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
    FINAL(child) = element->get\_first\_child( ).
    FINAL(attributes) = child->get\_attributes( ).
    FINAL(iterator) = attributes->create\_iterator( ).
    DO.
      FINAL(attribute) = iterator->get\_next( ).
      IF attribute IS INITIAL.
        EXIT.
      ENDIF.
      out->write\_text( |{ attribute->get\_name( ) } | &&
                                  |{ attribute->get\_value( ) }| ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, an iterator is created for the attributes of the first subnode of the root node and used for iterations.