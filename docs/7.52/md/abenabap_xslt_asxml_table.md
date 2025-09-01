---
title: "Executable Example"
description: |
  asXML, Mapping of Tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_table_abexa.htm)
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_table.htm"
abapFile: "abenabap_xslt_asxml_table.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abenabap", "xslt", "asxml", "table"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_named.htm) → 

asXML - Mapping of Internal Tables

The asXML representation of internal tables is mainly relevant for XSL transformations. In simple transformations, this representation is important only when using the statement [tt:copy](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_copy.htm).

The rows of an internal table are represented in asXML as a sequence of subelements of the table element. The content of each subelement matches the canonical representation of the row value. The name of a subelement is not relevant. If the canonical XML representation is created by a serialization, the name from ABAP Dictionary is used, if applicable; otherwise the name is item. All table categories are allowed. Serializations do not copy any information about the table category to the XML data. If the target field of an [XSL transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry") is a [sorted table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"), the rows are sorted accordingly in the deserialization.

If the required XML element does not exist in deserializations to an internal table, the internal table retains its previous value. If an empty element is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

Executable Example

[asXML, Mapping of Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_table_abexa.htm)