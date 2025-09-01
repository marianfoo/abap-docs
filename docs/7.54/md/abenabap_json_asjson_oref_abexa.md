  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_abexas.htm) → 

JSON, asJSON for Object References

Source Code

REPORT demo\_asjson\_oref.
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
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(oref) = NEW serializable( ).
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON'  ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE oref = oref
                           RESULT XML writer.
    DATA(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    DATA(reader) = cl\_sxml\_string\_reader=>create( json ).
    DATA(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE oref = oref
                           RESULT XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID (for which a [JSON writer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target) is called to create and display the [asJSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasjson_glosry.htm "Glossary Entry") format of a reference variable that points to an instance.

As a comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.