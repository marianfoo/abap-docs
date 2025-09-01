---
title: "Hints"
description: |
  -   iXML documents and their nodes can also be specified as an XML source for XSL transformations called using CALL TRANSFORMATION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) so that they are also read. -   If the content of elements or attributes contai
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_access_read.htm"
abapFile: "abenabap_ixml_lib_dom_access_read.htm"
keywords: ["do", "if", "class", "data", "abenabap", "ixml", "lib", "dom", "access", "read"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Access to DOM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_access.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - DOM Reads, ABENABAP_IXML_LIB_DOM_ACCESS_READ, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

iXML - DOM Reads

-   [Direct reads](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_direct_read.htm)
-   [Reads using iterator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_iterat_read.htm)
-   [Reads using filter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_iterat_read.htm)

Hints

-   iXML documents and their nodes can also be specified as an XML source for XSL transformations called using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) so that they are also read.
-   If the content of elements or attributes contain the notations &lt;, &gt;, &amp;, &quot;, or &apos;, they are transformed automatically to the corresponding [characters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxml_oview.htm) when read.

Continue
[iXML - Direct Reads](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_direct_read.htm)
[iXML - Reads Using Iterators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_iterat_read.htm)
[iXML - Reads Using Filters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_dom_filter_read.htm)