  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-640.htm) → 

Field Symbols in Release 6.40

Modification

Reference to a Type Description Object in ASSIGN

The new addition [HANDLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_casting.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) can be used to refer to the [RTTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_object_glosry.htm "Glossary Entry") when [casting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencast_casting_glosry.htm "Glossary Entry") field symbols.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-640-rtti.htm)). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.