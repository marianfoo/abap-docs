  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library - Parsing](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) → 

iXML Library - Complete Parse to DOM

To parse XML data to a DOM representation in a single action, a dedicated [parser](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) is used as follows:

DATA(rc) = parser->parse( ).

Here, parser is a reference variable that points to the parser. The parser checks whether the XML data of the input stream [istream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) is correct and creates a DOM representation of this file in the memory. The return value of the method PARSE has the type i and uses values to produce the result that match the following constants from the type group IXML:

-   ixml\_mr\_parser\_ok
    The parsed XML data does not have any errors. Parsing was successful and all XML data is available in the saved XML document.

-   ixml\_mr\_parser\_error
    The parsed XML data has errors. Although the parser created a valid DOM from the XML file with the errors, it does not usually contain all the XML data. These errors can be [analyzed](javascript:call_link\('abenabap_ixml_lib_parse_error.htm'\)).

-   ixml\_mr\_parser\_fatal\_error
    The XML data could not be parsed at all. This error does not usually occur any more.

If the parsing is successful, the XML document [document](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) associated with the parser can be used to [access the DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\)) saved in the memory.

Notes

-   If an XML element has multiple attributes with the same name, only one of these attributes is passed to DOM, which is given the value of the last identically named attribute (see example program DEMO\_XML\_ATTRIBUTES).

-   An alternative for complete parsing of XML data to the DOM representation is to call the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID with [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). See the executable example [DOM Representation](javascript:call_link\('abenixml_dom_abexa.htm'\)). No streams and factories need to be created explicitly here.

Example

Creates a parser for an input stream for a text string and parses it to an XML document.

DATA(ixml)           = cl\_ixml=>create( ).
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