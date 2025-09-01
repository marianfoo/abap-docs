  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - CDS Interface Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Definition, Interface BDEF, ABENBDL_DEFINE_BEH_INTERFACE, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Definition, Interface BDEF

Syntax

define behavior for ProjectedEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*\[*[use etag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm)*\]*
{
  [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body_interface.htm)
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") in the [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry"). An interface behavior definition can project a subset or all of the nodes of its underlying base BO. The [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") ProjectedEntity must be a [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry").

Syntax additions and components:

-   An alias name should be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). The length of an alias name AliasName is restricted to 30 characters. If no alias name is specified, a syntax check warning occurs.
-   The optional addition external can be used to provide an alias name for external usage. This external name can be used, for example, if another projection layer is built on top of the interface BDEF. It can be much longer than the alias name.
-   Only one [entity behavior characteristic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") is available, namely [use etag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm). An ETag field for [optimistic concurrency control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoptimistic_conc_control_glosry.htm "Glossary Entry") can be reused if it is specified in the base BO.
    -   For details on optimistic concurrency control, see topic [CDS BDL - ETag](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_etag.htm).
    -   For details on reuse, see topic [CDS BDL - use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm).
-   The [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body_interface.htm) can expose a subset of the transactional behavior or the base BDEF, for example, [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").

Hints

-   The following entity behavior characteristics are reused automatically, if applicable, and therefore must not be defined again in an interface:
    -   [RAP authorization control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") for [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").
    -   [RAP persistent table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry")
    -   [RAP draft table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendraft_table_glosry.htm "Glossary Entry")
    -   [Saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm)
    -   [RAP locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_locking_glosry.htm "Glossary Entry"): Interfaces inherit the lock master and lock dependent relations. Upon each modify operation on an interface instance, the method [FOR LOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_lock.htm) is called and the respective entities are locked.
    -   [RAP early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry")
    -   [RAP late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry")

Example

The following example shows an interface BDEF. The projected BO is DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes two fields from the BDEF derived types.

interface;
use draft;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root
use etag
{
  use create;
  use update;
  use delete;
  use action Activate;
  use action Discard;
  use action Edit;
  use action Resume;
  use action Prepare;
  field(suppress) DataFieldRoot;
}

Continue
[CDS BDL - Entity Behavior Body, Interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body_interface.htm)