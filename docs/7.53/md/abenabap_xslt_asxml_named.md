  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) → 

asXML - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asXML as the content of the following elements:

[<bn1>...</bn1>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[<bn2>...</bn2>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[...](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))

An additional area is implemented for the objects referenced by reference variables:

[<asx:heap>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
  [...](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))
[</asx:heap>](javascript:call_link\('abenabap_xslt_asxml_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular XML representation; deserializations operate in the opposite direction:

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