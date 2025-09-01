  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous Components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %field, ABAPDERIVED_TYPES_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

%field

Use

%field is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is used to return information on [field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)) by marking the components. The components of %field are those elements for which field characteristics are specified in the BDEF.

Type

Structure whose components are named according to data fields. They are typed with ABP\_BEHV\_FEATURE.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   \[INSTANCE\] FEATURES REQUEST
-   \[INSTANCE\] FEATURES RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_PERM demonstrates the component %field. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)), is specified for a [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statement.

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

The example [BDEF derived type components in the context of requesting permissions](javascript:call_link\('abenderived_types_misc_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %field with a managed RAP BO.