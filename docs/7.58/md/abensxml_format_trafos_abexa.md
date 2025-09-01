  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Transformation%20of%20Formats%2C%20ABENSXML_FORMAT_TRAFOS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Transformation of Formats

This example demonstrates the transformation of various [XML formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_formats.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop IMPLEMENTATION.
  METHOD main.
    "XML 1.0
    FINAL(xml\_reader) = cl\_sxml\_string\_reader=>create(
                         cl\_abap\_conv\_codepage=>create\_out( )->convert(
                          \`<text><!-- comment -->blah</text>\` ) ).
    "XML 1.0 to Binary XML
    FINAL(binary\_writer) = cl\_sxml\_string\_writer=>create(
                            type = if\_sxml=>co\_xt\_binary  ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( binary\_writer ).
    FINAL(binary\_xml) =  binary\_writer->get\_output( ).
    "Binary XML to XOP
    FINAL(binary\_reader) = cl\_sxml\_string\_reader=>create( binary\_xml ).
    FINAL(xop\_writer) = cl\_sxml\_xop\_writer=>create(  ).
    binary\_reader->next\_node( ).
    binary\_reader->skip\_node( xop\_writer ).
    FINAL(xop\_package) = xop\_writer->get\_output( ).
    out->write\_xml( xop\_package-xop\_document ).
  ENDMETHOD.
ENDCLASS.

Description   

-   An XML string reader is filled with a byte string that contains XML data in XML 1.0 format and UTF-8 representation. This data is produced by the conversion of a text string from the current code page.
-   The method SKIP\_NODE is used to pass the XML data of the reader to an XML writer for the Binary XML format. This data is then read to binary\_xml.
-   The XML data in Binary XML format is passed to a further XML string reader and then transformed to an XOP writer.