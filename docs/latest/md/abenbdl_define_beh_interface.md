  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Interface Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo_interface.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Definition%2C%20Interface%20BDEF%2C%20ABENBDL_DEFINE_BEH_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

RAP - Entity Behavior Definition, Interface BDEF

Syntax

define behavior for ProjectedEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*\[*[use etag](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm)*\]*
{
  [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_interface.htm)
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP BO interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") in the [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry"). An interface behavior definition can project a subset or all of the nodes of its underlying base BO. The [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") ProjectedEntity must be a [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry").

Syntax additions and components:

-   An alias name should be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). The length of an alias name AliasName is restricted to 30 characters. If no alias name is specified, a syntax check warning occurs.
-   The optional addition external can be used to provide an alias name for external usage. This external name can be used, for example, if another projection layer is built on top of the interface BDEF. It can be much longer than the alias name.
-   Only one [entity behavior characteristic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") is available, namely [use etag](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm). An ETag field for [optimistic concurrency control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoptimistic_conc_control_glosry.htm "Glossary Entry") can be reused if it is specified in the base BO.
    -   For details on optimistic concurrency control, see topic [RAP BDL - ETag](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_etag.htm).
    -   For details on reuse, see topic [RAP BDL - use](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).
-   The [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_interface.htm) can expose a subset of the transactional behavior or the base BDEF, for example, [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").

Hint

The following entity behavior characteristics are reused automatically, if applicable, and therefore must not be defined again in an interface:

-   [RAP authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") for [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").
-   [RAP persistent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry")
-   [RAP draft table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_table_glosry.htm "Glossary Entry")
-   [Saving options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm)
-   [RAP locking](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_locking_glosry.htm "Glossary Entry"): Interfaces inherit the lock master and lock dependent relations. Upon each modify operation on an interface instance, the method [FOR LOCK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_lock.htm) is called and the respective entities are locked.
-   [RAP early numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry")
-   [RAP late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry")

Example

The following example shows an interface BDEF. The projected BO is DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes a field from the BDEF derived types.

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
[RAP - Entity Behavior Body, Interface BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_interface.htm)