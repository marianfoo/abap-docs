  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

iXML - Parsing

XML data is parsed by a validating XML parser, which can be created using the iXML factory as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(parser) = ixml->create\_parser(
                 istream        = ...
                 document       = ...
                 stream\_factory = ... ).

The static type of the reference variable parser is then the interface IF\_IXML\_PARSER. The parser requires the following input parameters:

-   The input stream [istream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) to be parsed.
-   An XML document [document](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)), to which the stream is parsed.
-   A factory [stream\_factory](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) must be specified for streams. This enables the parser to create corresponding streams if external sources are addressed in the parsed document.

A parser created in this way works like an iterator on the input stream. XML data can be [parsed to a DOM representation](javascript:call_link\('abenabap_ixml_lib_parse_dom.htm'\)) in a single action or [sequential parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\)) can be used, where the parser stops after certain steps and passes control to the application.

In addition to the parsers created using CREATE\_PARSER, the factory method [CREATE\_TOKEN\_PARSER](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\)) can be used to create a token parser for direct parsing in ABAP data objects.

Hint

A parser can only be used once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data.

Continue
[iXML - Complete Parse to DOM](javascript:call_link\('abenabap_ixml_lib_parse_dom.htm'\))
[iXML - Sequential Parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\))
[iXML - Parsing to Data Objects](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\))
[iXML - Troubleshooting After Parsing](javascript:call_link\('abenabap_ixml_lib_parse_error.htm'\))