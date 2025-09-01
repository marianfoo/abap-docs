  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) →  [asXML - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_xslt_asxml_references.htm'\)) →  [asXML - Anonymous Data Objects](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)) → 

Serialization to Heap or Embedded

This example demonstrates serializations of an anonymous data object to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and to [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_asxml\_heap\_embedded.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Serialization of Data Reference Variable\` ).
    DATA dref TYPE REF TO string.
    dref = NEW #( \`contents\` ).
    out->begin\_section( \`Contents in Heap\`
      )->begin\_section( \`asXML\` ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML DATA(xml\_heap).
    out->write\_xml( xml\_heap
      )->next\_section( \`asJSON\` ).
    DATA(writer\_heap) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML writer\_heap.
    out->write\_json( writer\_heap->get\_output( )
      )->end\_section( ).
    out->next\_section( \`Contents Embedded\`
      )->begin\_section( \`asXML\` ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML DATA(xml\_embedded)
                           OPTIONS data\_refs = \`embedded\`.
    out->write\_xml( xml\_embedded
      )->next\_section(\`asJSON\` ).
    DATA(writer\_embedded) = cl\_sxml\_string\_writer=>create(
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

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID to serialize an anonymous data object to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and to [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry"), once with and once without the transformation option [data\_refs = \`embedded\`](javascript:call_link\('abapcall_transformation_options.htm'\)).