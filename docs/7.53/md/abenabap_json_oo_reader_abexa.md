---
title: "JSON, Parse"
description: |
  The example demonstrates the parsing of JSON data(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_oview.htm). Source Code REPORT demo_json_oo_reader. CLASS json_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS json_demo IMPLEMENTATION. METHOD main. DATA
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_oo_reader_abexa.htm"
abapFile: "abenabap_json_oo_reader_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abenabap", "json", "reader", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_abexas.htm) → 

JSON, Parse

The example demonstrates the parsing of [JSON data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_oview.htm).

Source Code

REPORT demo\_json\_oo\_reader.
CLASS json\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS json\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`JSON-Data\` ).
    DATA(json) =
      cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`{\` &&
     \` "order":"4711",\` &&
     \` "head":{\` &&
     \`  "status":"confirmed",\` &&
     \`  "date":"07-19-2012"\` &&
     \` },\` &&
     \` "body":{\` &&
     \`  "item":{\` &&
     \`   "units":"2", "price":"17.00", "Part No.":"0110"\` &&
     \`  },\` &&
     \`  "item":{\` &&
     \`   "units":"1", "price":"10.50", "Part No.":"1609"\` &&
     \`  },\` &&
     \`  "item":{\` &&
     \`   "units":"5", "price":"12.30", "Part No.":"1710"\` &&
     \`  }\` &&
     \` }\` &&
     \`}\` ).
    out->write\_json( json ).
    out->next\_section( \`Parsed Nodes of the JSON-Data\` ).
    DATA: BEGIN OF node\_wa,
            node\_type  TYPE string,
            prefix     TYPE string,
            name       TYPE string,
            nsuri      TYPE string,
            value      TYPE string,
            value\_raw  TYPE xstring,
          END OF node\_wa,
          nodes LIKE TABLE OF node\_wa.
    DATA(reader) = cl\_sxml\_string\_reader=>create( json ).
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ).
    TRY.
        DO.
          CLEAR node\_wa.
          DATA(node) = reader->read\_next\_node( ).
          IF node IS INITIAL.
            EXIT.
          ENDIF.
          writer->write\_node( node ).
          CASE node->type.
            WHEN if\_sxml\_node=>co\_nt\_element\_open.
              DATA(open\_element) = CAST if\_sxml\_open\_element( node ).
              node\_wa-node\_type = \`open element\`.
              node\_wa-prefix    = open\_element->prefix.
              node\_wa-name      = open\_element->qname-name.
              node\_wa-nsuri     = open\_element->qname-namespace.
              DATA(attributes)  = open\_element->get\_attributes( ).
              APPEND node\_wa TO nodes.
              LOOP AT attributes INTO DATA(attribute).
                node\_wa-node\_type = \`attribute\`.
                node\_wa-prefix    = attribute->prefix.
                node\_wa-name      = attribute->qname-name.
                node\_wa-nsuri     = attribute->qname-namespace.
                IF attribute->value\_type = if\_sxml\_value=>co\_vt\_text.
                  node\_wa-value = attribute->get\_value( ).
                ELSEIF attribute->value\_type =
                                   if\_sxml\_value=>co\_vt\_raw.
                  node\_wa-value\_raw = attribute->get\_value\_raw( ).
                ENDIF.
                APPEND node\_wa TO nodes.
              ENDLOOP.
              CONTINUE.
            WHEN if\_sxml\_node=>co\_nt\_element\_close.
              DATA(close\_element) = CAST if\_sxml\_close\_element( node ).
              node\_wa-node\_type   = \`close element\`.
              node\_wa-prefix      = close\_element->prefix.
              node\_wa-name        = close\_element->qname-name.
              node\_wa-nsuri       = close\_element->qname-namespace.
              APPEND node\_wa TO nodes.
              CONTINUE.
            WHEN if\_sxml\_node=>co\_nt\_value.
              DATA(value\_node) = CAST if\_sxml\_value\_node( node ).
              node\_wa-node\_type   = \`value\`.
              IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text.
                node\_wa-value = value\_node->get\_value( ).
              ELSEIF value\_node->value\_type = if\_sxml\_value=>co\_vt\_raw.
                node\_wa-value\_raw = value\_node->get\_value\_raw( ).
              ENDIF.
              APPEND node\_wa TO nodes.
              CONTINUE.
            WHEN OTHERS.
              node\_wa-node\_type   = \`Error\`.
              APPEND node\_wa TO nodes.
              EXIT.
          ENDCASE.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    out->write\_data( nodes ).
    out->next\_section(
      \`JSON-XML-Representation of the JSON-Data\` ).
    out->write\_xml(
      CAST cl\_sxml\_string\_writer( writer )->get\_output( ) ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  json\_demo=>main( ).

Description

The string json is filled with valid JSON data, which is then displayed. The JSON data is parsed by a [JSON reader](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_reader_glosry.htm "Glossary Entry"). The method used is the same as in the executable example [sXML Library, Object-Oriented Parsing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensxml_oo_parsing_abexa.htm). The information about the parsed nodes is appended to an internal table and then displayed.

Also, an XML string writer for the standard XML 1.0 is filled with the nodes. The output string is fetched and displayed. It demonstrates the [JSON-XML representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_xml_glosry.htm "Glossary Entry") of the parsed JSON data.