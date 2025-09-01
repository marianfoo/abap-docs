  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) →  [ABAP RESTful Programming Model in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-restful.htm) → 

Derived Types in Release 7.54

[1\. TYPE STRUCTURE FOR](#!ABAP_MODIFICATION_1@1@)
[2\. Response information](#!ABAP_MODIFICATION_2@2@)
[3\. Absolute type names](#!ABAP_MODIFICATION_3@3@)

Modification 1

TYPE STRUCTURE FOR

It is now possible to directly get the row type of a [derived table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenspecific_derived_types.htm) using following syntax:

TYPES ts\_create TYPE STRUCTURE FOR ...

Modification 2

Response Information

There is now a syntax for the [response information](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_export_parameters.htm), that can be used in [handler](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm) methods for the parameters FAILED, MAPPED and REPORTED:

TYPES ts\_reported TYPE RESPONSE FOR FAILED*|*MAPPED*|*REPORTED BehaviorDefinitionName.

They are structure types that contain a component for each entity.

Modification 3

Absolute Type Names

Derived types are now also easily recognizable in the [ABAP Debugger](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_debugger_glosry.htm "Glossary Entry") using their [absolute type name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariables_derived_types.htm). The absolute name starts with \\BDEF=, followed by the name of the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (identical to the [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry") name); usually, this is followed by \\ENTITY=EntityName and the specification of an operation, for example an action.