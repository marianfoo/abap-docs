  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Modify%20XML%20Documents%2C%20ABENIXML_MODIFY_DOM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Modify XML Documents

Modifies XML documents in DOM representation.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_modify\_elements DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_modify\_elements IMPLEMENTATION.
  METHOD main.
    DATA(xml) =
     cl\_abap\_conv\_codepage=>create\_out( )->convert(
       \`<text>\` &&
       \`<line>aaaa</line>\` &&
       \`<line>bbbb</line>\` &&
       \`<line>cccc</line>\` &&
       \`</text>\` ).
    FINAL(o) = out->begin\_section( 'Original XML-Data'
      )->write\_xml( xml ).
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(stream\_factory) = ixml->create\_stream\_factory( ).
    FINAL(document) = ixml->create\_document( ).
    IF ixml->create\_parser(
      document = document
      stream\_factory = stream\_factory
      istream = stream\_factory->create\_istream\_xstring( string = xml )
      )->parse( ) <> 0.
      RETURN.
    ENDIF.
    FINAL(iterator) = document->create\_iterator( ).
    DO.
      FINAL(node) = iterator->get\_next( ).
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
      )->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

XML data is parsed to a DOM object. An iterator is used to iterate across all nodes of the document. If the element is a text element, its content is transformed to uppercase. The modified document is rendered and displayed. See also the corresponding executable example for [sXML Library](javascript:call_link\('abensxml_reader_writer_abexa.htm'\)).