---
title: "Notes"
description: |
  -   A parsing event is an iterator concept and not an event raised by EVENTS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm) in ABAP Objects. -   If the caller does not register any events before PARSE_EVENT is called, PARSE_EVENT works like PARSE. -   The sequential p
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse_event.htm"
abapFile: "abenabap_ixml_lib_parse_event.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "ixml", "lib", "parse", "event"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Parse](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse.htm) → 

iXML Library - Sequential Parsing

To parse XML data sequentially, a dedicated [parser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse.htm) is called multiple times as follows:

DATA(event) = parser->parse\_event( ).

Here, parser is a reference variable that points to the parser. The method PARSE\_EVENT returns a reference variable with the type IF\_IXML\_EVENT that points to an object representing an event that occurred during parsing. The parser processes the input stream [istream](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) in sequences defined by the events for which the caller registered itself earlier. The possible events are saved as constants co\_event... in the interface IF\_IXML\_EVENT. They are registered using the method

parser->set\_event\_subscription( events = if\_ixml\_event=>co\_event... +
                                         if\_ixml\_event=>co\_event... +
                                         ... ).

The parser pauses after every event registered like this and uses the object referenced by event to return the properties of the current sequence. The method PARSE\_EVENT must be called again to edit the next sequence. If all XML data was parsed or if an error occurred, the return value of PARSE\_EVENT is initial.

By default, DOM-based XML documents are constructed bit by bit in the memory during sequential processing. Once processing is complete, they are available in the same ways as after the method [PARSE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse_dom.htm). [Troubleshooting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse_error.htm) is also similar. During sequential parsing, the document represents a valid XML document with the elements parsed up until now. If sequential parsing is ended before all elements in the input stream have been processed, the XML document represents the part of the input stream parsed up until now. The method SET\_DOM\_GENERATING of the parser can be used to switch the generation of the DOM representation off.

Notes

-   A parsing event is an iterator concept and not an event raised by [EVENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapevents.htm) in ABAP Objects.

-   If the caller does not register any events before PARSE\_EVENT is called, PARSE\_EVENT works like PARSE.

-   The sequential parsing shown here is not a variant of SAX (Simple API for XML). Callback methods are not called when an event occurs.

Executable Example

[iXML Library, Sequential Parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_sequential_parsing_abexa.htm)