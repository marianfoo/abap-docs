---
title: "Source Code"
description: |
  REPORT demo_sxml_trafo_from_reader. CLASS sxml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS sxml_demo IMPLEMENTATION. METHOD main. FINAL(xml) = cl_abap_conv_codepage=>create_out( )->convert( `<document>` && `  <head>` && `    <author>KELLERH</author>` && `
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensxml_trafo_from_reader_abexa.htm"
abapFile: "abensxml_trafo_from_reader_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "internal-table", "abensxml", "trafo", "from", "reader", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sXML - Transformation from XML Reader, ABENSXML_TRAFO_FROM_READER_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sXML - Transformation from XML Reader

Deserializes ABAP data from an XML reader.

Source Code   

REPORT demo\_sxml\_trafo\_from\_reader.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    FINAL(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
      \`<document>\` &&
      \`  <head>\` &&
      \`    <author>KELLERH</author>\` &&
      \`    <date>20120824</date>\` &&
      \`  </head>\` &&
      \`  <body>\` &&
      \`    <asx:abap\` &&
      \`      xmlns:asx="http://www.sap.com/abapxml" version="1.0">\` &&
      \`      <asx:values>\` &&
      \`        <TABLE>\` &&
      \`          <item>1</item>\` &&
      \`          <item>2</item>\` &&
      \`          <item>3</item>\` &&
      \`        </TABLE>\` &&
      \`      </asx:values>\` &&
      \`    </asx:abap>\` &&
      \`  </body>\` &&
      \`</document>\` ).
    FINAL(reader) =
      CAST if\_sxml\_reader( cl\_sxml\_string\_reader=>create( xml ) ).
    WHILE reader->name <> 'body'.
      reader->next\_node( ).
    ENDWHILE.
    DATA itab TYPE TABLE OF i.
    CALL TRANSFORMATION id SOURCE XML reader
                           RESULT table = itab.
    cl\_demo\_output=>display( itab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description   

An XML string reader parses the XML data of a byte string until it reaches the element <body>. The element <header> is not analyzed further. The reader located at the element opening of <body> is used as an XML source for the [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. The content of <body> is in asXML format for an internal table, which means it can be deserialized to such a table.