  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) → 

XSL Transformations

An XSL transformation is a program in the [repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_glosry.htm "Glossary Entry") that is written in [XSLT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxslt_glosry.htm "Glossary Entry") (XSLT program) and used for the transformation of XML data. Existing XLST programs in the repository can be called using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm). XSLT programs can be edited in the [Transformation Editor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransformation_editor_glosry.htm "Glossary Entry"). This is called either with transaction STRANS or by choosing Edit Object → More → Transformation followed by XSLT Program in the Object Navigator in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

The source and result of a general XSL transformation are [XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_glosry.htm "Glossary Entry") data. When an XSL transformation is called using the statement CALL TRANSFORMATION, however, ABAP data can also be transformed directly to XML and vice versa. For this purpose, a [serialization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenserialization_glosry.htm "Glossary Entry") or [deserialization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeserialization_glosry.htm "Glossary Entry") is performed implicitly, with [asXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasxml_glosry.htm "Glossary Entry") as an intermediate format.

![Figure](bdoc_asxml.gif)

-   In the case of transformations that use ABAP data as a source, the ABAP data is first serialized to a canonical [XML representation (asXML)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml.htm) with the predefined [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_id.htm) ID. This intermediate result is then used as the actual source for the XSL transformation. If the transformation ID itself is called in CALL TRANSFORMATION, the intermediate result is in the direct output.
-   In the case of transformations that have ABAP data as a result, the result of the XSL transformation is deserialized directly to the ABAP data. A prerequisite for the deserialization is that the result represents a canonical XML representation. For transformations from XML to ABAP, the transformation is also performed conceptually to a virtual asXML structure first, which is then deserialized, even if only one transformation step takes place technically.

The [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") contains an [SAP XSLT processor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxslt_processor_glosry.htm "Glossary Entry") for executing the transformations. It supports almost all XSLT statements and provides enhancements (extension instructions) such as the option of calling ABAP methods from XSLT programs. For more information about the SAP XSLT processor, see the documentation SAP XSLT Processor (Reference) in SAP Help Portal.

Continue
[XSL - Identity Transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_id.htm)