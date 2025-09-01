---
title: "Source Code"
description: |
  REPORT demo_sxml_token_writer. CLASS sxml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS sxml_demo IMPLEMENTATION. METHOD main. DATA(writer) = CAST if_sxml_writer( cl_sxml_string_writer=>create(  ) ). TRY. writer->open_element( name = 'texts' nsuri = 'http://www.sap.
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensxml_rendering_abexa.htm"
abapFile: "abensxml_rendering_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abensxml", "rendering", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML - Token-Based Rendering

[Token-based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib_render_token.htm) writing of simple XML data.

Source Code

REPORT demo\_sxml\_token\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    TRY.
        writer->open\_element( name = 'texts'
                              nsuri = 'http://www.sap.com/abapdemos'
                              prefix = 'demo' ).
        writer->open\_element( name = 'text'
                              nsuri = 'http://www.sap.com/abapdemos' ).
        writer->write\_attribute( name = 'format' value = 'bold' ).
        writer->write\_attribute( name = 'level'  value = '1' ).
        writer->write\_value( 'aaaa' ).
        writer->close\_element( ).
        writer->open\_element( name = 'text'
                              nsuri = 'http://www.sap.com/abapdemos' ).
        writer->write\_attribute( name = 'format' value = 'italic' ).
        writer->write\_attribute( name = 'level'  value = '2' ).
        writer->write\_value( 'bbbb' ).
        writer->close\_element( ).
        writer->close\_element( ).
      CATCH cx\_sxml\_state\_error INTO DATA(error).
        cl\_demo\_output=>display\_text( error->get\_text( ) ).
        RETURN.
    ENDTRY.
    DATA(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    cl\_demo\_output=>display\_xml( xml ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

This example shows how XML data can be created using the methods OPEN\_ELEMENT, WRITE\_ATTRIBUTE, WRITE\_VALUE, CLOSE\_ELEMENT, of the interface IF\_SXML\_WRITER.