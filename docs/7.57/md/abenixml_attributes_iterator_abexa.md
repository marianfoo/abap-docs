  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Iterator for Attributes, ABENIXML_ATTRIBUTES_ITERATOR_ABEXA, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Iterator for Attributes

Accesses the attributes of an element list in DOM using an iterator.

Source Code   

REPORT demo\_ixml\_attribute\_iterator.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
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