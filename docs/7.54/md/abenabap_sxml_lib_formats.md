  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) → 

sXML Library - Formats

The formats supported by sXML Library are represented by the constants of the interface IF\_SXML:

-   XML 1.0 (constant IF\_SXML=>CO\_XT\_XML10)

Standard XML in accordance with [W3C](http://www.w3.org/XML/). XML data is represented in a specific character format using a character string (standard is Unicode character format UTF-8). Raw data whose binary content is to be saved is portrayed using [Base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry") representation.

-   XOP (constant IF\_SXML=>CO\_XT\_XOP)

XML-binary Optimized Packaging in accordance with [W3C](http://www.w3.org/TR/xop10/). All data other than raw data is represented as a character string, as in XML 1.0. Raw data is not represented as part of the character string in [Base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry") format. Instead, elements xop:Include (namespace http://www.w3.org/2004/08/xop/include) are inserted in its place, which contain references to the raw data. The raw data itself is extracted unchanged and saved in byte strings. The string with the character string and the byte strings with the raw data are combined in a package whose parts can be edited together. In sXML Library, a package of this type is described using the structured type IF\_SXML\_XOP=>XOP\_PACKAGE, whose first component XOP\_DOCUMENT has the type string for the character string. The second component PARTS is a hashed table for the byte strings. The key column CONTENT\_ID is the reference target for the references in the xop:Include elements. The column BINARY\_DATA has the type xstring and the raw data is passed to this column.

-   Binary XML (constant IF\_SXML=>CO\_XT\_BINARY)

SAP-specific binary format for XML data. It suppresses redundant information. The XML data is not represented as globally readable character strings and the only character set allowed is UTF-8. Special XML readers and XML writers that understand the format are needed to parse and render XML data to [Binary XML](javascript:call_link\('abenbinary_xml_glosry.htm'\) "Glossary Entry"). sXML can be used to create these objects.

-   JSON (constant IF\_SXML=>CO\_XT\_JSON)

JavaScript Object Notation in accordance with [json.org](http://www.json.org/). [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") is not XML but JSON data can be represented using XML data. Once mapping of this type is the SAP-specific [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry"). The format JSON in sXML Library indicates that an XML writer of this format transforms valid JSON-XML data to JSON data and an XML reader detects JSON data and parses it as if it were JSON-XML data. All methods for [handling JSON in ABAP](javascript:call_link\('abenabap_json.htm'\)) are based on readers and writers like these.

When an [XML writer](javascript:call_link\('abenabap_sxml_lib_render.htm'\)) is created, the format created by the writer is defined as follows:

-   For all formats except XOP, the factory methods CREATE of the various writers have an input parameter TYPE to which the value of the constants above can be passed. The XML 1.0 format is used by default. The character format can be passed to the input parameter ENCODING. The default value is UTF-8. Writers Binary XML only accept the default.

-   Only the special class CL\_SXML\_XOP\_WRITER can be used for the XOP format. The factory method CREATE of this class does not need an input parameter. XOP writers always return data objects with the type IF\_SXML\_XOP=>XOP\_PACKAGE.

When an [XML reader](javascript:call_link\('abenabap_sxml_lib_parse.htm'\)) is created, it detects the format of the data passed to the parameter INPUT of the factory method CREATE. The same reader classes can be used for all formats except XOP. Only the special class CL\_SXML\_XOP\_READER can be used for the XOP format. The factory method CREATE of this class expects an actual parameter of the type IF\_SXML\_XOP=>XOP\_PACKAGE.

Notes

-   The attribute TYPE declared in the interface IF\_SXML contains the type of every XML reader and XML writer or the format it is editing. The possible values of the attribute are the same as those of the constants CO\_XT\_... of the interface.

-   XML readers and XML writers of a particular XML format can be used to transform this format to another format.

-   An XML writer (with the character format "UTF16BE" or "UTF16LE" that was passed to parameter ENCODING) uses the byte order mark (BOM) required by the XML standard as the prefix for the written XML data.

Executable Examples

-   [XML Formats](javascript:call_link\('abensxml_formats_abexa.htm'\))

-   [Transformation of Formats](javascript:call_link\('abensxml_format_trafos_abexa.htm'\))