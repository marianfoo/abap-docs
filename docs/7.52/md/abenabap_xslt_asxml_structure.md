  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_named.htm) → 

asXML - Mapping of Structures

The asXML representation of structures is significant mainly for XSL transformations. In simple transformations, this representation is important only when using the statement [tt:copy](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_copy.htm).

The components of an ABAP structure are represented in asXML as a sequence of subelements of the structure element. The content of each subelement corresponds to the canonical representation of the component value. The name of each subelement is the name of the corresponding component. In serializations, the subelements are represented in the order of the components in the structure. In deserializations of the asXML representation of a structure, the order of the subelements is not important and redundant XML elements are ignored. Components of the structure for which there are no subelements remain unchanged.

If the required XML element does not exist in deserializations to a structure, the structure retains its previous value. If an empty element is assigned to a structure, the subelements are missing for all components of the structure and the structure remains unchanged here too. To initialize the structure in deserializations in these cases, the transformation option [clear](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

Executable Examples

-   [asXML, Mapping of Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_structure_abexa.htm)

-   [Deserializing Structure Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asxml_asjson_empty_abexa.htm)