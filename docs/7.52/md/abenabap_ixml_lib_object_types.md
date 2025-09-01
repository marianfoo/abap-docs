  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

iXML Library - Classes and Interfaces

The following sections list the classes and interfaces of iXML Library.

-   [Access class](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\))

-   [Streams](javascript:call_link\('abenabap_ixml_lib_stream.htm'\))

-   [Parser](javascript:call_link\('abenabap_ixml_lib_parser.htm'\))

-   [DOM](javascript:call_link\('abenabap_ixml_lib_dom.htm'\))

-   [Renderer](javascript:call_link\('abenabap_ixml_lib_renderer.htm'\))

-   [Encoding](javascript:call_link\('abenabap_ixml_lib_encoding.htm'\))

All object types in iXML Library incorporate the interface IF\_IXML\_UNKNOWN. Reference variables of this type can point to all objects in iXML Library. The interface IF\_IXML\_UNKNOWN contains the method QUERY\_INTERFACE, which can be used for special [down casts](javascript:call_link\('abenixml_down_casts.htm'\)) within iXML Library.

Notes

-   The required classes and interfaces are documented in Class Builder.

-   Apart from the access class [CL\_IXML](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\)), no classes generally need to be specified directly in a program. All reads and writes are performed using interfaces. Even CL\_IXML is required only once, to execute the method CREATE.

-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

Continue
[iXML Library - Access Class](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\))
[iXML Library - Streams](javascript:call_link\('abenabap_ixml_lib_stream.htm'\))
[iXML Library - Parser](javascript:call_link\('abenabap_ixml_lib_parser.htm'\))
[iXML Library - DOM](javascript:call_link\('abenabap_ixml_lib_dom.htm'\))
[iXML Library - Renderer](javascript:call_link\('abenabap_ixml_lib_renderer.htm'\))
[iXML Library - Encoding](javascript:call_link\('abenabap_ixml_lib_encoding.htm'\))
[iXML Library - Down Casts](javascript:call_link\('abenixml_down_casts.htm'\))