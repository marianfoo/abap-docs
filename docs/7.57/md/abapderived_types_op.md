  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous Components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %op, ABAPDERIVED_TYPES_OP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

%op

Use

%op is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is used as indicator for [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)), [nonstandard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) and associations defined in the BDEF.

For accessing the elements with %op, the syntax can, for example, be as follows: %op-%create, %op-%update, %op-%delete, %op-%action-action\_name, or %op-%assoc-assoc\_name.

Type

The components are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   FAILED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   \[INSTANCE\] AUTHORIZATION RESULT

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_PERM demonstrates the component %op in the context of a get\_instance\_authorizations method that returns information on whether delete operations and executions of an action are allowed on RAP BO instances or not. See the executable program for this example further down.

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

The example [BDEF derived type components in the context of requesting permissions](javascript:call_link\('abenderived_types_misc_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %op with a managed RAP BO.