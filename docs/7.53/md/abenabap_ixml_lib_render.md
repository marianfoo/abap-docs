  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

iXML Library - Render

-   [Rendering a Full XML Document](#abenabap-ixml-lib-render-1--------rendering-individual-nodes---@ITOC@@ABENABAP_IXML_LIB_RENDER_2)

-   [Token Renderers](#@@ITOC@@ABENABAP_IXML_LIB_RENDER_3)

Note

When data is rendered as character-like XML data, this data is prefixed by the byte order mark (BOM) that is required by the XML standard.

Rendering a Full XML Document

An XML document in DOM representation is rendered using an XML renderer, created as follows using the iXML factory:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(renderer) = ixml->create\_renderer(
                   ostream        = ...
                   document       = ... ).

The static type of the reference variable renderer is then the interface IF\_IXML\_RENDERER. A separate renderer is needed for each XML document. The renderer requires the following input parameters:

-   The output stream [ostream](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) that is the target of the rendering.

-   The XML document [document](javascript:call_link\('abenabap_ixml_lib_input_output.htm'\)) that is rendered.

A renderer created in this way can be used to render the full XML document as follows:

renderer->render( ).

The rendered document is added to the data sink of the output stream.

Note

When the full document is rendered, the data sink of the output stream should usually be initial at the start. Otherwise, all the XML data is appended to existing content.

Rendering Individual Nodes

The interface IF\_IXML\_NODE also contains a method, RENDER, that permits only parts of an XML document to be rendered:

node->render( ostream = ...
              recursive = abap\_true|abap\_false ).

The subtree is rendered whose initial node is pointed to by the reference variable node. recursive is used to specify whether the subnodes are respected or not. The rendered subtree is added to the data sink of the output stream.

Notes

-   Using rendering of subtrees, XML data in the data sink of the output stream can be constructed from various parts.

-   Sequential rendering using events (as in [sequential parsing](javascript:call_link\('abenabap_ixml_lib_parse_event.htm'\))) is not available.

Executable Example

[iXML Library - Render](javascript:call_link\('abenixml_render_abexa.htm'\))

Token Renderers

Instead of using CREATE\_RENDERER to create a renderer for an XML document in DOM representation, a token renderer can be created as follows:

DATA(ixml)  = cl\_ixml=>create( ).
...
DATA(token\_renderer) = ixml->create\_token\_renderer( ostream = ... ).

The static type of the reference variable token\_renderer is then the interface IF\_IXML\_TOKEN\_RENDERER. A token renderer only needs an output stream as an input parameter, but not an XML document in DOM representation. Instead, an internal table node\_infos can be rendered as follows:

token\_renderer->render( node\_infos ).

The table node\_infos must have table type SIXMLDOM with row type SIXMLNODE and contain all required information for constructing XML data. Each row in the internal table describes a token of the XML data. The meaning of the columns is described using the counter type CO\_NI\_ of the interface IF\_IXML\_TOKEN\_PARSER

Note

An input table for the method RENDERER of the interface IF\_IXML\_TOKEN\_RENDERER can be created separately or be created from XML data using a [token parser](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\)) and modified later.

Executable Examples

-   [Token Parsers and Renderers, Iterative](javascript:call_link\('abenixml_parse_render_token_abexa.htm'\))

-   [Token Parsers and Renderers, Table](javascript:call_link\('abenixml_parse_render_tk_tab_abexa.htm'\)).