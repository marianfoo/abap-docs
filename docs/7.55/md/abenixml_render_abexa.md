---
title: "Source Code"
description: |
  REPORT demo_ixml_render. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA source_tab TYPE TABLE OF i. source_tab = VALUE #( FOR j = 1 UNTIL j > 10 ( ipow( base = 2 exp = j ) ) ). DATA(ixml) = cl_ixml=>create( ). DATA(d
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_render_abexa.htm"
abapFile: "abenixml_render_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenixml", "render", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Rendering

Renders XML documents to DOM representation.

Source Code

REPORT demo\_ixml\_render.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    DO 7 TIMES.
      document->find\_from\_name\_ns( name = 'item' )->remove\_node( ).
    ENDDO.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section(
      \`Renderer for complete document\` ).
    DATA xml\_string TYPE string.
    ixml->create\_renderer( document = document
                           ostream  = ixml->create\_stream\_factory(
                                        )->create\_ostream\_cstring(
                                             string = xml\_string )
                                               )->render( ).
    out->write\_xml( xml\_string )->line( ).
    out->next\_section(
       \`Method render for complete document\` ).
    CLEAR xml\_string.
    document->render( ostream  = ixml->create\_stream\_factory(
                                   )->create\_ostream\_cstring(
                                        string = xml\_string ) ).
    out->write\_xml( xml\_string )->line( ).
    out->next\_section(
      \`Method render for subnode recursive\` ).
    CLEAR xml\_string.
    document->find\_from\_name\_ns( name = 'NUMBERS'
    )->render( ostream  = ixml->create\_stream\_factory(
                            )->create\_ostream\_cstring(
                                 string = xml\_string )
               recursive = abap\_true ).
    out->write( xml\_string )->line( ).
    out->next\_section(
       \`Method render of subnode not recursive\` ).
    CLEAR xml\_string.
    document->find\_from\_name\_ns( name = 'NUMBERS'
    )->render( ostream  = ixml->create\_stream\_factory(
                            )->create\_ostream\_cstring(
                                 string = xml\_string )
               recursive = abap\_false ).
    out->display( xml\_string ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation. The method REMOVE\_NODE is used to remove nodes and the content of the modified document is rendered in various ways:

-   A renderer is created for the full document and its method RENDER is executed, producing complete XML data.

-   The method RENDER of the document object is executed, which again renders the full document and produces the same result.

-   The method RENDER of the element NUMBERS is executed recursively, which writes only the element and its subelements to the output stream.

-   The method RENDER of the element NUMBERS is executed non-recursively, which writes only the element (without its subelements) to the output stream.