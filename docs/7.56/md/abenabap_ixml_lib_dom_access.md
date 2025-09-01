---
title: "Hints"
description: |
  -   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, whi
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access.htm"
abapFile: "abenabap_ixml_lib_dom_access.htm"
keywords: ["do", "if", "try", "class", "data", "abenabap", "ixml", "lib", "dom", "access"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) → 

iXML - Access to DOM

[DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendom_glosry.htm "Glossary Entry") describes a tree-like representation, implemented using instances of classes, of a complete XML document in the memory. At the same time, each component of the XML file is created by a separate object. The associated [interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom.htm) of the iXML Library can be used to access an XML document in DOM format.

-   [Reads performed on DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access_read.htm)
-   [Writes performed on DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access_read.htm)

Hints

-   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, which can be accessed individually or together.
-   iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm).

Executable Example

[DOM Representation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_dom_abexa.htm)

Continue
[iXML - DOM Reads](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access_read.htm)
[iXML - DOM Writes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_access_write.htm)