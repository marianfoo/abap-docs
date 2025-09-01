  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) →  [asXML - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_xslt_asxml_references.htm'\)) →  [asXML - Anonymous Data Objects](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Serialization%20to%20Heap%20or%20Embedded%2C%20ABENSERIALIZE_REF_HEAP_EMBED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Serialization to Heap or Embedded

This example demonstrates serializations of an anonymous data object to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and to [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_asxml\_heap\_embedded DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_heap\_embedded IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Serialization of Data Reference Variable\` ).
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
    out->write\_json( writer\_embedded->get\_output( ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is used to serialize an anonymous data object to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and to [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry"), once with and once without the transformation option [data\_refs = \`embedded\`](javascript:call_link\('abapcall_transformation_options.htm'\)).