  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON-XML%20-%20XML%20Representation%20of%20JSON%2C%20ABENABAP_JSON_XML%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

JSON-XML - XML Representation of JSON

JSON XML is an SAP-specific representation of [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data in XML format. The [single values](javascript:call_link\('abenjson_oview.htm'\)), [arrays](javascript:call_link\('abenjson_oview.htm'\)), and [objects](javascript:call_link\('abenjson_oview.htm'\)) in JSON are represented as follows in XML.

-   [Single Values](#abenabap-json-xml-1-----------character-like-values---@ITOC@@ABENABAP_JSON_XML_2)
    -   [Number Values](#abenabap-json-xml-3-----------boolean-values---@ITOC@@ABENABAP_JSON_XML_4)
    -   [Null Values](#abenabap-json-xml-5-------data-structures---@ITOC@@ABENABAP_JSON_XML_6)
    -   [Arrays](#abenabap-json-xml-7-----------objects---@ITOC@@ABENABAP_JSON_XML_8)

Single Values   

Character-Like Values   

"..." → <str>...</str>

Number Values   

... → <num>...</num>

Boolean Values   

true → <bool>true</bool>

false → <bool>false</bool>

Null Values   

null → <null />

Data Structures   

Arrays   

\[...\] → <array>...</array>

The comma-separated components of arrays are mapped as subelements of the element <array>, whereby the type-specific mapping rule applies to each element.

Hint

Since the components of an array do not have names, the elements of an array in JSON-XML cannot have the corresponding attributes, unlike objects.

Objects   

{...} → <object>...</object>

The comma-separated components of objects are mapped as subelements of the element <object>. There are two representation methods:

-   "n":... → <... name="n">...</...>
-   "n":... → <member name="n"><...>...</...></member>

In the first shorter method, used by default, a component is mapped like an element of an array, with the name n added to the type-specific XML element of the component as the content of the attribute name.

In the second longer method, the type-specific XML element of a component is nested in an additional element <member>, which then has the attribute name with the name of the component.

Hints

-   In the longer alternative for object components, each component in JSON-XML is clearly marked by a <member> element, which can help to distinguish objects of arrays when only partial fragments of JSON data are processed.
-   The longer alternative for object components with <member> elements can be a better option for [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"), when ABAP data is serialized to JSON or deserialized from JSON.
-   A [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") that [renders](javascript:call_link\('abenabap_json_sxml.htm'\)) JSON-XML to JSON accepts both alternatives for object components. A [JSON reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry") that [parses](javascript:call_link\('abenabap_json_sxml.htm'\)) JSON data to JSON-XML creates the shorter variant by default. To create the longer variant with <member> elements, the method SET\_OPTION of the interface IF\_SXML\_READER can be used to set the option IF\_SXML\_READER=>CO\_OPT\_SEP\_MEMBER.

Example

-   The class CL\_DEMO\_JSON\_XML shows examples of the default JSON-XML representation of valid JSON data.
-   The program DEMO\_JSON\_TO\_JSON\_XML allows any valid JSON data to be entered and displays its JSON-XML representation.
-   For information about the rendering and parsing of JSON-XML representations in both alternatives for object components, see [Object Components in JSON-XML](javascript:call_link\('abenabap_json_xml_abexa.htm'\)).