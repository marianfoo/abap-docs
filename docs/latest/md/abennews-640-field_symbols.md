  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.40](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-FIELD_SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Field Symbols in ABAP Release 6.40

Modification

Reference to a Type Description Object in ASSIGN

The new addition [HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) can be used to refer to the [RTTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") [type description objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_object_glosry.htm "Glossary Entry") when [casting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry") field symbols.

From ABAP release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for ABAP release 6.40](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-640-rtti.htm)). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.