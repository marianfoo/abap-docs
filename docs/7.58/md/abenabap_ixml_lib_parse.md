---
title: "Hint"
description: |
  A parser can only be used once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data. iXML - Complete Parse to DOM(
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse.htm"
abapFile: "abenabap_ixml_lib_parse.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "ixml", "lib", "parse"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Parsing%2C%20ABENABAP_IXML_LIB_PARSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Parsing

XML data is parsed by a validating XML parser, which can be created using the iXML factory as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(parser) = ixml->create\_parser(
                 istream        = ...
                 document       = ...
                 stream\_factory = ... ).

The static type of the reference variable parser is then the interface IF\_IXML\_PARSER. The parser requires the following input parameters:

-   The input stream [istream](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm) to be parsed.
-   An XML document [document](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm), to which the stream is parsed.
-   A factory [stream\_factory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_input_output.htm) must be specified for streams. This enables the parser to create corresponding streams if external sources are addressed in the parsed document.

A parser created in this way works like an iterator on the input stream. XML data can be [parsed to a DOM representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_dom.htm) in a single action or [sequential parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_event.htm) can be used, where the parser stops after certain steps and passes control to the application.

In addition to the parsers created using CREATE\_PARSER, the factory method [CREATE\_TOKEN\_PARSER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_token.htm) can be used to create a token parser for direct parsing in ABAP data objects.

Hint

A parser can only be used once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data.

Continue
[iXML - Complete Parse to DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_dom.htm)
[iXML - Sequential Parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_event.htm)
[iXML - Parsing to Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_token.htm)
[iXML - Troubleshooting After Parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parse_error.htm)