  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous Components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %delete, ABAPDERIVED_TYPES_DELETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

%delete

Use

%delete is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is used as an indicator for getting or providing standard operation control information. For example, in the context of [DELETE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) operations, the %delete indicator in [failed](javascript:call_link\('abaptype_response_for.htm'\)) responses can show whether the deletion of a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") failed.

Type

The component has the following type: ABP\_BEHV\_FLAG

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   FAILED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   \[INSTANCE*|*GLOBAL\] FEATURES REQUEST
-   \[INSTANCE*|*GLOBAL\] FEATURES RESULT
-   \[INSTANCE*|*GLOBAL\] AUTHORIZATION REQUEST
-   \[INSTANCE*|*GLOBAL\] AUTHORIZATION RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_PERM demonstrates the component %delete. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)), is specified for a [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statement.

DATA: request TYPE STRUCTURE FOR
        PERMISSIONS REQUEST demo\_managed\_root\_perm.
request = VALUE #(
    %create          = if\_abap\_behv=>mk-on
    %update          = if\_abap\_behv=>mk-on
    %delete          = if\_abap\_behv=>mk-on
    %assoc-\_child    = if\_abap\_behv=>mk-on
    %action-action   = if\_abap\_behv=>mk-on
    %field-key\_field = if\_abap\_behv=>mk-on
    %field-field1    = if\_abap\_behv=>mk-on
    %field-field2    = if\_abap\_behv=>mk-on
    %field-field3    = if\_abap\_behv=>mk-on
    %field-field4    = if\_abap\_behv=>mk-on ).

Executable Example

The example [BDEF derived type components in the context of requesting permissions](javascript:call_link\('abenderived_types_misc_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %delete with a managed RAP BO.