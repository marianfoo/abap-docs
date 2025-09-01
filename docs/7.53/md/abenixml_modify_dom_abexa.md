  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Modify XML Documents

Modifies XML documents in DOM representation.

Source Code

REPORT demo\_ixml\_modify\_elements.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(xml) =
     cl\_abap\_conv\_codepage=>create\_out( )->convert(
       \`<text>\` &&
       \`<line>aaaa</line>\` &&
       \`<line>bbbb</line>\` &&
       \`<line>cccc</line>\` &&
       \`</text>\` ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Original XML-Data'
      )->write\_xml( xml ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(document) = ixml->create\_document( ).
    IF ixml->create\_parser(
      document = document
      stream\_factory = stream\_factory
      istream = stream\_factory->create\_istream\_xstring( string = xml )
      )->parse( ) <> 0.
      RETURN.
    ENDIF.
    DATA(iterator) = document->create\_iterator( ).
    DO.
      DATA(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      IF node->get\_type( ) = if\_ixml\_node=>co\_node\_text.
        node->set\_value( to\_upper( node->get\_value( ) ) ).
      ENDIF.
    ENDDO.
    CLEAR xml.
    document->render(
      ostream = ixml->create\_stream\_factory(
      )->create\_ostream\_xstring(
      string = xml ) ).
    out->next\_section( 'Modified XML-Data'
      )->write\_xml( xml
      )->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is parsed to a DOM object. An iterator is used to iterate across all nodes of the document. If the element in question is a text element, its content is transformed to uppercase. The modified document is rendered and displayed. See also the corresponding executable example for [sXML Library](javascript:call_link\('abensxml_reader_writer_abexa.htm'\)).