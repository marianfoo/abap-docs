  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Parse](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse.htm) → 

iXML Library - Complete Parse to DOM

To parse XML data to a DOM representation in a single action, a dedicated [parser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse.htm) is used as follows:

DATA(rc) = parser->parse( ).

Here, parser is a reference variable that points to the parser. The parser checks whether the XML data of the input stream [istream](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) is correct and creates a DOM representation of this file in the memory. The return value of the method PARSE has the type i and uses values to produce the result that match the following constants from the type group IXML:

-   ixml\_mr\_parser\_ok
    The parsed XML data does not have any errors. Parsing was successful and all XML data is available in the saved XMLdocument.

-   ixml\_mr\_parser\_error
    The parsed XML data has errors. Although the parser created a valid DOM from the XML file with the errors, it does not usually contain all the XML data. These errors can be [analyzed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse_error.htm).

-   ixml\_mr\_parser\_fatal\_error
    The XML file could not be parsed at all. This error does not usually occur any more.

If the parsing is successful, the XML document [document](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) associated with the parser can be used to [access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_dom_access.htm) the DOM saved in the memory.

Notes

-   If an XML element has multiple attributes with the same name, only one of these attributes is passed to DOM, which is given the value of the last identically named attribute (see example program DEMO\_XML\_ATTRIBUTES).

-   An alternative for complete parsing of XML data to the DOM representation is to call the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID with [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm). See the executable example [DOM Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_dom_abexa.htm). No streams and factories need to be created explicitly here.

Example

Creates a parser for an input stream for a text string and parses it to an XML document.

DATA(ixml)  = cl\_ixml=>create( ).
DATA(stream\_factory) = ixml->create\_stream\_factory( ).
DATA(istream)        = stream\_factory->create\_istream\_string(
  \`<?xml version="1.0"?>\`         &&
  \`  <text>\`                      &&
  \`    Mer lasse de DOM in Kölle\` &&
  \`  </text>\` ).
DATA(document)       = ixml->create\_document( ).
DATA(parser) = ixml->create\_parser(
                         stream\_factory = stream\_factory
                         istream        = istream
                         document       = document ).
DATA(rc) = parser->parse( ).
IF rc <> ixml\_mr\_parser\_ok.
  ... "Error handling
  RETURN.
ENDIF.