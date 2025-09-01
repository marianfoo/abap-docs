---
title: "Source Code"
description: |
  REPORT demo_sxml_xml_to_binary_to_xop. CLASS sxml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS sxml_demo IMPLEMENTATION. METHOD main. 'XML 1.0 DATA(xml_reader) = cl_sxml_string_reader=>create( cl_abap_conv_codepage=>create_out( )->convert( `<text><!-- comment
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_format_trafos_abexa.htm"
abapFile: "abensxml_format_trafos_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abensxml", "format", "trafos", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Transformation of Formats

This example demonstrates the transformation of various [XML formats](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_formats.htm).

Source Code

REPORT demo\_sxml\_xml\_to\_binary\_to\_xop.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    "XML 1.0
    DATA(xml\_reader) = cl\_sxml\_string\_reader=>create(
                         cl\_abap\_conv\_codepage=>create\_out( )->convert(
                          \`<text><!-- comment -->blah</text>\` ) ).
    "XML 1.0 to Binary XML
    DATA(binary\_writer) = cl\_sxml\_string\_writer=>create(
                            type = if\_sxml=>co\_xt\_binary  ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( binary\_writer ).
    DATA(binary\_xml) =  binary\_writer->get\_output( ).
    "Binary XML to XOP
    DATA(binary\_reader) = cl\_sxml\_string\_reader=>create( binary\_xml ).
    DATA(xop\_writer) = cl\_sxml\_xop\_writer=>create(  ).
    binary\_reader->next\_node( ).
    binary\_reader->skip\_node( xop\_writer ).
    DATA(xop\_package) = xop\_writer->get\_output( ).
    cl\_demo\_output=>display\_xml( xop\_package-xop\_document ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

-   An XML string reader is filled with a byte string that contains XML data in XML 1.0 format and UTF-8 representation. This data is produced by the conversion of a text string from the current code page.

-   The method SKIP\_NODE is used to pass the XML data of the reader to an XML writer for the Binary XML format. This data is then read to binary\_xml.

-   The XML data in Binary XML format is passed to a further XML string reader and then transformed to an XOP writer.