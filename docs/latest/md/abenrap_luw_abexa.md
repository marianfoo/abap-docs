  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Related ABAP Language Elements and Topics](javascript:call_link\('abenabap_rap_other.htm'\)) →  [RAP Examples](javascript:call_link\('abapeml_examples_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transactional%20Phases%20in%20a%20RAP%20Transaction%2C%20ABENRAP_LUW_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Transactional Phases in a RAP Transaction

This example demonstrates the transactional phases of a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") using an [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with [late numbering](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_RAP\_LUW\_LN\_U.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_LUW\_LN\_U
  as select from demo\_tab\_root\_5
{
  key key\_field,
      field1,
      field2,
      field3,
      field4
}

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_LUW\_LN\_U is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_rap\_luw\_ln\_u unique;
strict ( 2 );
define behavior for DEMO\_RAP\_LUW\_LN\_U  alias root
late numbering
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly:update ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_LUW\_LN\_U. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_luw\_ln\_u DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      select\_from\_dbtab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_luw\_ln\_u IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demonstrating the Phases of the RAP LUW\`
    )->line(
    )->write( \`---------- Successful save  ----------\` ).
    MODIFY ENTITY demo\_rap\_luw\_ln\_u
        CREATE FIELDS ( field1 field2 field3 field4 )
        WITH VALUE #(
          ( %cid = 'cid1' field1 = 'aaa'
            field2 = 'bbb' field3 = 1 field4 = 2  )
          ( %cid = 'cid2' field1 = 'ccc'
            field2 = 'ddd' field3 = 3 field4 = 4  ) )
         FAILED DATA(f\_mod)
         REPORTED DATA(r\_mod).
    COMMIT ENTITIES RESPONSE OF demo\_rap\_luw\_ln\_u FAILED DATA(f).
    IF sy-subrc <> 0.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
      out->write( f ).
    ELSE.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
    ENDIF.
    out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
    CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Failure in FINALIZE method -----\` ).
    MODIFY ENTITY demo\_rap\_luw\_ln\_u
       CREATE FIELDS ( field1 field2 field3 field4 )
       WITH VALUE #(
         ( %cid = 'cid3' field1 = 'eee123'
           field2 = 'fff' field3 = 5 field4 = 6 ) )
       FAILED f\_mod
       REPORTED r\_mod.
    COMMIT ENTITIES RESPONSE OF demo\_rap\_luw\_ln\_u FAILED f.
    IF sy-subrc <> 0.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
      out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
      CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
      out->write( f ).
      MODIFY ENTITY demo\_rap\_luw\_ln\_u
           CREATE FIELDS ( field1 field2 field3 field4 )
           WITH VALUE #(
             ( %cid = 'cid4' field1 = 'eee'
               field2 = 'fff' field3 = 7 field4 = 8 ) )
           FAILED f\_mod
           REPORTED r\_mod.
      COMMIT ENTITIES RESPONSE OF demo\_rap\_luw\_ln\_u FAILED f.
      IF sy-subrc = 0.
        out->write( \`sy-subrc was set to \` && sy-subrc &&
        \` after COMMIT ENTITIES statement.\` ).
        out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
        CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
      ENDIF.
    ELSE.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
    ENDIF.
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Failure in CHECK\_BEFORE\_SAVE method -----\` ).
    MODIFY ENTITY demo\_rap\_luw\_ln\_u
       CREATE FIELDS ( field1 field2 field3 field4 )
       WITH VALUE #(
         ( %cid = 'cid1' field1 = 'ggg'
           field2 = 'XXX' field3 = 9 field4 = 9 ) )
       FAILED f\_mod
       REPORTED r\_mod.
    COMMIT ENTITIES RESPONSE OF demo\_rap\_luw\_ln\_u FAILED f.
    IF sy-subrc <> 0.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
      out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
      CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
      out->write( f ).
      MODIFY ENTITY demo\_rap\_luw\_ln\_u
         CREATE FIELDS ( field1 field2 field3 field4 )
         WITH VALUE #(
           ( %cid = 'cid1' field1 = 'ggg'
             field2 = 'hhh' field3 = 10 field4 = 11 ) )
         FAILED f\_mod
         REPORTED r\_mod.
      COMMIT ENTITIES.
      IF sy-subrc = 0.
        out->write( \`sy-subrc was set to \` && sy-subrc &&
        \` after COMMIT ENTITIES statement.\` ).
        out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
        CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
      ENDIF.
    ELSE.
      out->write( \`sy-subrc was set to \` && sy-subrc &&
      \` after COMMIT ENTITIES statement.\` ).
    ENDIF.
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write( \`----- Rollback -----\` ).
    MODIFY ENTITY demo\_rap\_luw\_ln\_u
       CREATE FIELDS ( field1 field2 field3 field4 )
       WITH VALUE #(
         ( %cid = 'cid1' field1 = 'eee'
           field2 = 'fff' field3 = 10 field4 = 12 )
         ( %cid = 'cid2' field1 = 'ggg123'
           field2 = 'hhh' field3 = 14 field4 = 16 ) )
       FAILED f\_mod
       REPORTED r\_mod.
    ROLLBACK ENTITIES.
    out->write( bp\_demo\_rap\_luw\_ln\_u=>meth\_called ).
    CLEAR bp\_demo\_rap\_luw\_ln\_u=>meth\_called.
    "Displaying database table entries after modify request
    select\_from\_dbtab( ).
    out->line( ).
  ENDMETHOD.
  METHOD select\_from\_dbtab.
    SELECT \* FROM demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(db\_entries).
    out->write( db\_entries ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class.

The class demonstrates the following:

-   A successful save, i.e. the interaction phase and the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") have been processed successfully. Two [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") are created. A COMMIT ENTITIES statement triggers the save sequence. The value of sy-subrc is displayed after the commit. During the execution of the method implementation code in the ABP, an internal table is populated that stores the following information: position of the method call sequence, name of the method, if there is an error, a flag for the interaction, early, or late save phase. This table is displayed as well as the entries of the database table as a result of the RAP create operation.
-   Failure in the finalize method: An instance is created. The same steps are taken as described above. In this case, the failure in the finalize method triggers the call of the cleanup\_finalize method. sy-subrc is set to 4 after the commit. There is then another RAP create operation on the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). This time, the RAP transaction is completed with a successful save.
-   Failure in the check\_before\_save method: The steps are the same as described above. A failure also triggers the cleanup\_finalize method. In all other examples, this method is not called. It is only called if an error occurs in the finalize or check\_before\_save method.
-   Rollback. This example has no COMMIT ENTITIES statement. The purpose is to demonstrate that the ROLLBACK ENTITIES statement only triggers the call of the cleanup method in the [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry").