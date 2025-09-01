  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

%assoc

Use

%assoc is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is a structure containing the associations defined in the BDEF as components and is used, for example, in the context of [feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) to get or provide control information for associated entities or to get information in responses if an association was affected in case of failures.

Type

The components of the %assoc structure are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   FAILED \[EARLY/LATE\]
-   \[INSTANCE/GLOBAL\] AUTHORIZATION REQUEST
-   \[INSTANCE/GLOBAL\] AUTHORIZATION RESULT
-   \[INSTANCE/GLOBAL\] FEATURES REQUEST
-   \[INSTANCE/GLOBAL\] FEATURES RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_PERM demonstrates the component %assoc. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)), is specified for a [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statement.

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

The example [BDEF derived type components in the context of requesting permissions](javascript:call_link\('abenderived_types_misc_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %assoc with a managed RAP BO.