  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\)) →  [RAP - Entity Behavior Definition, Interface BDEF](javascript:call_link\('abenbdl_define_beh_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Body%2C%20Interface%20BDEF%2C%20ABENBDL_BODY_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

RAP - Entity Behavior Body, Interface BDEF

Syntax

... *\[*[use](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*;
    *\[*[Field Characteristics*\]*](javascript:call_link\('abenbdl_field_interface.htm'\));
...

Effect

In the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of an [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"), elements of the projected BDEF can be reused and field characteristics can be specified:

-   [use](javascript:call_link\('abenbdl_use_projection.htm'\)):
    
    [Reuse](javascript:call_link\('abenbdl_use_projection.htm'\)) of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") and [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"). All operations (standard operations, operations for associations, actions, [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), and draft actions) and events that are to be reused from the base BO must be explicitly specified using the keyword use. Reuse works as described in topic [RAP BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)) with one exception: the additions precheck and augment are not available for interface BDEFs.
    
-   [Field Characteristics](javascript:call_link\('abenbdl_field_interface.htm'\)):
    
    An interface BDEF automatically and implicitly inherits all field characteristics of the underlying base BO and it can add further field attributes, as long as they do not contradict the field attributes from the base layer. A list of available field characteristics in interface BDEFs is provided in topic [Field Characteristics, Interface BDEF](javascript:call_link\('abenbdl_field_interface.htm'\)).
    

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
[RAP - Field Characteristics, Interface BDEF](javascript:call_link\('abenbdl_field_interface.htm'\))