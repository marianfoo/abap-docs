  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_references.htm) →  [asXML - Named Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_reference_variable.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Serializing%20Data%20References%2C%20ABENSERIALIZE_DREF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Serializing Data References

This example demonstrates serializations of data references to [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") and to [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasjson_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_serialize\_dref DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_serialize\_dref IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Serialization of Data References\` ).
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
        comp1 TYPE i,
        comp2 TYPE i,
      END OF struc,
      dref2 LIKE REF TO struc.
    dref2 = NEW #( comp1 = 111 comp2 = 222 ).
    out->begin\_section( \`asXML for Heap Reference\`
      )->begin\_section( \`Without Transformation Option\` ).
    TRY.
        CALL TRANSFORMATION id SOURCE dref = dref2
                               RESULT XML xml.
        out->write\_xml( xml ).
      CATCH cx\_xslt\_serialization\_error INTO FINAL(xml\_err).
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
      CATCH cx\_xslt\_serialization\_error INTO FINAL(json\_err).
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
    out->write\_json( writer->get\_output( ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the serialization of data reference variables using the [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID to the canonical formats [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasjson_glosry.htm "Glossary Entry").

-   First a data reference is serialized that points to an anonymous data object in the heap and whose dynamic type struc was created in the same method using the TYPES statement. No problems should arise from this serialization.
-   Next, however, a data reference variable is serialized that points to an anonymous data object in the heap whose dynamic type does not have a name. This is the technical type of a structure and reference to this type is made using LIKE. A data reference variable of this type cannot be serialized without taking further actions. This exception can be prevented using the transformation option [technical\_types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_options.htm), however the data reference variable is ignored.
-   Finally, a data reference variable is serialized that points to a data object in the stack. The data reference variable is ignored by default, but can be serialized using the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_options.htm).