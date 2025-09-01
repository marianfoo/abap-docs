  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Miscellaneous components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_misc.htm) → 

%update

Use

%update is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used as an indicator for getting or providing standard operation control information. For example, in the context of [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) operations, the %update indicator in [failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) responses can show whether the creation of a [RAP BO instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") failed.

Type

The component has the following type: ABP\_BEHV\_FLAG

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   FAILED \[EARLY/LATE\]
-   REPORTED \[EARLY/LATE\]
-   \[INSTANCE/GLOBAL\] FEATURES REQUEST
-   \[INSTANCE/GLOBAL\] FEATURES RESULT
-   \[INSTANCE/GLOBAL\] AUTHORIZATION REQUEST
-   \[INSTANCE/GLOBAL\] AUTHORIZATION RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_PERM demonstrates the component %update. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm), is specified for a [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statement.

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

The example [BDEF derived type components in the context of requesting permissions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %update with a managed RAP BO.