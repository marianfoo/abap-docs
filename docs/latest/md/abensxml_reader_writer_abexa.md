  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Modifying%20XML%20Data%2C%20ABENSXML_READER_WRITER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Modifying XML Data

Reads, modifies, and writes to XML data.

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_reader\_writer DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_reader\_writer IMPLEMENTATION.
  METHOD main.
    FINAL(xml) =
     cl\_abap\_conv\_codepage=>create\_out( )->convert(
       \`<text>\` &&
       \`<line>aaaa</line>\` &&
       \`<line>bbbb</line>\` &&
       \`<line>cccc</line>\` &&
       \`</text>\` ).
    out->begin\_section( 'Original XML-Data'
      )->write\_xml( xml ).
    FINAL(reader) = cl\_sxml\_string\_reader=>create( xml ).
    FINAL(writer) = CAST if\_sxml\_writer(
                          cl\_sxml\_string\_writer=>create( ) ).
    DO.
      FINAL(node) = reader->read\_next\_node( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      IF node IS INSTANCE OF if\_sxml\_value\_node.
        FINAL(value\_node) = CAST if\_sxml\_value\_node( node ).
        IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text.
          value\_node->set\_value(
            to\_upper( value\_node->get\_value( ) ) ).
        ENDIF.
      ENDIF.
      writer->write\_node( node ).
    ENDDO.
    out->next\_section( 'Modified XML-Data'
      )->write\_xml(
        CAST cl\_sxml\_string\_writer( writer )->get\_output( ) ).
  ENDMETHOD.
ENDCLASS.

Description   

In a loop, XML data is [parsed using object-oriented methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_parse_oo.htm). If the node has a character-like value, the value in the associated object is transformed to uppercase letters. All read nodes and any modified nodes are [rendered using object-oriented methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_oo.htm) in the same loop. The result is XML data in which all literal text elements are in uppercase letters. See also the corresponding [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenixml_modify_dom_abexa.htm) for the iXML Library.

Hint

Any parts of XML data can be modified in a similar way. For example, the functions [to\_mixed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm), [from\_mixed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm) can be used to convert the names of XML elements between different naming conventions.