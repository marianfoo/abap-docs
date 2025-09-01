---
title: "Hints"
description: |
  -   If access to all nodes of an XML document in the memory is not required and no DTD is needed, sXML Library is an alternative to iXML Library with better performance. It also supports more XML formats and enables the handling of JSON(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/ab
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib.htm"
abapFile: "abenabap_sxml_lib.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenabap", "sxml", "lib"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) → 

sXML Library

sXML Library provides an API consisting of [classes and interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_object_types.htm) for reading (validating parses) and rendering (validating writes) of XML data in different formats and from various sources and to various targets.

-   [Supported Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_formats.htm)

-   [Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse.htm)

-   [Rendering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_render.htm)

Unlike in the [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm), no document is created in [DOM format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendom_glosry.htm "Glossary Entry") and no DTDs (Document Type Definitions) are supported. Instead, the nodes in the tree structure represented by the XML data are processed in series and the current node can always be accessed. The node can be accessed using token-based or object-oriented methods. The classes and interfaces are described in the class and interface documentation.

Hints

-   If access to all nodes of an XML document in the memory is not required and no DTD is needed, sXML Library is an alternative to iXML Library with better performance. It also supports more XML formats and enables the handling of [JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_glosry.htm "Glossary Entry") in ABAP programs.

-   The serial processing of XML data in sXML Library involves the [parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse.htm) and [rendering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_render.htm) of each node, front to back, without a preview. This is particularly clear in the parser method SKIP\_NODE, which "skips" a node, but still has to parse it and all its subnodes. This characteristic can be exploited to check whether data is well-formed and to test the copying of XML data to a writer.

-   For examples, see the corresponding executable [programs in the example library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_abexas.htm) and the package SXML\_DEMO.

-   sXML Library supports the [UTF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf_glosry.htm "Glossary Entry") character formats of the Unicode character set and hence also the characters from the [surrogate area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogate_area_glosry.htm "Glossary Entry").

-   The sXML Library methods are also used internal in calls of [Simple Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensimple_transformation_glosry.htm "Glossary Entry") using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm).

Continue
[sXML - Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_formats.htm)
[sXML - Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse.htm)
[sXML - Rendering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_render.htm)
[sXML - Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_object_types.htm)
[sXML - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_abexas.htm)