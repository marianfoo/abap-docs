  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) → 

iXML - Parsing

XML data is parsed by a validating XML parser, itself created using the iXML factory as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(parser) = ixml->create\_parser(
                 istream        = ...
                 document       = ...
                 stream\_factory = ... ).

The static type of the reference variable parser is then the interface IF\_IXML\_PARSER. The parser requires the following input parameters:

-   The input stream [istream](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_input_output.htm) (to be parsed).

-   An XML document [document](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_input_output.htm), to which the stream is parsed.

-   A factory [stream\_factory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_input_output.htm) must be specified. This enables the parser to create appropriate streams if external sources are addressed in the parsed document.

A parser created in this way works like an iterator on the input stream. XML data can be [parsed to a DOM representation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_dom.htm) in a single action or [sequential parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_event.htm) can be used, where the parser stops after certain steps and passes control to the application.

Alongside the parsers created using CREATE\_PARSER, the factory method [CREATE\_TOKEN\_PARSER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_token.htm) can be used to create a token parser for direct parsing to ABAP data objects.

Hint

A parser is only valid once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data.

Continue
[iXML - Complete Parse to DOM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_dom.htm)
[iXML - Sequential Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_event.htm)
[iXML - Parsing to Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_token.htm)
[iXML - Troubleshooting After Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_parse_error.htm)