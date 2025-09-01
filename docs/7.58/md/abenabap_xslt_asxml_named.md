  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20ABAP%20Data%20Types%2C%20ABENABAP_XSLT_ASXML_NAMED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

asXML - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asXML as the content of the following elements:

[<bn1>...</bn1>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[<bn2>...</bn2>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[...](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))

An additional area is implemented for the objects referenced by reference variables:

[<asx:heap>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
  [...](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[</asx:heap>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular XML representation and deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\))
-   [Mapping of Structures](javascript:call_link\('abenabap_xslt_asxml_structure.htm'\))
-   [Mapping of Internal Tables](javascript:call_link\('abenabap_xslt_asxml_table.htm'\))
-   [Mapping of Enumerated Types](javascript:call_link\('abenabap_xslt_asxml_enum.htm'\))
-   [Mapping of Reference Variables and Referenced Objects](javascript:call_link\('abenabap_xslt_asxml_references.htm'\))

Continue
[asXML - Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\))
[asXML - Mapping of Structures](javascript:call_link\('abenabap_xslt_asxml_structure.htm'\))
[asXML - Mapping of Internal Tables](javascript:call_link\('abenabap_xslt_asxml_table.htm'\))
[asXML - Mapping of Enumerated Types](javascript:call_link\('abenabap_xslt_asxml_enum.htm'\))
[asXML - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_xslt_asxml_references.htm'\))