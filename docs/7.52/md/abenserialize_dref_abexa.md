  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) →  [asXML - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_xslt_asxml_references.htm'\)) →  [asXML - Named Reference Variables](javascript:call_link\('abenasxml_reference_variable.htm'\)) → 

Serializing Data References

This example demonstrates serializations of data references to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and to [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_serialize\_dref.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Serialization of Data References\` ).
    DATA xml  TYPE xstring.
    DATA writer TYPE REF TO cl\_sxml\_string\_writer.
    "Data reference with named type
    out->begin\_section( \`Data Reference with Named Type\` ).
    TYPES:
      BEGIN OF struc,
        comp1 TYPE i,
        comp2 TYPE i,
      END OF struc.
    DATA dref1 TYPE REF TO struc.
    dref1 = NEW #( comp1 = 111 comp2 = 222 ).
    out->begin\_section( \`asXML for Heap Reference\` ).
    CALL TRANSFORMATION id SOURCE dref = dref1
                           RESULT XML xml.
    out->write\_xml( xml
      )->next\_section( \`asJSON for Heap Reference\` ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref1
                           RESULT XML writer.
    out->write\_json( writer->get\_output( )
      )->end\_section( ).
    "Data reference with technical type
    out->next\_section( \`Data Reference with Technical Type\` ).
    DATA:
      BEGIN OF struc,
        comp1  TYPE i,
        comp2  TYPE i,
      END OF struc,
      dref2 LIKE REF TO struc.
    dref2 = NEW #( comp1 = 111 comp2 = 222 ).
    out->begin\_section( \`asXML for Heap Reference\`
      )->begin\_section( \`Without Transformation Option\` ).
    TRY.
        CALL TRANSFORMATION id SOURCE dref = dref2
                               RESULT XML xml.
        out->write\_xml( xml ).
      CATCH cx\_xslt\_serialization\_error INTO DATA(xml\_err).
        out->write( xml\_err->previous->get\_text( ) ).
    ENDTRY.
    out->next\_section( \`With Transformation Option\` ).
    CALL TRANSFORMATION id SOURCE dref = dref2
                           RESULT XML xml
                           OPTIONS technical\_types = 'ignore'.
    out->write\_xml( xml
      )->end\_section(
      )->next\_section( \`asJSON for Heap Reference\`
      )->begin\_section( \`Without Transformation Option\` ).
    TRY.
        writer = cl\_sxml\_string\_writer=>create(
          type = if\_sxml=>co\_xt\_json ).
        CALL TRANSFORMATION id SOURCE dref = dref2
                               RESULT XML writer.
        out->write\_json( writer->get\_output( ) ).
      CATCH cx\_xslt\_serialization\_error INTO DATA(json\_err).
        out->write( json\_err->previous->get\_text( ) ).
    ENDTRY.
    out->next\_section( \`With Transformation Option\` ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref2
                           RESULT XML writer
                           OPTIONS technical\_types = 'ignore'.
    out->write\_json( writer->get\_output( )
      )->end\_section(
      )->end\_section( ).
    "Stack reference
    out->next\_section( \`Stack Reference\` ).
    DATA dref3 TYPE REF TO i.
    dref3 = REF #( 333 ).
    out->begin\_section( \`asXML for Stack Reference\`
      )->begin\_section( \`Without Transformation Option\` ).
    CALL TRANSFORMATION id SOURCE dref = dref3
                           RESULT XML xml.
    out->write\_xml( xml
      )->next\_section( \`With Transformation Option\` ).
    CALL TRANSFORMATION id SOURCE dref = dref3
                           RESULT XML xml
                           OPTIONS data\_refs = 'heap-or-create'.
    out->write\_xml( xml
      )->end\_section(
      )->next\_section( \`asJSON for Stack Reference\`
      )->begin\_section( \`Without Transformation Option\` ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref3
                           RESULT XML writer.
    out->write\_json( writer->get\_output( )
      )->next\_section( \`With Transformation Option\` ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref3
                           RESULT XML writer
                           OPTIONS data\_refs = 'heap-or-create'.
    out->write\_json( writer->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the serialization of data reference variables using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID to the canonical formats [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry").

-   First a data reference is serialized that points to an anonymous data object in the heap and whose dynamic type struc was created in the same program using the TYPES statement. No problems should arise from this serialization.

-   Next, however, a data reference variable is serialized that points to an anonymous data object in the heap whose dynamic type does not have a name. This is the technical type of a structure and reference to this type is made using LIKE. A data reference variable of this type cannot be serialized without taking further actions. This exception can be prevented using the transformation option [technical\_types](javascript:call_link\('abapcall_transformation_options.htm'\)), however the data reference variable is ignored.

-   Finally, a data reference variable is serialized that points to a data object in the stack. The data reference variable is ignored by default, but can be serialized using the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)).