  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20Library%2C%20ABENABAP_SXML_LIB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML Library

sXML Library provides an API consisting of [classes and interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) for reading (validating parses) and rendering (validating writes) of XML data in different formats and from different sources or to different targets.

-   [Supported Formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\))
-   [Parsing](javascript:call_link\('abenabap_sxml_lib_parse.htm'\))
-   [Rendering](javascript:call_link\('abenabap_sxml_lib_render.htm'\))

Unlike in the [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)), no document is created in [DOM format](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") and no DTDs (Document Type Definitions) are supported. Instead, the nodes of the tree structure represented by the XML data are processed serially and only the current node can always be accessed. The node can be accessed using token-based or object-oriented methods. The classes and interfaces are described in the class and interface documentation.

Hints

-   sXML Library supports the [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") character representation of the Unicode character set and hence also characters from the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry").
-   The sXML Library methods are also used internally in calls of [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") using the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).
-   The serial processing of XML data in sXML Library involves the [parsing](javascript:call_link\('abenabap_sxml_lib_parse.htm'\)) and [rendering](javascript:call_link\('abenabap_sxml_lib_render.htm'\)) of each node front to back without a preview. This is particularly clear in the parser method SKIP\_NODE, which skips a node, but still has to parse it with all subnodes. This characteristic can be exploited to check whether data is well-formed and to test the copying of XML data to a writer.
-   For examples, see the corresponding executable [programs in the example library](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) and the package SXML\_DEMO.
-   If access to all nodes of an XML document in the memory is not required and no DTD is needed, sXML Library is an alternative to iXML Library with better performance. It also supports more XML formats and enables the handling of [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") in ABAP programs.

Continue
[sXML - Formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\))
[sXML - Parsing](javascript:call_link\('abenabap_sxml_lib_parse.htm'\))
[sXML - Rendering](javascript:call_link\('abenabap_sxml_lib_render.htm'\))
[sXML - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\))
[sXML - Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\))