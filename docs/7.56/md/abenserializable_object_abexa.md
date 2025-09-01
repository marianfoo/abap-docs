---
title: "Adjusted Serialization and Deserialization"
description: |
  This example demonstrates the adjusted serialization and deserialization of objects. Source Code REPORT demo_serializable_object. INTERFACE intf. METHODS get_attr RETURNING VALUE(attr) TYPE string. ENDINTERFACE. CLASS cls_unsafe DEFINITION. PUBLIC SECTION. INTERFACES: if_serializable_object, i
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenserializable_object_abexa.htm"
abapFile: "abenserializable_object_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenserializable", "object", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml_references.htm) →  [asXML - Instances of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasxml_class_instances.htm) → 

Adjusted Serialization and Deserialization

This example demonstrates the adjusted serialization and deserialization of objects.

Source Code

REPORT demo\_serializable\_object.
INTERFACE intf.
  METHODS get\_attr RETURNING VALUE(attr) TYPE string.
ENDINTERFACE.
CLASS cls\_unsafe DEFINITION.
  PUBLIC SECTION.
    INTERFACES: if\_serializable\_object,
                intf.
  PRIVATE SECTION.
    DATA attr TYPE string VALUE 'Private'.
ENDCLASS.
CLASS cls\_unsafe IMPLEMENTATION.
  METHOD intf~get\_attr.
    attr = me->attr.
  ENDMETHOD.
ENDCLASS.
CLASS cls\_safe DEFINITION.
  PUBLIC SECTION.
    INTERFACES: if\_serializable\_object,
                intf.
  PRIVATE SECTION.
    DATA attr TYPE string VALUE 'Private'.
    METHODS: serialize\_helper   EXPORTING attr TYPE string,
             deserialize\_helper IMPORTING attr TYPE string.
ENDCLASS.
CLASS cls\_safe IMPLEMENTATION.
  METHOD serialize\_helper.
    attr = me->attr.
  ENDMETHOD.
  METHOD deserialize\_helper.
  ENDMETHOD.
  METHOD intf~get\_attr.
    attr = me->attr.
  ENDMETHOD.
ENDCLASS.
CLASS trafo\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    class-data    out TYPE REF TO if\_demo\_output.
    CLASS-METHODS serialize\_deserialize CHANGING iref TYPE REF TO intf.
ENDCLASS.
CLASS trafo\_demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new(
      )->begin\_section( 'Unsafe Class' ).
    DATA(iref\_unsafe) = CAST intf( NEW cls\_unsafe( ) ).
    serialize\_deserialize( CHANGING iref = iref\_unsafe ).
    out->next\_section( 'Safe Class' ).
    DATA(iref\_safe) = CAST intf( NEW cls\_safe( ) ).
    serialize\_deserialize( CHANGING iref = iref\_safe ).
    out->display( ).
  ENDMETHOD.
  METHOD serialize\_deserialize.
    DATA xml\_string TYPE string.
    DATA json\_string TYPE string.
    out->write\_data( iref->get\_attr( )
      )->begin\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE oref = iref
                           RESULT XML xml\_string.
    out->write\_xml( xml\_string ).
    REPLACE PCRE '(<ATTR>)(\[^<\]+)(</ATTR>)' IN xml\_string
                                            WITH '$1Public$3'.
    IF sy-subrc = 0.
      CALL TRANSFORMATION id SOURCE XML xml\_string
                             RESULT oref = iref.
      out->write\_data( iref->get\_attr( ) ).
    ENDIF.
    out->next\_section( 'asJSON' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
                     type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE oref = iref
                           RESULT XML writer.
    json\_string = cl\_abap\_conv\_codepage=>create\_in( )->convert(
                                      writer->get\_output( ) ).
    out->write\_json( json\_string ).
    REPLACE PCRE '("ATTR":")(\[^"\]+)(")' IN json\_string
                                        WITH '$1Nonsense$3'.
    IF sy-subrc = 0.
      CALL TRANSFORMATION id SOURCE XML json\_string
                             RESULT oref = iref.
      out->write\_data( iref->get\_attr( ) ).
    ENDIF.
    out->end\_section( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  trafo\_demo=>main( ).

Description

Using the [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, objects in two classes are serialized to [asXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasxml_glosry.htm "Glossary Entry") and to [asJSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasjson_glosry.htm "Glossary Entry"), and then deserialized.

The object of the class cl\_unsafe is processed by default. The example shows that the standard behavior allows an object in a class to be created for which a private attribute receives a value set from outside, both for asXML and for asJSON After deserialization, the value of the private attribute attr in the new class does not match the value defined in the class.

The object of the class cl\_safe is processed in an adjusted way. The example shows demonstrates how the methods SERIALIZE\_HELPER and DESERIALIZE\_HELPER can be used to prevent unwanted manipulation of attributes. The private attribute attr is serialized using SERIALIZE\_HELPER but is not deserialized in DESERIALIZE\_HELPER.