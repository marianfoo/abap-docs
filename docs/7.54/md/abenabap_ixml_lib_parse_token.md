  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Parsing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib_parse.htm) → 

iXML Library - Parsing to Data Objects

A token parser for parsing directly to data objects can be created as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(token\_parser) = ixml->create\_token\_parser(
                       istream        = ...
                       document       = ...
                       stream\_factory = ... ).

The static type of the reference variable token\_parser is then the interface IF\_IXML\_TOKEN\_PARSER. A token parser requires the same input parameters as a [normal parser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib_parse.htm) and the [error analysis](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib_parse_error.htm) is also the same.

However, an XML document in DOM format is not usually created. Instead, the information for the required XML data token is written directly to the ABAP data objects.

-   The method GET\_NEXT\_TOKEN uses iterative parsing to parse the required tokens. The method GET\_NODE\_INFO can be used to read the information about a parsed token to a structure of the type SIXMLNODE.

-   The method PARSE\_TOKENS enters the information about the required tokens directly into the tabular attribute TOKENS of type SIXMLDOM of row type SIXMLNODE.

The parsed tokens can be specified by using the input parameter TOKEN\_MASK. The information displayed can be specified using the input parameter INFO\_MASK.

Note

By using a [token renderer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_ixml_lib_render.htm), it is possible to render an internal table of type SIXMLDOM (which contains the complete information for an XML document) into XML data.

Executable Examples

-   [Token Parsers and Renderers, Iterative](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenixml_parse_render_token_abexa.htm)

-   [Token Parsers and Renderers, Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenixml_parse_render_tk_tab_abexa.htm).