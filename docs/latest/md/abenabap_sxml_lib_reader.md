---
title: "abap_sxml_lib_reader"
description: |
  abap_sxml_lib_reader - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_reader.htm"
abapFile: "abenabap_sxml_lib_reader.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenabap", "sxml", "lib", "reader"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm) →  [sXML - Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_object_types.htm) →  [sXML - XML Reader and XML Writer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_reader_writer.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20XML%20Reader%2C%20ABENABAP_SXML_LIB_READER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - XML Reader

The interfaces and classes of sXML library for the [XML reader](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_parse.htm) are:

IF\_SXML   IF\_SXML\_NSURI\_HELPER
  |         |
  |---------|
  |
  |--IF\_SXML\_READER
       |
       |--CL\_SXML\_READER
            |
            |--CL\_SXML\_STRING\_READER
            |
            |--CL\_SXML\_TABLE\_READER
            |
            |--CL\_SXML\_DATASET\_READER
            |
            |--CL\_SXML\_HTTP\_READER
            |
            |--CL\_SXML\_XOP\_READER

The interface IF\_SXML\_READER contains the components that are required for every XML reader. The abstract class CL\_SXML\_READER implements all general methods of an XML reader. The subclasses of these classes are specializations for different sources of XML data and provide a factory method for creating the associated XML reader.

The higher-level interfaces contain components for XML reader and XML writer:

-   IF\_SXML contains constants for the supported XML format.
-   IF\_SXML\_NSURI\_HELPER contains methods for namespaces.