  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) → 

JSON-XML - XML Representation of JSON

JSON XML is an SAP-specific representation of [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data in XML format. The [single values](javascript:call_link\('abenjson_oview.htm'\)), [arrays](javascript:call_link\('abenjson_oview.htm'\)), and [objects](javascript:call_link\('abenjson_oview.htm'\)) in JSON are represented as followed in XML.

-   [Single Values](#@@ITOC@@ABENABAP_JSON_XML_1)

-   [Character-like values](#@@ITOC@@ABENABAP_JSON_XML_2)

-   [Number values](#@@ITOC@@ABENABAP_JSON_XML_3)

-   [Boolean values](#@@ITOC@@ABENABAP_JSON_XML_4)

-   [Null values](#@@ITOC@@ABENABAP_JSON_XML_5)

-   [Data Structures](#@@ITOC@@ABENABAP_JSON_XML_6)

-   [Arrays](#@@ITOC@@ABENABAP_JSON_XML_7)

-   [Objects](#@@ITOC@@ABENABAP_JSON_XML_8)

Single Values

Character-like values

"..." → <str>...</str>

Number values

... → <num>...</num>

Boolean values

true → <bool>true</bool>

false → <bool>false</bool>

Null values

null → <null />

Data Structures

Arrays

\[...\] → <array>...</array>

The components of arrays, separated by commas, are mapped as subelements of the element <array>, but the type-specific mapping rule applies to each element.

Note

Since the components of an array do not have names, the elements of an array in JSON-XML cannot have the corresponding attributes (unlike the case with objects).

Objects

{...} → <object>...</object>

The components of objects, separated by commas, are mapped as subelements of the element <object>. There are two representation methods:

-   "n":... → <... name="n">...</...>

-   "n":... → <member name="n"><...>...</...></member>

In the shorter method, used by default, a component is mapped like an element of an array, with the name n added to the type-specific XML element of the component as the content of the attribute name.

In the second longer method, the type-specific XML element of a component is nested in an additional element <member>, which then has the attribute name with the name of the component.

Notes

-   In the longer alternative for object components, each component in JSON-XML is identified clearly by a <member> element. This can make it easier to distinguish objects of arrays if only partial fragments of JSON data are being edited.

-   The longer alternative for object components with <member> elements can be a better option for [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"), when ABAP data is serialized to JSON or deserialized from JSON.

-   A [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") that [renders](javascript:call_link\('abenabap_json_sxml.htm'\)) JSON-XML to JSON accepts both alternatives for object components. A [JSON reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry") that [parses](javascript:call_link\('abenabap_json_sxml.htm'\)) JSON data to JSON-XML creates the shorter variant by default. To create the longer variant with <member> elements, the method SET\_OPTION of the interface IF\_SXML\_READER can be used to set the option IF\_SXML\_READER=>CO\_OPT\_SEP\_MEMBER.

Executable Examples

-   The program DEMO\_JSON\_XML shows examples of the default JSON-XML representation of valid JSON data.

-   The program DEMO\_JSON\_TO\_JSON\_XML allows any valid JSON data to be entered and displays its JSON-XML representation.

-   For information about the rendering and parsing of JSON-XML representations in both alternatives for object components, see [Object Components in JSON-XML](javascript:call_link\('abenabap_json_xml_abexa.htm'\)).