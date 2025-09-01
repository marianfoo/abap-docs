---
title: "Serialization to Heap or Embedded"
description: |
  This example demonstrates serializations of an anonymous data object to asXML(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm 'Glossary Entry') and to asJSON(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasjson_glosry.htm 'Glossary Entry'). Source
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenserialize_ref_heap_embed_abexa.htm"
abapFile: "abenserialize_ref_heap_embed_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenserialize", "ref", "heap", "embed", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_references.htm) →  [asXML - Anonymous Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_anonymous_data_object.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Serialization to Heap or Embedded, ABENSERIALIZE_REF_HEAP_EMBED_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Serialization to Heap or Embedded

This example demonstrates serializations of an anonymous data object to [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry") and to [asJSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasjson_glosry.htm "Glossary Entry").

Source Code   

REPORT demo\_asxml\_heap\_embedded.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Serialization of Data Reference Variable\` ).
    DATA dref TYPE REF TO string.
    dref = NEW #( \`contents\` ).
    out->begin\_section( \`Contents in Heap\`
      )->begin\_section( \`asXML\` ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML FINAL(xml\_heap).
    out->write\_xml( xml\_heap
      )->next\_section( \`asJSON\` ).
    FINAL(writer\_heap) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML writer\_heap.
    out->write\_json( writer\_heap->get\_output( )
      )->end\_section( ).
    out->next\_section( \`Contents Embedded\`
      )->begin\_section( \`asXML\` ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML FINAL(xml\_embedded)
                           OPTIONS data\_refs = \`embedded\`.
    out->write\_xml( xml\_embedded
      )->next\_section( \`asJSON\` ).
    FINAL(writer\_embedded) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML writer\_embedded
                           OPTIONS data\_refs = \`embedded\`.
    out->write\_json( writer\_embedded->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is used to serialize an anonymous data object to [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry") and to [asJSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasjson_glosry.htm "Glossary Entry"), once with and once without the transformation option [data\_refs = \`embedded\`](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_options.htm).