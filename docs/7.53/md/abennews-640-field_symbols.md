  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-640.htm) → 

Field Symbols in Release 6.40

[1\. Reference to a type description object in ASSIGN](#!ABAP_MODIFICATION_1@1@)

Modification 1

Reference to a Type Description Object in ASSIGN

The new addition [HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) can be used to refer to the [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_object_glosry.htm "Glossary Entry") when [casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry") field symbols.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-640-rtti.htm)). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.