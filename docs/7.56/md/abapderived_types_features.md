  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

%features

Use

%features is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is used to return [feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) information by marking the components. The components of %features are those elements for which feature control is specified in the BDEF. For accessing the components with %features, the syntax can, for example, be as follows: %features-%update, %features-%delete, %features-%action-action\_name, or %features-%field-field\_name.

Type

The components of the %features structure are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   \[INSTANCE/GLOBAL\] FEATURES RESULT

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_PERM demonstrates the component %features in the context of a get\_instance\_features method that returns information on whether certain fields are read-only or can be modified based on certain conditions. Furthermore, information is returned if the creation of instances for an associated entity is enabled or disabled. See the executable program for this example further down.

METHOD get\_instance\_features.
  READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE
      ENTITY demo\_managed\_root\_perm
        FIELDS ( field3 field4 )
        WITH CORRESPONDING #( keys )
      RESULT DATA(lt\_numbers)
      FAILED DATA(fail).
  failed =  CORRESPONDING #( DEEP fail ).
  result = VALUE #( FOR ls\_numbers IN lt\_numbers
           ( %tky = ls\_numbers-%tky
             %features = VALUE #(
             %field-field3 = COND #(
                               WHEN ls\_numbers-field4 > 5
                               THEN if\_abap\_behv=>fc-f-read\_only
                               ELSE if\_abap\_behv=>fc-f-unrestricted )
             %field-field4 = COND #(
                               WHEN ls\_numbers-field3 > 10
                               THEN if\_abap\_behv=>fc-f-read\_only
                               ELSE if\_abap\_behv=>fc-f-unrestricted )
             %assoc-\_child = COND #(
                               WHEN ls\_numbers-field3 > 10
                               THEN if\_abap\_behv=>fc-o-disabled
                               ELSE if\_abap\_behv=>fc-o-enabled )
                ) ) ).
ENDMETHOD.

Executable Example

The example [BDEF derived type components in the context of requesting permissions](javascript:call_link\('abenderived_types_misc_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %features with a managed RAP BO.