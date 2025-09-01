  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Classes%20and%20Interfaces%2C%20ABENABAP_IXML_LIB_OBJECT_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Classes and Interfaces

The following sections list the classes and interfaces of iXML Library according to subareas.

-   [Access class](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\))
-   [Streams](javascript:call_link\('abenabap_ixml_lib_stream.htm'\))
-   [Parser](javascript:call_link\('abenabap_ixml_lib_parser.htm'\))
-   [DOM](javascript:call_link\('abenabap_ixml_lib_dom.htm'\))
-   [Renderer](javascript:call_link\('abenabap_ixml_lib_renderer.htm'\))
-   [Encoding](javascript:call_link\('abenabap_ixml_lib_encoding.htm'\))

All object types in iXML Library include the interface IF\_IXML\_UNKNOWN. Reference variables of this type can point to all objects in iXML Library. The interface IF\_IXML\_UNKNOWN contains the method QUERY\_INTERFACE, which can be used for special [downcasts](javascript:call_link\('abenixml_down_casts.htm'\)) within iXML Library.

Hints

-   The required classes and interfaces are documented in the Class Builder.
-   Apart from the access class [CL\_IXML](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\)), no classes generally must be specified directly in a program. All reads and writes are performed using interfaces. Even CL\_IXML is required only once to execute the method CREATE.
-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

Continue
[iXML - Access Class](javascript:call_link\('abenabap_ixml_lib_cl_ixml.htm'\))
[iXML - Streams](javascript:call_link\('abenabap_ixml_lib_stream.htm'\))
[iXML - Parser](javascript:call_link\('abenabap_ixml_lib_parser.htm'\))
[iXML - DOM](javascript:call_link\('abenabap_ixml_lib_dom.htm'\))
[iXML - Renderer](javascript:call_link\('abenabap_ixml_lib_renderer.htm'\))
[iXML - Character Encoding](javascript:call_link\('abenabap_ixml_lib_encoding.htm'\))
[iXML - Downcasts](javascript:call_link\('abenixml_down_casts.htm'\))