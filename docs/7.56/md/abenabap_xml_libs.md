  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) → 

XML - Class Libraries

The following libraries that are delivered as part of AS ABAP enable processing of XML data based on classes and interfaces:

-   [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\))
    
    The "integrated" XML Library provides methods for parsing XML data in XML 1.0 format to a [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") representation, for processing a DOM representation, and for rendering a DOM representation in XML data. iXML Library supports DTDs (Document Type Definitions).
    
-   [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\))
    
    The "serial" XML Library provides methods for iterative processing of XML data in various formats. An XML reader reads XML data node by node. An XML writer writes individual nodes in XML data. sXML Library supports [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry").
    

Objects of these libraries can be used as the source or target of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Executable Example

[Access to XML using Class Libraries](javascript:call_link\('abenxml_access_abexa.htm'\))

Continue
[iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\))
[sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\))
![Example](exa.gif "Example") [Access to XML using Class Libraries](javascript:call_link\('abenxml_access_abexa.htm'\))