---
title: "Notes"
description: |
  -   The required classes and interfaces are documented in Class Builder. -   Apart from the access class CL_IXML(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_cl_ixml.htm), no classes generally need to be specified directly in a program. All reads and writes are per
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_object_types.htm"
abapFile: "abenabap_ixml_lib_object_types.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenabap", "ixml", "lib", "object"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) → 

iXML Library - Classes and Interfaces

The following sections list the classes and interfaces of iXML Library.

-   [Access class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_cl_ixml.htm)

-   [Streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_stream.htm)

-   [Parser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parser.htm)

-   [DOM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_dom.htm)

-   [Renderer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_renderer.htm)

-   [Encoding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_encoding.htm)

All object types in iXML Library incorporate the interface IF\_IXML\_UNKNOWN. Reference variables of this type can point to all objects in iXML Library. The interface IF\_IXML\_UNKNOWN contains the method QUERY\_INTERFACE, which can be used for special [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_down_casts.htm) within iXML Library.

Notes

-   The required classes and interfaces are documented in Class Builder.

-   Apart from the access class [CL\_IXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_cl_ixml.htm), no classes generally need to be specified directly in a program. All reads and writes are performed using interfaces. Even CL\_IXML is required only once, to execute the method CREATE.

-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

Continue
[iXML Library - Access Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_cl_ixml.htm)
[iXML Library - Streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_stream.htm)
[iXML Library - Parser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parser.htm)
[iXML Library - DOM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_dom.htm)
[iXML Library - Renderer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_renderer.htm)
[iXML Library - Encoding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_encoding.htm)
[iXML Library - Down Casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_down_casts.htm)