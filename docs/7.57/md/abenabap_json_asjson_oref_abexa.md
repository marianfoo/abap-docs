  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - asJSON for Object References, ABENABAP_JSON_ASJSON_OREF_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - asJSON for Object References

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
    FINAL(oref) = NEW serializable( ).
    "Transformation to JSON
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON'  ).
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
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID, for which a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is specified as the XML target, is called to create the [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") representation of a reference variable that points to an instance.

For comparison, the [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") representation of the JSON data and the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the ABAP data is also shown.