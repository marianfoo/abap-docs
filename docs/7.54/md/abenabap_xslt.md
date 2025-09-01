---
title: "XSL Transformations"
description: |
  An XSL transformation is a program in the repository(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm 'Glossary Entry') that is written in XSLT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxslt_glosry.htm 'Glossary Entry') (XSLT program) and
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt.htm"
abapFile: "abenabap_xslt.htm"
keywords: ["do", "if", "case", "try", "method", "data", "abenabap", "xslt"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) → 

XSL Transformations

An XSL transformation is a program in the [repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry") that is written in [XSLT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxslt_glosry.htm "Glossary Entry") (XSLT program) and used for the transformation of XML data. Existing XLST programs in the repository can be called using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm). XSLT programs can be edited in the [Transformation Editor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransformation_editor_glosry.htm "Glossary Entry"). This is called up either with transaction STRANS or by choosing Edit Object → More → Transformation followed by XSLT Program in Object Navigator in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

The source and result of a general XSL transformation are [XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxml_glosry.htm "Glossary Entry") data. When an XSL transformation is called using the statement CALL TRANSFORMATION, however, ABAP data can also be transformed directly to XML and back. For this purpose, a [serialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialization_glosry.htm "Glossary Entry") or [deserialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeserialization_glosry.htm "Glossary Entry") is performed implicitly, with [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry") as an intermediate format.

![Figure](abdoc_asxml.gif)

-   In the case of transformations that use ABAP data as a source, the ABAP data is first serialized to a canonical [XML representation (asXML)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml.htm) with the predefined [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_id.htm) ID. This intermediate result is then used as the actual source for the XSL transformation. If the transformation ID itself is called in CALL TRANSFORMATION, the intermediate result is in the direct output.

-   In the case of transformations that have ABAP data as a result, the result of the XSL transformation is deserialized directly to the ABAP data. A prerequisite for the deserialization is that the result represents a canonical XML format. For transformations from XML to ABAP, the XML is first also transformed (conceptually) to an asXML structure, which is then deserialized, even if, technically, only one transformation step takes place.

The [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") contains an [SAP XSLT processor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxslt_processor_glosry.htm "Glossary Entry") for executing the transformations. It supports almost all XSLT statements and provides enhancements (extension instructions) such as the option of calling ABAP methods from XSLT programs. More information about the SAP XSLT processor can be found in the SAP XSLT Processor (Reference) documentation on [SAP Help Portal](http://help.sap.com).

Continue
[Identity Transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_id.htm)