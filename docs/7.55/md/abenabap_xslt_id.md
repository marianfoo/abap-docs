---
title: "XSL - Identity Transformation"
description: |
  Under the name ID, an identity transformation is provided by SAP, which is specially handled by the runtime environment depending on the source and target: -   An identity transformation from XML to XML produces a result that is a normalized copy of the source document in which the attributes of an
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt_id.htm"
abapFile: "abenabap_xslt_id.htm"
keywords: ["do", "if", "case", "try", "data", "abenabap", "xslt"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [XSL Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt.htm) → 

XSL - Identity Transformation

Under the name ID, an identity transformation is provided by SAP, which is specially handled by the runtime environment depending on the source and target:

-   An identity transformation from XML to XML produces a result that is a normalized copy of the source document in which the attributes of an element are in alphabetical order.

-   An identity transformation from ABAP to XML produces the canonical XML representation ([asXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt_asxml.htm)) of the ABAP data (explicit serialization).

-   An identity transformation from XML to ABAP transforms a canonical XML representation to ABAP data (explicit deserialization).

-   In the case of an identity transformation with [JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_glosry.htm "Glossary Entry") data as an XML source or an [JSON writer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_writer_glosry.htm "Glossary Entry") as an XML target, a special type of [handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json_trafo_id.htm) is performed for [JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_glosry.htm "Glossary Entry").

In each transformation from XML, the identity transformation validates the outbound data. If an XML element has multiple attributes with the same name, all of these attributes are ignored except one, which is given the value of the last identically named attribute (see example program DEMO\_XML\_ATTRIBUTES). The identity transformation implicitly uses canonical XML formats for all transformations apart from XML to XML to transform non-XML data (ABAP, JSON) into XML format. The identity transformation is used internally for this purpose and can be called explicitly if the formats it creates are sufficient or are to be analyzed.

Hints

-   The identity transformation ID is not completely symmetrical. When text strings that contain only blanks are serialized, the result is a node with the same number of blanks. When nodes that contain only spaces (such as blanks or line breaks) are deserialized, however, an empty text is created.

-   The identity transformation ID exists as an XSLT program in the repository but it is not always executed as a program. When the identity transformation ID is called, an optimized ID engine of the runtime environment might be called, depending on the source and target. This ID engine creates the result described above.

-   If the predefined identity transformation ID is copied to a different XSLT program, the full scope of the target program cannot be used, since in this case no internal special handling takes place. A non-optimized copy of ID is executed in accordance with its source code as an [XSL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendom_glosry.htm "Glossary Entry") transformation on a DOM from the iXML library. More specifically, JSON data is not handled in the same way as with ID and usually raises an exception.

-   If the identity transformation ID is used, the way element names are written in XML or object names written in JSON cannot be modified. If XML data or JSON data is to be deserialized to ABAP data, however, the names of the corresponding elements or objects must be in uppercase letters. If this is not the case in the source data, either transformations must be created or the data modified in advance. The executable example [Transformation of XML Element Names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_trafo_upper_lower_abexa.htm) demonstrates how to modify [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json_names_to_upper_abexa.htm) data and the example JSON, Transform Names demonstrates this for JSON data.

Executable Example

[Identity Transformation to the asXML Format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxslt_abexa.htm)

Continue
![Example](exa.gif "Example") [XSL - Identity Transformation to asXML Format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxslt_abexa.htm)