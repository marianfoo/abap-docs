  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

XML Binding in Release 7.40, SP02

In Release 7.40, SP02, the interface between ABAP and XML has been enhanced as follows:

[1.New ST statement tt:read-write](#!ABAP_MODIFICATION_1@1@)

[2\. Mapping rules for tt:value](#!ABAP_MODIFICATION_2@2@)

[3\. Support for JSON](#!ABAP_MODIFICATION_3@3@)

Modification 1

New ST statement tt:read-write

The new ST statement [tt:read-write](javascript:call_link\('abenst_tt_read_write.htm'\)) is a short form for the statements tt:read and tt:write specified one after the other.

Modification 2

Mapping Rules for tt:value

In the ST statement [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)) the attribute [option="...,...”](javascript:call_link\('abenst_option.htm'\)) can be used to specify options for certain data types that override the default mapping of elementary data objects to the asXML format.

Modification 3

Support for JSON

The format IF\_SXML=>CO\_XT\_JSON has been added to the [formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)) supported by [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)). [XML readers](javascript:call_link\('abenxml_reader_glosry.htm'\) "Glossary Entry") and [XML writers](javascript:call_link\('abenxml_writer_glosry.htm'\) "Glossary Entry") created in this format can be used to process [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data. A special [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") is used as an intermediate format here.

The statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can access these JSON readers and JSON writers and use them as XML sources or XML targets. Furthermore, JSON data can also be specified as an XML source in strings and internal tables.