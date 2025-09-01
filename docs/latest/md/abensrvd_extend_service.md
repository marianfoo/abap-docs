  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm) →  [ABAP CDS - SDL for Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20EXTEND%20SERVICE%2C%20ABENSRVD_EXTEND_SERVICE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - EXTEND SERVICE

Syntax

EXTEND SERVICE name
  WITH
{
   EXPOSE cds\_entity1 *\[*AS alias1*\]*;
  *\[*EXPOSE cds\_entity2 *\[*AS alias2*\]*;
   ...*\]*
}

Effect

Extends an existing [CDS service definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definition_glosry.htm "Glossary Entry") name using a [CDS service definition extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_def_ext_glosry.htm "Glossary Entry") in the [CDS SDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sdl_glosry.htm "Glossary Entry"). An existing CDS service definition can have one or more CDS service definition extensions.

Prerequisite

As a prerequisite for service definition extensions, the service definition to be extended must explicitly allow extensions. The annotation [@AbapCatalog.extensibility.extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm) must be set to true.

Rules for a Service Definition Extension

Service definition extensions can make additions to the original service definition, but they cannot modify, overwrite, or delete elements from it. The following rules apply:

-   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity1, cds\_entity2, ... can be exposed using the keyword EXPOSE. The same rules apply as to the original service definition, see topic [CDS SDL - DEFINE SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm).
-   Each exposed entity must have a unique name across the original service definition and all existing extensions. In case of naming conflicts, an alternative element alias1 must be assigned using the addition AS.
-   The exposed entities cds\_entity1, cds\_entity2, ... can be entities from the original data model or extension entities. The names of the exposed entities must comply with the [namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennamespace_glosry.htm "Glossary Entry") of the service definition extension. For example, if the name of a service definition extension starts with a Z, each exposed entity must also have a name that starts with Z. This can also be achieved by assigning an alias name with the addition AS.
-   If exposed, each entity should be exposed only once in a service definition and any of its extensions. Even if a new alias name is assigned, a syntax check warning occurs if an entity is exposed more than once.

Restrictions

-   CDS service definition extensions themselves cannot be extended.
-   [Service definition annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm) are not supported. That means that no annotations are allowed in front of the statement EXTEND SERVICE.

Example

The following CDS service definition extension

extend service DEMO\_CDS\_ORIGINAL\_SD with {
  expose DEMO\_RAP\_EXTENSIBLE\_EXT;
}

adds one further entity to the service definition

@EndUserText.label: 'CDS service definition for extension'
@AbapCatalog.extensibility.extensible: true
define service DEMO\_CDS\_ORIGINAL\_SD {
  expose DEMO\_RAP\_EXTENSIBLE\_ROOT;
}