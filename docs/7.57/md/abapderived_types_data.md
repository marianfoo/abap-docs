  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %data, ABAPDERIVED_TYPES_DATA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

%data

Use

%data is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

%data contains all primary key fields (i. e. it also includes %key) and data fields of a [RAP BO entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").

When specifying a data field, the use of %data-... is optional, i. e., the name of the data field can be used directly without %data-....

Type

The components of %data retain their original line type. In case of the use within %control, the type for the individual components is ABP\_BEHV\_FLAG)

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   CREATE
-   UPDATE
-   READ RESULT
-   CHANGE

The component also occurs within the following components:

-   [%control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_control.htm)
-   [%param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_param.htm)

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_DATA demonstrates the component %data.

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
      FIELDS ( key\_field\_child field1 field2 field3 field4 )
      WITH VALUE #(
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
       MAPPED FINAL(mapped)
       FAILED FINAL(failed)
       REPORTED FINAL(reported).

Executable Example

The example [Using %data / %target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_data_abexa.htm) demonstrates the use of %data with a managed RAP BO.