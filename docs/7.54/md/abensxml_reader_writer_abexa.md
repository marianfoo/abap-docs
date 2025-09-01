---
title: "Source Code"
description: |
  REPORT demo_sxml_reader_writer. CLASS sxml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS sxml_demo IMPLEMENTATION. METHOD main. DATA(xml) = cl_abap_conv_codepage=>create_out( )->convert( `<text>` && `<line>aaaa</line>` && `<line>bbbb</line>` && `<line>cccc</lin
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_reader_writer_abexa.htm"
abapFile: "abensxml_reader_writer_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "abensxml", "reader", "writer", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Modify XML Data

Reads, modifies, and writes to XML data.

Source Code

REPORT demo\_sxml\_reader\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
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
    DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).
    DATA(writer) = CAST if\_sxml\_writer(
                          cl\_sxml\_string\_writer=>create( ) ).
    DO.
      DATA(node) = reader->read\_next\_node( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      IF node IS INSTANCE OF if\_sxml\_value\_node.
        DATA(value\_node) = CAST if\_sxml\_value\_node( node ).
        IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text.
          value\_node->set\_value(
            to\_upper( value\_node->get\_value( ) ) ).
        ENDIF.
      ENDIF.
      writer->write\_node( node ).
    ENDDO.
    out->next\_section( 'Modified XML-Data'
      )->write\_xml(
        CAST cl\_sxml\_string\_writer( writer )->get\_output( )
      )->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

In a loop, XML data is [parsed using object-oriented methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_parse_oo.htm). If the node is a character-like value node, the value in the associated object is transformed to uppercase letters. All read nodes and any modified nodes are [rendered using object-oriented methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_render_oo.htm) in the same loop. The result is XML data in which all literal text elements are in uppercase letters. See also the corresponding [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenixml_modify_dom_abexa.htm) for the iXML Library.

Note

Any parts of XML data can be modified in a similar way. For example, the functions [to\_mixed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_functions.htm), [from\_mixed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_functions.htm) can be used to convert the names of XML elements between different naming conventions.