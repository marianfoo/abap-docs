---
title: "XML Targets of Transformations"
description: |
  This example demonstrates the possible XML targets of the statement CALL TRANSFORMATION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm). Source Code REPORT demo_call_trafo_xml_results. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_trafo_results_abexa.htm"
abapFile: "abencall_trafo_results_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abencall", "trafo", "results", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) →  [CALL TRANSFORMATION, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_transformation_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: XML Targets of Transformations, ABENCALL_TRAFO_RESULTS_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

XML Targets of Transformations

This example demonstrates the possible XML targets of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm).

Source Code   

REPORT demo\_call\_trafo\_xml\_results.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = CL\_DEMO\_OUTPUT=>NEW(
      )->begin\_section(
      \`XML Results for CALL TRANSFORMATION\` ).
    FINAL(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
                 \`<object>\` &&
                 \` <str name="TEXT">Hello Writers!</str>\` &&
                 \`</object>\` ).
    "Strings
    out->begin\_section( \`Strings\` ).
    "string
    out->begin\_section( \`Text String\` ).
    DATA(xml\_str) = VALUE string( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_str.
    out->write\_xml( xml\_str ).
    "xstring
    out->next\_section( \`Byte String\` ).
    DATA(xml\_xstr) = VALUE xstring( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_xstr.
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "Internal tables
    out->next\_section( \`Internal Tables\` ).
    "Text table
    out->begin\_section( \`Table of Text Fields\` ).
    TYPES c10 TYPE c LENGTH 10.
    DATA xml\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    CALL TRANSFORMATION id SOURCE XML xml
                        RESULT XML xml\_tab.
    out->write\_xml( concat\_lines\_of( xml\_tab ) ).
    "Byte table
    out->next\_section( \`Table of Byte Fields\` ).
    TYPES x10 TYPE x LENGTH 10.
    DATA xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    CALL TRANSFORMATION id SOURCE XML xml
                        RESULT XML xml\_xtab.
    CONCATENATE LINES OF xml\_xtab INTO xml\_xstr IN BYTE MODE.
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "iXML
    out->next\_section( \`iXML Library\` ).
    "Output stream
    out->begin\_section( \`Output Stream\` ).
    FINAL(ixml) = cl\_ixml=>create( ).
    CLEAR xml\_xstr.
    FINAL(ostream) = ixml->create\_stream\_factory(
                      )->create\_ostream\_xstring( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML ostream.
    out->write\_xml( xml\_xstr ).
    "DOM
    out->next\_section( \`DOM\` ).
    FINAL(dom) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML dom.
    CLEAR xml\_xstr.
    dom->render( ixml->create\_stream\_factory(
                         )->create\_ostream\_xstring( xml\_xstr ) ).
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "sXML
    out->next\_section( \`sXML Library\` ).
    "XML 1.0 writer
    out->begin\_section( \`XML 1.0 Writer\` ).
    FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create(
                         type = if\_sxml=>co\_xt\_xml10 ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_writer.
    out->write\_xml( xml\_writer->get\_output( ) ).
    "Binary XML writer
    out->next\_section( \`Binary XML Writer\` ).
    FINAL(binary\_xml\_writer) = cl\_sxml\_string\_writer=>create(
                                type = if\_sxml=>co\_xt\_binary ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML binary\_xml\_writer.
    out->write\_xml( binary\_xml\_writer->get\_output( ) ).
    "XOP writer
    out->next\_section( \`XOP Writer\` ).
    FINAL(xop\_writer) = cl\_sxml\_xop\_writer=>create( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xop\_writer.
    FINAL(xop\_package) = xop\_writer->get\_output( ).
    out->write\_xml( xop\_package-xop\_document ).
    "JSON writer
    out->next\_section( \`JSON Writer\` ).
    FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                                type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is called for all possible XML targets and the result is displayed. The XML source is always the same byte string, which contains the XML data in JSON-XML format.