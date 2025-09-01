  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

%target

Use

%target is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is used to address the target (i. e. a child entity, for example) of [compositions](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). The components of %target are comprised of the target's primary key and data fields.

Type

Standard table whose components are comprised of %cid, %key, %data and %control.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   CREATE ([create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry"))

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_DATA demonstrates the component %target.

MODIFY ENTITY demo\_managed\_root\_4
      CREATE FROM VALUE #(
        ( %cid = 'cid1'
          %data-key\_field = 1
          %data-field1 = 'aaa'
          %data-field2 = 'bbb'
          %data-field3 = 10
          %data-field4 = 11
          %control-key\_field = if\_abap\_behv=>mk-on
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          %data = VALUE #( key\_field = 2
                           field1 = 'ccc'
                           field2 = 'ddd'
                           field3 = 20
                           field4 = 21 )
          %control = VALUE #(  key\_field = if\_abap\_behv=>mk-on
                               field1 = if\_abap\_behv=>mk-on
                               field2 = if\_abap\_behv=>mk-on
                               field3 = if\_abap\_behv=>mk-on
                               field4 = if\_abap\_behv=>mk-on ) ) )
      CREATE BY \\\_child
      SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #(
            ( %cid = 'cid\_child1'
              %data = VALUE #( key\_field\_child = 1
                               field1 = 'eee'
                               field2 = 'fff'
                               field3 = 10
                               field4 = 11 ) ) ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #(
            ( %cid = 'cid\_child2'
              %data = VALUE #( key\_field\_child = 2
                               field1 = 'ggg'
                               field2 = 'hhh'
                               field3 = 20
                               field4 = 21 ) ) ) ) )
    UPDATE FROM VALUE #(
        ( %data-key\_field = 1
          %data-field1 = 'UPDATED\_1'
          field2 = 'UPDATED\_2'
          %control = VALUE #( field1 = if\_abap\_behv=>mk-on
                              field2 = if\_abap\_behv=>mk-off ) )
        ( key\_field = 2
          field1 = 'UPDATED\_3'
          %data-field2 = 'UPDATED\_4'
          %control = VALUE #( field1 = if\_abap\_behv=>mk-off
                              field2 = if\_abap\_behv=>mk-on ) ) )
       MAPPED DATA(mapped)
       FAILED DATA(failed)
       REPORTED DATA(reported).

Executable Example

The example [Using %data / %target](javascript:call_link\('abenderived_types_data_abexa.htm'\)) demonstrates the use of %target with a managed RAP BO.