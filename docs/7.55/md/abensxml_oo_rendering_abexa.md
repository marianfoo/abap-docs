---
title: "Source Code"
description: |
  REPORT demo_sxml_oo_writer. CLASS sxml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS sxml_demo IMPLEMENTATION. METHOD main. DATA(writer) = CAST if_sxml_writer( cl_sxml_string_writer=>create(  ) ). DATA open_element TYPE REF TO if_sxml_open_element. DATA value TYP
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensxml_oo_rendering_abexa.htm"
abapFile: "abensxml_oo_rendering_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abensxml", "rendering", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML - Object-Oriented Rendering

[Object-oriented](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_render_oo.htm) writing of simple XML data.

Source Code

REPORT demo\_sxml\_oo\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    DATA open\_element TYPE REF TO if\_sxml\_open\_element.
    DATA value TYPE REF TO if\_sxml\_value\_node.
    TRY.
        open\_element = writer->new\_open\_element(
                         name = 'texts'
                         nsuri = 'http://www.sap.com/abapdemos'
                         prefix = 'demo' ).
        writer->write\_node( open\_element ).
        open\_element = writer->new\_open\_element(
                         name = 'text'
                         nsuri = 'http://www.sap.com/abapdemos' ).
        open\_element->set\_attribute( name = 'format'
                                     value = 'bold' ).
        open\_element->set\_attribute( name = 'level'
                                     value = '1' ).
        writer->write\_node( open\_element ).
        value = writer->new\_value( ).
        value->set\_value( 'aaaa' ).
        writer->write\_node( value ).
        writer->write\_node( writer->new\_close\_element( ) ).
        open\_element = writer->new\_open\_element(
                         name = 'text'
                         nsuri = 'http://www.sap.com/abapdemos' ).
        open\_element->set\_attribute( name = 'format'
                                     value = 'italic' ).
        open\_element->set\_attribute( name = 'level'
                                     value = '2' ).
        writer->write\_node( open\_element ).
        value = writer->new\_value( ).
        value->set\_value( 'bbbb' ).
        writer->write\_node( value ).
        writer->write\_node( writer->new\_close\_element( ) ).
        writer->write\_node( writer->new\_close\_element( ) ).
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

This example shows how XML data can be created using the methods for the object-oriented rendering of the interface IF\_SXML\_WRITER.