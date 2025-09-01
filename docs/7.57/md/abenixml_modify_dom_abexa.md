---
title: "Source Code"
description: |
  REPORT demo_ixml_modify_elements. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA(xml) = cl_abap_conv_codepage=>create_out( )->convert( `<text>` && `<line>aaaa</line>` && `<line>bbbb</line>` && `<line>cccc</l
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenixml_modify_dom_abexa.htm"
abapFile: "abenixml_modify_dom_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abenixml", "modify", "dom", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Modify XML Documents, ABENIXML_MODIFY_DOM_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Modify XML Documents

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
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Original XML-Data'
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
      )->write\_xml( xml
      )->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description   

XML data is parsed to a DOM object. An iterator is used to iterate across all nodes of the document. If the element is a text element, its content is transformed to uppercase. The modified document is rendered and displayed. See also the corresponding executable example for [sXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensxml_reader_writer_abexa.htm).