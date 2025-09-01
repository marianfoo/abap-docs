  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20XML%20Binding%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-XML%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

XML Binding in ABAP Release 7.40, SP02

In ABAP release 7.40, SP02, the interface between ABAP and XML has been enhanced as follows:

[1\. New ST Statement tt:read-write](#!ABAP_MODIFICATION_1@1@)
[2\. Mapping Rules for tt:value](#!ABAP_MODIFICATION_2@2@)
[3\. Support for JSON](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New ST Statement tt:read-write

The new ST statement [tt:read-write](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_read_write.htm) is a short form for the statements tt:read and tt:write specified one after the other.

Modification 2   

Mapping Rules for tt:value

In the ST statement [tt:value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm) the attribute [option="...,..."](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_option.htm) can be used to specify options for certain data types that override the default mapping of elementary data objects to the asXML format.

Modification 3   

Support for JSON

The format IF\_SXML=>CO\_XT\_JSON has been added to the [formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_formats.htm) supported by [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm). [XML readers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxml_reader_glosry.htm "Glossary Entry") and [XML writers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxml_writer_glosry.htm "Glossary Entry") created in this format can be used to process [JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_glosry.htm "Glossary Entry") data. A special [JSON-XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_xml_glosry.htm "Glossary Entry") is used as an intermediate format here.

The statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm) can access these JSON readers and JSON writers and use them as XML sources or XML targets. Furthermore, JSON data can also be specified as an XML source in strings and internal tables.