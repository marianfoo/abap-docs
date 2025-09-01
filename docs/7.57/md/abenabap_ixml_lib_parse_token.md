  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Parsing](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Parsing to Data Objects, ABENABAP_IXML_LIB_PARSE_TOKEN, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Parsing to Data Objects

A token parser for parsing directly to data objects can be created as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(token\_parser) = ixml->create\_token\_parser(
                       istream        = ...
                       document       = ...
                       stream\_factory = ... ).

The static type of the reference variable token\_parser is then the interface IF\_IXML\_TOKEN\_PARSER. A token parser requires the same input parameters as a [regular parser](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) and [troubleshooting](javascript:call_link\('abenabap_ixml_lib_parse_error.htm'\)) is also the same.

However, an XML document in DOM format is not usually created. Instead, the information for the required XML data token is written directly to the ABAP data objects.

-   The method GET\_NEXT\_TOKEN parses the required tokens iteratively. The method GET\_NODE\_INFO can be used to read the information about a parsed token to a structure of the type SIXMLNODE.
-   The method PARSE\_TOKENS places the information about the required tokens directly into the tabular attribute TOKENS of type SIXMLDOM of line type SIXMLNODE.

The parsed tokens can be specified by using the input parameter TOKEN\_MASK. The information that is read is determined by an input parameter INFO\_MASK.

Hint

By using a [token renderer](javascript:call_link\('abenabap_ixml_lib_render.htm'\)), it is possible to render an internal table of type SIXMLDOM, which contains the complete information for an XML document, into XML data.

Executable Examples

-   [Token Parsers and Renderers, Iterative](javascript:call_link\('abenixml_parse_render_token_abexa.htm'\))
-   [Token Parsers and Renderers, Table](javascript:call_link\('abenixml_parse_render_tk_tab_abexa.htm'\)).