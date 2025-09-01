  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) → 

iXML - Classes and Interfaces

The following sections list the classes and interfaces of iXML Library according to subareas.

-   [Access class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_cl_ixml.htm)
-   [Streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_stream.htm)
-   [Parser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parser.htm)
-   [DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom.htm)
-   [Renderer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_renderer.htm)
-   [Encoding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_encoding.htm)

All object types in iXML Library include the interface IF\_IXML\_UNKNOWN. Reference variables of this type can point to all objects in iXML Library. The interface IF\_IXML\_UNKNOWN contains the method QUERY\_INTERFACE, which can be used for special [down casts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_down_casts.htm) within iXML Library.

Hints

-   The required classes and interfaces are documented in the Class Builder.
-   Apart from the access class [CL\_IXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_cl_ixml.htm), no classes generally must be specified directly in a program. All reads and writes are performed using interfaces. Even CL\_IXML is required only once to execute the method CREATE.
-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

Continue
[iXML - Access Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_cl_ixml.htm)
[iXML - Streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_stream.htm)
[iXML - Parser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parser.htm)
[iXML - DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom.htm)
[iXML - Renderer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_renderer.htm)
[iXML - Character Encoding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_encoding.htm)
[iXML - Down Casts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_down_casts.htm)