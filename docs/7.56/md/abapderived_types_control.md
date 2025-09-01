  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Miscellaneous components](javascript:call_link\('abapderived_types_misc.htm'\)) → 

%control

Use

%control is a [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") in [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

It is structure that contains all key and data fields of a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as components and is used to get information on what fields are provided (e. g. in the context of [CREATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) or [UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) operations) or requested (e. g. in the context of [READ](javascript:call_link\('abapread_entity_entities.htm'\)) operations). For this, the value of each field in the control structure is basically a flag indicating, for example, whether the field has been provided or requested during the current transaction or not. Hence, the data fields do not retain their original line type. In many cases, the control structure is filled implicitly and automatically, for example, in the context of RAP MODIFY operations using the ABAP word [SET FIELDS WITH](abapmodify_entity_entities_fields.htm#!ABAP_VARIANT_4@4@). Yet, depending on the context, the explicit specification of %control is mandatory. For example, in the context of a RAP MODIFY operation using the ABAP word FROM (e. g. ... CREATE FROM ... or ... UPDATE FROM ...), %control must be specified.

For specifying the values of the fields, the constants provided in the interface IF\_ABAP\_BEHV can be used: if\_abap\_behv=>mk-.... For example, if fields are set with the value if\_abap\_behv=>mk-on (which stands for 01; off is 00) in a CREATE operation, they are respected by the operation.

In READ operations, the keys must always be used and returned. Hence, unmarking the keys in %control in the context of managed scenarios are ignored.

Type

The components of the %control structure have the following type: ABP\_BEHV\_FLAG

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   CREATE
-   UPDATE
-   READ IMPORT
-   CHANGE

The component also occurs within the [%target](javascript:call_link\('abapderived_types_target.htm'\)) component in the context of create- or read-by-association operations.

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_CONTROL demonstrates the component %control.

MODIFY ENTITY demo\_managed\_root\_4
      CREATE FROM VALUE #(
        ( %cid = 'cid3'
          key\_field = 3  %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'iii' %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'jjj' %control-field2 = if\_abap\_behv=>mk-off
          field3 = 30    %control-field3 = if\_abap\_behv=>mk-on
          field4 = 31    %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid4'
          key\_field = 4  %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'kkk' %control-field1 = if\_abap\_behv=>mk-off
          field2 = 'lll' %control-field2 = if\_abap\_behv=>mk-on
          field3 = 40    %control-field3 = if\_abap\_behv=>mk-on
          field4 = 41    %control-field4 = if\_abap\_behv=>mk-on ) )
      UPDATE FROM VALUE #(
        ( key\_field = 1
          field1 = 'UPDATED\_1'
          field2 = 'UPDATED\_2'
          %control = VALUE #( field1 = if\_abap\_behv=>mk-on
                              field2 = if\_abap\_behv=>mk-off ) )
        ( key\_field = 2
          field1 = 'UPDATED\_3'
          field2 = 'UPDATED\_4'
          %control = VALUE #( field1 = if\_abap\_behv=>mk-off
                              field2 = if\_abap\_behv=>mk-on ) ) )
       MAPPED DATA(mapped)
       FAILED DATA(failed)
       REPORTED DATA(reported).

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_CONTROL demonstrates how %control might be specified and enabled for all fields for all RAP BO instances in the [superstructure](javascript:call_link\('abensuperstructure_glosry.htm'\) "Glossary Entry") of an ABAP EML request.

MODIFY ENTITY demo\_managed\_root\_4
  CREATE FROM VALUE #(
      %control-key\_field = if\_abap\_behv=>mk-on
      %control-field1 = if\_abap\_behv=>mk-on
      %control-field2 = if\_abap\_behv=>mk-on
      %control-field3 = if\_abap\_behv=>mk-on
      %control-field4 = if\_abap\_behv=>mk-on
    ( %cid = 'cid1'
      key\_field = 1
      field1 = 'aaa'
      field2 = 'bbb'
      field3 = 10
      field4 = 11 )
    ( %cid = 'cid2'
      key\_field = 2
      field1 = 'ccc'
      field2 = 'ddd'
      field3 = 20
      field4 = 21 ) )
      MAPPED DATA(mapped)
      FAILED DATA(failed)
      REPORTED DATA(reported).

Executable Example

The example [Using %control](javascript:call_link\('abenderived_types_control_abexa.htm'\)) demonstrates the use of %control with a managed RAP BO.