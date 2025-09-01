  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

iXML Library - Parse

XML data is parsed by a validating XML parser, itself created using the iXML factory as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(parser) = ixml->create\_parser(
                 istream        = ...
                 document       = ...
                 stream\_factory = ... ).

The static type of the reference variable parser is then the interface IF\_IXML\_PARSER. The parser requires the following input parameters:

-   The input stream [istream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) (to be parsed).

-   An XML document [document](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)), to which the stream is parsed.

-   A factory [stream\_factory](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) must be specified. This enables the parser to create appropriate streams if external sources are addressed in the parsed document.

A parser created in this way works like an iterator on the input stream. XML data can be [parsed to a DOM representation](javascript:call_link\('abenabap_ixml_lib_parse_dom.htm'\)) in a single action or [sequential parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\)) can be used, where the parser stops after certain steps and passes control to the application.

Alongside the parsers created using CREATE\_PARSER, the factory method [CREATE\_TOKEN\_PARSER](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\)) can be used to create a token parser for direct parsing to ABAP data objects.

Note

A parser is only valid once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data.

Continue
[iXML Library - Complete Parse to DOM](javascript:call_link\('abenabap_ixml_lib_parse_dom.htm'\))
[iXML Library - Sequential Parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\))
[iXML Library - Parsing to Data Objects](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\))
[iXML Library - Troubleshooting After Parsing](javascript:call_link\('abenabap_ixml_lib_parse_error.htm'\))