  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) → 

XSL Transformations

An XSL transformation is a program in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") that is written in [XSLT](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry") (XSLT program) and used for the transformation of XML data. Existing XLST programs in the repository can be called using the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). XSLT programs can be edited in the [Transformation Editor](javascript:call_link\('abentransformation_editor_glosry.htm'\) "Glossary Entry"). This is called up either with transaction STRANS or by choosing Edit Object → More → Transformation followed by XSLT Program in Object Navigator in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The source and result of a general XSL transformation are [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") data. When an XSL transformation is called using the statement CALL TRANSFORMATION, however, ABAP data can also be transformed directly to XML and back. For this purpose, a [serialization](javascript:call_link\('abenserialization_glosry.htm'\) "Glossary Entry") or [deserialization](javascript:call_link\('abendeserialization_glosry.htm'\) "Glossary Entry") is performed implicitly, with [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") as an intermediate format.

![Figure](abdoc_asxml.gif)

-   In the case of transformations that use ABAP data as a source, the ABAP data is first serialized to a canonical [XML representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) with the predefined [identity transformation](javascript:call_link\('abenabap_xslt_id.htm'\)) ID. This intermediate result is then used as the actual source for the XSL transformation. If the transformation ID itself is called in CALL TRANSFORMATION, the intermediate result is in the direct output.

-   In the case of transformations that have ABAP data as a result, the result of the XSL transformation is deserialized directly to the ABAP data. A prerequisite for the deserialization is that the result represents a canonical XML format. For transformations from XML to ABAP, the XML is first also transformed (conceptually) to an asXML structure, which is then deserialized, even if, technically, only one transformation step takes place.

The [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") contains an [SAP XSLT processor](javascript:call_link\('abenxslt_processor_glosry.htm'\) "Glossary Entry") for executing the transformations. It supports almost all XSLT statements and provides enhancements (extension instructions) such as the option of calling ABAP methods from XSLT programs. More information about the SAP XSLT processor can be found in the SAP XSLT Processor (Reference) documentation in SAP Help Portal.

Continue
[XSL - Identity Transformation](javascript:call_link\('abenabap_xslt_id.htm'\))