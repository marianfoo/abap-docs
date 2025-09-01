  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Definition, Interface BDEF, ABENBDL_DEFINE_BEH_INTERFACE, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Definition, Interface BDEF

Syntax

define behavior for ProjectedEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*\[*[use etag](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
{
  [entity behavior body](javascript:call_link\('abenbdl_body_interface.htm'\))
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry") in the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). An interface behavior definition can project a subset or all of the nodes of its underlying base BO. The [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") ProjectedEntity must be a [CDS transactional interface](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

Syntax additions and components:

-   An alias name should be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). The length of an alias name AliasName is restricted to 30 characters. If no alias name is specified, a syntax check warning occurs.
-   The optional addition external can be used to provide an alias name for external usage. This external name can be used, for example, if another projection layer is built on top of the interface BDEF. It can be much longer than the alias name.
-   Only one [entity behavior characteristic](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") is available, namely [use etag](javascript:call_link\('abenbdl_use_projection.htm'\)). An ETag field for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") can be reused if it is specified in the base BO.
    -   For details on optimistic concurrency control, see topic [CDS BDL - ETag](javascript:call_link\('abenbdl_etag.htm'\)).
    -   For details on reuse, see topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   The [entity behavior body](javascript:call_link\('abenbdl_body_interface.htm'\)) can expose a subset of the transactional behavior or the base BDEF, for example, [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").

Hints

-   The following entity behavior characteristics are reused automatically, if applicable, and therefore must not be defined again in an interface:
    -   [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") for [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").
    -   [RAP persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry")
    -   [RAP draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry")
    -   [Saving options](javascript:call_link\('abenbdl_saving.htm'\))
    -   [RAP locking](javascript:call_link\('abenrap_locking_glosry.htm'\) "Glossary Entry"): Interfaces inherit the lock master and lock dependent relations. Upon each modify operation on an interface instance, the method [FOR LOCK](javascript:call_link\('abaphandler_meth_lock.htm'\)) is called and the respective entities are locked.
    -   [RAP early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry")
    -   [RAP late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry")

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
[CDS BDL - Entity Behavior Body, Interface BDEF](javascript:call_link\('abenbdl_body_interface.htm'\))