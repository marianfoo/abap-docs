  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25field%2C%20ABAPDERIVED_TYPES_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%field

Use

%field is a [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used to return information on [field characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm) by marking the components. The components of %field are those elements for which field characteristics are specified in the BDEF.

Type

Structure whose components are named according to data fields. They are typed with ABP\_BEHV\_FEATURE.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   \[INSTANCE\] FEATURES REQUEST
-   \[INSTANCE\] FEATURES RESULT

Example

The following source code section taken from CL\_DEMO\_RAP\_DRVD\_TYPES\_PERM demonstrates the component %field. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm), is specified for a [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm) statement.

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

The example [BDEF derived type components in the context of requesting permissions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %field with a managed RAP BO.