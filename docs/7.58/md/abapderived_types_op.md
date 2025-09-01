  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25op%2C%20ABAPDERIVED_TYPES_OP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%op

Use

%op is a [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used to summarize derived type components for [standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm) ([%create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_create.htm), for example), [nonstandard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard.htm) and associations defined in the BDEF in the context of [RAP messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_message_glosry.htm "Glossary Entry") and [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_control_glosry.htm "Glossary Entry").

For example, if %op-%create is marked in a [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry"), it indicates that the message relates to a [RAP create operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_create_operation_glosry.htm "Glossary Entry").

Type

The components are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   FAILED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   \[INSTANCE\] AUTHORIZATION RESULT

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_PERM demonstrates the component %op in the context of a get\_instance\_authorizations method that returns information on whether delete operations and executions of an action are allowed on RAP BO instances or not. See the executable program for this example further down.

METHOD get\_instance\_authorizations.
  READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE
     ENTITY demo\_managed\_root\_perm
       FIELDS ( field2 )
       WITH CORRESPONDING #( keys )
     RESULT DATA(lt\_status)
     FAILED DATA(fail).
  failed =  CORRESPONDING #( DEEP fail ).
  result = VALUE #( FOR ls\_status IN lt\_status
           ( %tky    = ls\_status-%tky
             %op = VALUE #(
               %delete = COND #( WHEN ls\_status-field2 = 'B'
                                 THEN if\_abap\_behv=>auth-unauthorized
                                 ELSE if\_abap\_behv=>auth-allowed )
               %action-action = COND #(
                                 WHEN ls\_status-field2 = 'B'
                                 THEN if\_abap\_behv=>auth-unauthorized
                                 ELSE if\_abap\_behv=>auth-allowed )
                         ) ) ).
ENDMETHOD.

Executable Example

The example [BDEF derived type components in the context of requesting permissions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %op with a managed RAP BO.