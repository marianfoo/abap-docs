  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Parsing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parse.htm) → 

iXML - Sequential Parsing

To parse XML data sequentially, a dedicated [parser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parse.htm) is called repeatedly as follows:

DATA(event) = parser->parse\_event( ).

Here, parser is a reference variable that points to the parser. The method PARSE\_EVENT returns a reference variable with the type IF\_IXML\_EVENT that points to an object that represents an event that occurred during parsing. The parser processes the input stream [istream](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_input_output.htm) in sequences defined by the events for which the caller registered itself previously. The possible events are stored as constants co\_event... in the interface IF\_IXML\_EVENT. They are registered using the method

parser->set\_event\_subscription( events = if\_ixml\_event=>co\_event... +
                                         if\_ixml\_event=>co\_event... +
                                         ... ).

The parser stops after every event registered in this way and returns the properties of the current sequence using the object referenced by event. The method PARSE\_EVENT must be called again to process the next sequence. If all XML data has been parsed or if an error occurs, the return value of PARSE\_EVENT is initial.

By default, DOM-based XML documents are constructed bit by bit in the memory during sequential processing. Once processing is complete, they are available in the same ways as after the method [PARSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parse_dom.htm). [Troubleshooting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parse_error.htm) is also similar. During sequential parsing, the document represents a valid XML document with the elements parsed up until now. If sequential parsing is ended before all elements of the input stream have been processed, the XML document represents the part of the input stream parsed so far. The method SET\_DOM\_GENERATING of the parser can be used to deactivate the generation of the DOM representation off.

Hints

-   A parsing event is an iterator concept and not an event raised by [EVENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm) in ABAP Objects.
-   If the caller does not register any events before PARSE\_EVENT is called, PARSE\_EVENT works like PARSE.
-   The sequential parsing described here is not a variant of SAX (Simple API for XML). Callback methods are not called when an event occurs.

Executable Example

[iXML Library - Sequential Parsing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_sequential_parsing_abexa.htm)