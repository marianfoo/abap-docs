  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

conflict resolving enhancement implementation

An [enhancement implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which a [conflict switch](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconflict_switch_glosry.htm "Glossary Entry") is assigned instead of a regular [switch](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry"). A conflict resolving enhancement implementation is used for [conflict resolution](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). It must mirror the common semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be determined by assigning switches to the conflict switch. During conflict resolution, a conflict resolving enhancement implementation has priority over regular enhancements. In the event of multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.