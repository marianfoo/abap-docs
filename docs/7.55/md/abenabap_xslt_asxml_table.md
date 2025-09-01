  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) → 

asXML - Mapping of Internal Tables

The asXML representation of internal tables is significant mainly for XSL transformations. In simple transformations, this representation is important only when using the statement [tt:copy](javascript:call_link\('abenst_tt_copy.htm'\)).

The lines of an internal table are represented in asXML as a sequence of subelements of the table element. The content of each subelement matches the canonical representation of the line value. The name of a subelement is not relevant. If the canonical XML representation is created by a serialization, the name from ABAP Dictionary is used, if existing, otherwise the name is item. All table categories are allowed. Serializations do not pass any information about the table category to the XML data. If the target field of an [XSL transformation](javascript:call_link\('abenxsl_transformation_glosry.htm'\) "Glossary Entry") is a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the lines are sorted accordingly in the deserialization.

If the required XML element does not exist in deserializations to an internal table, the internal table retains its previous value. If an empty element is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) with the value "all" can be used.

Executable Example

[asXML, Mapping of Tables](javascript:call_link\('abenasxml_table_abexa.htm'\))