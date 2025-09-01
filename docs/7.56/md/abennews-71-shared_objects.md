  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-71.htm) → 

Shared Objects in Release 7.0, EhP2

[1\. Handling of Memory Bottlenecks](#!ABAP_MODIFICATION_1@1@)
[2\. Data References in the Shared Objects Memory](#!ABAP_MODIFICATION_2@2@)
[3\. Area Binding](#!ABAP_MODIFICATION_3@3@)
[4\. Methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE Replaced](#!ABAP_MODIFICATION_4@4@)
[5\. Service Class CL\_SHM\_UTILITIES](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Handling of Memory Bottlenecks

From Release 7.0, EhP2, memory bottlenecks in the shared objects memory raise catchable exceptions of the class CX\_SHM\_OUT\_OF\_MEMORY. Previously, uncatchable runtime errors were raised.

Modification 2   

Data References in the Shared Objects Memory

From Release 7.0, EhP2, [anonymous data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") in the [shared objects memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry") can also be created with direct reference to data elements and table types of ABAP Dictionary using the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_area_handle.htm) of the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data.htm).

Modification 3   

Area Binding

From Release 7.0, EhP2, the lifetime and visibility of area instances can be bound not only to the current [AS instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") but also to the following:

-   [User sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_session_glosry.htm "Glossary Entry")
-   [Top level transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentop_level_transaction_glosry.htm "Glossary Entry")

Modification 4   

Methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE Replaced

The methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE of an [area class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_class_glosry.htm "Glossary Entry") for transactional areas may no longer be used. Instead, the parameter AFFECT\_SERVER of the methods FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE can be used for areas of this type with the Application Server area binding.

Modification 5   

Service Class CL\_SHM\_UTILITIES

The class CL\_SHM\_UTILITIES is used to query the attributes of area instances in programs.