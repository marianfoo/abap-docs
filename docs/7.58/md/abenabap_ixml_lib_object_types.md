---
title: "Hints"
description: |
  -   The required classes and interfaces are documented in the Class Builder. -   Apart from the access class CL_IXML(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_cl_ixml.htm), no classes generally must be specified directly in a program. All reads and writes are pe
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm"
abapFile: "abenabap_ixml_lib_object_types.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenabap", "ixml", "lib", "object"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Classes%20and%20Interfaces%2C%20ABENABAP_IXML_LIB_OBJECT_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Classes and Interfaces

The following sections list the classes and interfaces of iXML Library according to subareas.

-   [Access class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_cl_ixml.htm)
-   [Streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_stream.htm)
-   [Parser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parser.htm)
-   [DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_dom.htm)
-   [Renderer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_renderer.htm)
-   [Encoding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_encoding.htm)

All object types in iXML Library include the interface IF\_IXML\_UNKNOWN. Reference variables of this type can point to all objects in iXML Library. The interface IF\_IXML\_UNKNOWN contains the method QUERY\_INTERFACE, which can be used for special [downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenixml_down_casts.htm) within iXML Library.

Hints

-   The required classes and interfaces are documented in the Class Builder.
-   Apart from the access class [CL\_IXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_cl_ixml.htm), no classes generally must be specified directly in a program. All reads and writes are performed using interfaces. Even CL\_IXML is required only once to execute the method CREATE.
-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

Continue
[iXML - Access Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_cl_ixml.htm)
[iXML - Streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_stream.htm)
[iXML - Parser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_parser.htm)
[iXML - DOM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_dom.htm)
[iXML - Renderer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_renderer.htm)
[iXML - Character Encoding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_encoding.htm)
[iXML - Downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenixml_down_casts.htm)