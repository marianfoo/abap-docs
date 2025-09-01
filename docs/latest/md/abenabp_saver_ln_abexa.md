  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_methods.htm) →  [Examples for RAP Saver Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_saver_methods_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%20for%20RAP%20Saver%20Methods%20%28Late%20Numbering%20Scenario%29%2C%20ABENABP_SAVER_LN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

Example for RAP Saver Methods (Late Numbering Scenario)

This example demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO with late numbering to also cover the adjust\_numbers saver method.

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM2 and its child entity DEMO\_UMANAGED\_CHILD\_LATE\_NUM2.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_umanaged\_root\_late\_num2
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of demo\_umanaged\_child\_late\_num2 as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_umanaged\_child\_late\_num2
  as select from demo\_tab\_child\_3
  association to parent demo\_umanaged\_root\_late\_num2 as \_parent  
  on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key key\_field,
    key key\_field\_child,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM2 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class
bp\_demo\_umanaged\_root\_late\_nu2 unique;
strict(2);
define behavior for demo\_umanaged\_root\_late\_num2
lock master
authorization master ( global )
late numbering
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU2. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. Note: The ABP purposely includes only few handler method implementations since the focus is on the saver methods.

The class lsc\_demo\_umanaged\_root\_late\_nu is the RAP saver class that includes the following RAP saver methods:

Method

Details

finalize

Triggers any final calculations involving all BOs in the current LUW before the data gets saved to the database. In this example, the method is implemented in a way to do a calculation on a data field. field3 should be divided by 2. Since the field is of type i, a division by 2 with uneven numbers results in an error. In case of an error, the FAILED and reported parameters get filled. If the division is successful, field3 receives the result and a success message is included in the reported parameter for the particular instance. A log table (DEMO\_TAB\_LOG\_LN) is then filled with content of the failed (if available) and reported structures. The purpose of this log table is to show the returned messages of the finalize, check\_before\_save and save methods in the output.

check\_before\_save

Contains a consistency check. An instance should only get saved if the value of data field field4 does not exceed 100. Furthermore, the failed and reported parameters as well as the log table DEMO\_TAB\_LOG\_LN are filled.

adjust\_numbers

Assigns the final primary keys of the [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). In the given example, a random integer gets assigned. Once the method is called, a point of no return has been reached. The method must ensure that there are no issues with the key assignment. Therefore, a check is implemented to guarantee a random number does not yet exist for instances, neither in the transactional buffer nor in the database table. Furthermore, the failed and reported parameters as well as the log table DEMO\_TAB\_LOG\_LN are filled.

save

Saves the data from the transactional buffer to the database. The method is only called if the finalize, check\_before\_save and adjust\_numbers methods have been processed successfully. Once the data has been saved, a success message is included in the reported parameter and the log table DEMO\_TAB\_LOG\_LN.

cleanup

Clears the transactional buffer. The method is called if the save method has been processed.

cleanup\_finalize

Clears the transactional buffer. The method is called if issues arise in the finalize and check\_before\_save methods.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_unm\_saver\_mthds\_ln DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed   TYPE RESPONSE FOR FAILED demo\_umanaged\_root\_late\_num2,
      reported TYPE RESPONSE FOR REPORTED demo\_umanaged\_root\_late\_num2,
      mapped   TYPE RESPONSE FOR MAPPED demo\_umanaged\_root\_late\_num2.
    METHODS:
      initialize\_dbtabs,
      get\_saver\_response,
      get\_saver\_meth,
      get\_db\_entries.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_unm\_saver\_mthds\_ln IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
    \`RAP saver methods with an unmanaged RAP BO (late numbering)\`
      )->line(
      )->next\_section( \`1) 1st EML MODIFY request\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
\`The first EML MODIFY request includes the creation of several \` &&
\`instances. However, the instances are not saved to the \` &&
\`database table because the saver method <code>finalize</code> \` &&
\`fails for instances. In the given example, the method fails for \` &&
\`instances that include uneven numbers in field <code>field3</code>\` &&
\`. The saver methods that are called for this MODIFY request after \` &&
\`triggering the save sequence with <code>COMMIT ENTITIES</code> are\` &&
\` logged in the first table. The second table is set up to hold \` &&
\`entries from the <code>FAILED</code> and <code>REPORTED</code> \` &&
\`response structures for the root entity. A third table including \` &&
\`saved instances is not displayed since the <code>finalize</code> \` &&
\`method fails. The buffer table is cleared when calling the \` &&
\`<code>cleanup\_finalize</code> method.\` ) ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FROM VALUE #(
        ( %cid = 'cid1'
          field1 = 'create\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 2
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 4
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          field1 = 'create\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid3'
          field1 = 'create\_5'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_6'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 7
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 8
          %control-field4 = if\_abap\_behv=>mk-on )
          )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
       )->next\_section( \`2) 2nd EML MODIFY request\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
\`The second EML MODIFY request includes the creation of several \` &&
\`instances, too. However, the instances are not saved to the \` &&
\`database table because the saver method \` &&
\`<code>check\_before\_save</code> fails for instances. \` &&
\`In the given example, the method fails for \` &&
\`instances that include values in field <code>field4</code> that \` &&
\`are higher than 100. The saver methods that are called for \` &&
\`this MODIFY request after triggering the save sequence with \` &&
\`<code>COMMIT ENTITIES</code> are logged in the first table. \` &&
\`The second table is set up to hold entries from the \` &&
\`<code>FAILED</code> and <code>REPORTED</code> response structures \` &&
\`for the root entity. A third table including \` &&
\`saved instances is not displayed since the \` &&
\`<code>check\_before\_save</code> method fails for instances. The \` &&
\`buffer table is cleared when calling the \` &&
\`<code>cleanup\_finalize</code> method.\` ) ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FROM VALUE #(
        ( %cid = 'cid4'
          field1 = 'create\_7'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_8'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 10
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 102
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid5'
          field1 = 'create\_9'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_10'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 12
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 14
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid6'
          field1 = 'create\_11'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_12'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 16
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 104
          %control-field4 = if\_abap\_behv=>mk-on )
          )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->next\_section( \`3) 3rd EML MODIFY request\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
\`The third EML MODIFY request includes the creation of several \` &&
\`instances, too. All instances are saved to the \` &&
\`database table because the saver methods <code>finalize</code> \` &&
\`and <code>check\_before\_save</code> do not return any issues. \` &&
\`Since the given example is a late numbering scenario, the \` &&
\`<code>adjust\_numbers</code> method is called and assigns the key \` &&
\`values. Afterwards, the <code>save</code> method takes care of \` &&
\`saving all instances to the database table. The saver methods \` &&
\` that are called for this MODIFY request after triggering the \` &&
\`save sequence with <code>COMMIT ENTITIES</code> are logged \` &&
\`in the first table. The second table is set up to hold entries \` &&
\`from the <code>FAILED</code> and <code>REPORTED</code> \` &&
\`response structures for the root entity. In this case, the \` &&
\` 0 values for <code>key\_field</code> for <code>finalize</code> \` &&
\`and <code>check\_before\_save</code> as well as the <code>pid</code>\` &&
\` entry for <code>save</code> can be ignored. \` &&
\`The third table includes the instances that are saved to the \` &&
\`database table. The buffer table is cleared when calling the \` &&
\`<code>cleanup</code> method.\` ) ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FROM VALUE #(
        ( %cid = 'cid7'
          field1 = 'create\_13'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_14'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 18
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 20
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid8'
          field1 = 'create\_15'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_16'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 22
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 24
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid9'
          field1 = 'create\_17'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_18'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 26
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 28
          %control-field4 = if\_abap\_behv=>mk-on ) )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
  ENDMETHOD.
  METHOD get\_db\_entries.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 ORDER BY key\_field
    INTO TABLE @DATA(db\_tab).
    IF db\_tab IS INITIAL.
      out->write\_html(
      '<b>c) Database table entries after the operation:</b>'
    )->write( 'The database table is initial. No entries available.' ).
    ELSE.
      out->write\_html(
       '<b>c) Database table entries after the operation:</b>'
        )->write( db\_tab ).
    ENDIF.
    CLEAR db\_tab.
  ENDMETHOD.
  METHOD get\_saver\_meth.
    out->write\_html( '<b>a) Saver methods called</b>'
     )->write( data = bp\_demo\_umanaged\_root\_late\_nu2=>saver\_meth\_called
               name = \`Saver methods\` ).
    CLEAR bp\_demo\_umanaged\_root\_late\_nu2=>saver\_meth\_called.
  ENDMETHOD.
  METHOD get\_saver\_response.
    out->write\_html(
            '<b>b) Saver log</b>'
    )->write( bp\_demo\_umanaged\_root\_late\_nu2=>saver\_log\_late\_num ).
    CLEAR bp\_demo\_umanaged\_root\_late\_nu2=>saver\_log\_late\_num.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
    DELETE FROM demo\_tab\_log\_ln.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example demonstrates three different ABAP EML MODIFY requests. Each of the MODIFY requests includes CREATE operations to create three instances. COMMIT ENTITIES statements trigger the save sequence.

1.  First MODIFY request: The finalize method is not fully processed successfully which prevents the data from being saved.
2.  Second MODIFY request: The finalize method is processed successfully while the check\_before\_save method is not. The data is not saved.
3.  Third MODIFY request: Both finalize and check\_before\_save methods are fully processed successfully. As a consequence, the adjust\_numbers and save methods are called and the data is saved to the database table.

The output shows three sections for each MODIFY request:

-   A log table including the saver methods that have been called.
-   A log table including information that has been returned for FAILED and REPORTED. In all cases, the preliminary ID %pid for the instances is included. In case of the final request, the newly assigned keys are included, too.
-   A table including the database table entries after the CREATE operations. However, the first two MODIFY do not show the table since the CREATE operations cannot be processed successfully on purpose.