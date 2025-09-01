  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - CDS Interface Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm) →  [CDS BDL - Entity Behavior Definition, Interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_interface.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Body, Interface BDEF, ABENBDL_BODY_INTERFACE, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Body, Interface BDEF

Syntax

... *\[*[use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm)*\]*;
    *\[*[field ( suppress ) fieldName*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm);
...

Effect

In the [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_body_glosry.htm "Glossary Entry") of an [interface BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), elements of the projected BDEF can be reused and field characteristics can be specified:

-   [use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm):
    
    [Reuse](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm) of [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry"). All operations (standard operations, operations for associations, actions, [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry"), and draft actions) that are to be reused from the base BO must be explicitly specified using the keyword use. Reuse works as described in topic [CDS BDL - use](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm) with one exception: the additions precheck and augment are not available for interface BDEFs.
    
-   The following [field characteristic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_field_char_glosry.htm "Glossary Entry") is available: [field (suppress) Field1, Field2, ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm). It removes the fields Field1, Field2, etc. from all [derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") generated for the BDEF.

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