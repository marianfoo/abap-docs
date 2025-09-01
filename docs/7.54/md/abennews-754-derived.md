  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) →  [ABAP RESTful Programming Model in Release 7.54](javascript:call_link\('abennews-754-restful.htm'\)) → 

Derived Types in Release 7.54

[1\. TYPE STRUCTURE FOR](#!ABAP_MODIFICATION_1@1@)

[2\. Response information](#!ABAP_MODIFICATION_2@2@)

[3\. Absolute type names](#!ABAP_MODIFICATION_3@3@)

Modification 1

TYPE STRUCTURE FOR

It is now possible to directly get the row type of a [derived table type](javascript:call_link\('abenspecific_derived_types.htm'\)) using following syntax:

TYPES ts\_create TYPE STRUCTURE FOR ...

Modification 2

Response Information

There is now a syntax for the [response information](javascript:call_link\('abenrpm_export_parameters.htm'\)), that can be used in [handler](javascript:call_link\('abenrpm_handler_class.htm'\)) methods for the parameters FAILED, MAPPED and REPORTED:

TYPES ts\_reported TYPE RESPONSE FOR FAILED*|*MAPPED*|*REPORTED BehaviorDefinitionName.

They are structure types that contain a component for each entity.

Modification 3

Absolute Type Names

Derived types are now also easily recognizable in the [ABAP Debugger](javascript:call_link\('abenabap_debugger_glosry.htm'\) "Glossary Entry") using their [absolute type name](javascript:call_link\('abenvariables_derived_types.htm'\)). The absolute name starts with \\BDEF=, followed by the name of the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") (identical to the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") name); usually, this is followed by \\ENTITY=EntityName and the specification of an operation, for example an action.