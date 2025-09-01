  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Access to DOM, ABENABAP_IXML_LIB_DOM_ACCESS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

iXML - Access to DOM

[DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") describes a tree-like representation, implemented using instances of classes, of a complete XML document in the memory. At the same time, each component of the XML file is created by a separate object. The associated [interfaces](javascript:call_link\('abenabap_ixml_lib_dom.htm'\)) of the iXML Library can be used to access an XML document in DOM format.

-   [Reads performed on DOM](javascript:call_link\('abenabap_ixml_lib_dom_access_read.htm'\))
-   [Writes performed on DOM](javascript:call_link\('abenabap_ixml_lib_dom_access_read.htm'\))

Hints

-   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, which can be accessed individually or together.
-   iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Executable Example

[DOM Representation](javascript:call_link\('abenixml_dom_abexa.htm'\))

Continue
[iXML - DOM Reads](javascript:call_link\('abenabap_ixml_lib_dom_access_read.htm'\))
[iXML - DOM Writes](javascript:call_link\('abenabap_ixml_lib_dom_access_write.htm'\))