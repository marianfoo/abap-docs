---
title: "JSON - asJSON for Object References"
description: |
  Source Code  CCDEF INTERFACE intf. DATA attr TYPE string. ENDINTERFACE. CLASS serializable DEFINITION. PUBLIC SECTION. INTERFACES if_serializable_object. INTERFACES intf DATA VALUES attr = 'Interface Attribute'. DATA attr1 TYPE string VALUE `Attribute 1`. DATA attr2 TYPE string VALUE `Attribu
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_asjson_oref_abexa.htm"
abapFile: "abenabap_json_asjson_oref_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenabap", "json", "asjson", "oref", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20asJSON%20for%20Object%20References%2C%20ABENABAP_JSON_ASJSON_OREF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

JSON - asJSON for Object References

Source Code   

\* CCDEF
INTERFACE intf.
  DATA attr TYPE string.
ENDINTERFACE.
CLASS serializable DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
    INTERFACES intf DATA VALUES attr = 'Interface Attribute'.
    DATA attr1 TYPE string VALUE \`Attribute 1\`.
    DATA attr2 TYPE string VALUE \`Attribute 2\`.
  PRIVATE SECTION.
    CONSTANTS serializable\_class\_version TYPE i VALUE 1.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_asjson\_oref DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asjson\_oref IMPLEMENTATION.
  METHOD main.
    FINAL(oref) = NEW serializable( ).
    "Transformation to JSON
    out->begin\_section( 'asJSON'  ).
    FINAL(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE oref = oref
                           RESULT XML writer.
    FINAL(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    FINAL(reader) = cl\_sxml\_string\_reader=>create( json ).
    FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE oref = oref
                           RESULT XML xml.
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, is called to create the [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_glosry.htm "Glossary Entry") representation of a reference variable that points to an instance.

For comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.