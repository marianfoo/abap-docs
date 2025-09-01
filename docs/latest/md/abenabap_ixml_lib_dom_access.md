---
title: "Hints"
description: |
  -   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, whi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_access.htm"
abapFile: "abenabap_ixml_lib_dom_access.htm"
keywords: ["do", "if", "try", "class", "data", "abenabap", "ixml", "lib", "dom", "access"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Access%20to%20DOM%2C%20ABENABAP_IXML_LIB_DOM_ACCESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Access to DOM

[DOM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendom_glosry.htm "Glossary Entry") describes a tree-like representation, implemented using instances of classes, of a complete XML document in the memory. At the same time, each component of the XML file is created by a separate object. The associated [interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom.htm) of the iXML Library can be used to access an XML document in DOM format.

-   [Reads performed on DOM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_access_read.htm)
-   [Writes performed on DOM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_access_read.htm)

Hints

-   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, which can be accessed individually or together.
-   iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm).

Executable Example

[DOM Representation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenixml_dom_abexa.htm)

Continue
[iXML - DOM Reads](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_access_read.htm)
[iXML - DOM Writes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_access_write.htm)