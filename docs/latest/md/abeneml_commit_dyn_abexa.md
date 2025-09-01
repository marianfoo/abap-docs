  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) →  [Examples for ABAP EML COMMIT ENTITIES](javascript:call_link\('abencommit_entities_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20COMMIT%20ENTITIES%2C%20Dynamic%20Form%2C%20ABENEML_COMMIT_DYN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

ABAP EML - COMMIT ENTITIES, Dynamic Form

This example demonstrates the dynamic form of the COMMIT ENTITIES statement.

Data model

The CDS data model consists of two simple root entities:

-   DEMO\_MANAGED\_ROOT\_2
-   DEMO\_MANAGED\_ASSOC\_CUSTOM

They are not related to each other and are only used to have responses for more than one root entity in the example. Associations and child entities are of no relevance in this example.

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of entity DEMO\_MANAGED\_ROOT\_2 contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_root; }

Likewise, the entity DEMO\_MANAGED\_ASSOC\_CUSTOM contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_assoc; }

Behavior implementation

For both of the above RAP behavior definitions, there are [ABAP behavior pools (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") available. The actual implementation takes place in the CCIMP include of ABP BP\_DEMO\_MANAGED\_ROOT\_2 and CCIMP include of ABP BP\_DEMO\_MANAGED\_ASSOC\_CUSTOM respectively.

The method validate\_field has the following logic:

-   First, all instances of the entities with the provided keys are read into an internal table using the keyword READ ENTITIES.
-   It is then checked whether the number of a certain data field is higher than the value that is allowed. In case of entity DEMO\_MANAGED\_ROOT\_2, the data field data\_field4\_root should not be higher than 50. In case of entity DEMO\_MANAGED\_ASSOC\_CUSTOM, the data field data\_field4\_assoc should not be higher than 10000. If the values are higher, the FAILED and REPORTED structures are filled with information for the respective failed entry.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_commit\_2 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      root\_name1 TYPE abp\_root\_entity\_name
                      VALUE 'DEMO\_MANAGED\_ASSOC\_CUSTOM',
      root\_name2 TYPE abp\_root\_entity\_name
                      VALUE 'DEMO\_MANAGED\_ROOT\_2'.
    METHODS initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_commit\_2 IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
                    \`COMMIT Variant: COMMIT ENTITIES RESPONSE OF\`
                   ).
    "Fill table dyn\_tab with those root entity names from which
    "responses should be retrieved.
    FINAL(dyn\_tab) = VALUE abp\_entity\_name\_tab( ( root\_name1 )
                                                ( root\_name2 ) ).
    "First round of modify operations with valid entries.
    "Entries are created for two root entities.
    MODIFY ENTITIES OF demo\_managed\_root\_2
      ENTITY demo\_managed\_root\_2
        CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
            data\_field3\_root data\_field4\_root ) WITH VALUE #(
          ( %cid = 'cid1' key\_field = 1
            data\_field1\_root = 'aaa' data\_field2\_root = 'bbb'
            data\_field3\_root = 10 data\_field4\_root = 11 )
          ( %cid = 'cid2' key\_field = 2
            data\_field1\_root = 'ccc' data\_field2\_root = 'ddd'
            data\_field3\_root = 12 data\_field4\_root = 13 )
              ).
    MODIFY ENTITIES OF demo\_managed\_assoc\_custom
      ENTITY demo\_managed\_assoc\_custom
        CREATE FIELDS ( key\_field data\_field1\_assoc
            data\_field2\_assoc data\_field3\_assoc data\_field4\_assoc )
            WITH VALUE #(
          ( %cid = 'cid3' key\_field = 3
            data\_field1\_assoc = 'eee' data\_field2\_assoc = 'fff'
            data\_field3\_assoc = 14 data\_field4\_assoc = 15 )
          ( %cid = 'cid4' key\_field = 4
            data\_field1\_assoc = 'ggg' data\_field2\_assoc = 'hhh'
            data\_field3\_assoc = 16 data\_field4\_assoc = 17 )
              ).
    COMMIT ENTITIES
     RESPONSES OF dyn\_tab
      FAILED   FINAL(failed1)
      REPORTED FINAL(reported1).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @FINAL(lt\_com\_responses\_of).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @FINAL(lt\_com\_responses\_of2).
    out->write\_doc(
    \`1st modify operation for entity 1: Result with valid entries:\`
               )->write( lt\_com\_responses\_of
               )->write\_doc(
    \`1st modify operation for entity 2: Result with valid entries:\`
               )->write( lt\_com\_responses\_of2
               ).
    out->write\_doc( \`Commit responses:\` ).
    IF failed1 IS NOT INITIAL.
      out->write\_doc( \`FAILED response:\`
        )->write( failed1 ).
    ELSE.
      out->write\_doc( \`No FAILED response.\` ).
    ENDIF.
    IF reported1 IS NOT INITIAL.
      out->write\_doc( \`REPORTED response:\`
        )->write( reported1 ).
    ELSE.
      out->write\_doc( \`No REPORTED response.\` ).
    ENDIF.
    initialize\_dbtabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    "Second round of modify operations with invalid entries.
    MODIFY ENTITIES OF demo\_managed\_root\_2
          ENTITY demo\_managed\_root\_2
            CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
            data\_field3\_root data\_field4\_root ) WITH VALUE #(
            ( %cid = 'cid5' key\_field = 5
              data\_field1\_root = 'iii' data\_field2\_root = 'jjj'
              data\_field3\_root = 18 data\_field4\_root = 19 )
            ( %cid = 'cid6' key\_field = 6
              data\_field1\_root = 'iii' data\_field2\_root = 'jjj'
              data\_field3\_root = 20 data\_field4\_root = 51 )
            ( %cid = 'cid7' key\_field = 7
              data\_field1\_root = 'kkk' data\_field2\_root = 'lll'
              data\_field3\_root = 21 data\_field4\_root = 52 )
                  ).
    MODIFY ENTITIES OF demo\_managed\_assoc\_custom
          ENTITY demo\_managed\_assoc\_custom
            CREATE FIELDS ( key\_field data\_field1\_assoc
            data\_field2\_assoc data\_field3\_assoc data\_field4\_assoc )
            WITH VALUE #(
            (  %cid = 'cid8' key\_field = 8
               data\_field1\_assoc = 'mmm' data\_field2\_assoc = 'nnn'
               data\_field3\_assoc = 22 data\_field4\_assoc = 23 )
            (  %cid = 'cid9' key\_field = 9
               data\_field1\_assoc = 'mmm' data\_field2\_assoc = 'nnn'
               data\_field3\_assoc = 24 data\_field4\_assoc = 10001 )
            (  %cid = 'cid10' key\_field = 10
               data\_field1\_assoc = 'ooo' data\_field2\_assoc = 'ppp'
               data\_field3\_assoc = 25 data\_field4\_assoc = 10002 )
                  ).
    COMMIT ENTITIES
     RESPONSES OF dyn\_tab
      FAILED   FINAL(failed2)
      REPORTED FINAL(reported2).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @FINAL(lt\_com\_responses\_inval).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @FINAL(lt\_com\_responses\_inval2).
    out->write\_doc(
    \`2nd modify operation for entity 1 - \` &&
    \`no saved entries due to invalid entries:\`
               )->write( lt\_com\_responses\_inval
               )->write\_doc(
    \`2nd modify operation for entity 2 - \` &&
    \`no saved entries due to invalid entries:\`
               )->write( lt\_com\_responses\_inval2
               ).
    out->write\_doc( \`Commit responses:\` ).
    IF failed2 IS NOT INITIAL.
      out->write\_doc( \`FAILED response:\`
        )->write( failed2 ).
    ELSE.
      out->write\_doc( \`No FAILED response.\` ).
    ENDIF.
    IF reported2 IS NOT INITIAL.
      out->write\_doc( \`REPORTED response:\`
        )->write( reported2 ).
    ELSE.
      out->write\_doc( \`No REPORTED response.\` ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_assoc\_2.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two MODIFY operations for two different root entities are carried out within one [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") to create several instances using the keyword CREATE.
-   For these newly created instances, the validations are successful and they are saved to the database using COMMIT ENTITIES. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database tables are emptied using the method initialize\_dbtabs( ).
-   COMMIT ENTITIES RESPONSE OF ...

Two rounds of MODIFY operations are carried out on two different entities, one round with valid entries, the other containing invalid entries. Validations always accept or reject data changes per RAP transaction. Therefore, if the validation fails only for one instance, the complete content of the transactional buffer is rejected. In case of a failed validation, the FAILED and REPORTED structures are filled with information on the failed instances.

-   The internal table dyn\_tab is set up to hold those root entities for which responses should be retrieved.
-   First round: MODIFY operations are carried out on two root entities using the keyword CREATE to create new instances. The COMMIT ENTITIES RESPONSES OF ... statement includes the FAILED and REPORTED responses for both of the root entities since dyn\_tab was specified accordingly. Upon committing, the validation method in the ABP is called. Since all instances are valid, all of them are saved to the database table. There are no FAILED and REPORTED responses. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database is emptied.
-   Second round: Same as before, MODIFY operations are carried out on the two root entities using the keyword CREATE to create new instances, yet with entries for which the validation will fail (the number of the fourth data field is higher than the allowed value in the validation method).
    
    For each entity, there is one valid entry and two invalid entries. Also here, the COMMIT ENTITIES RESPONSES OF ... statement includes the FAILED and REPORTED responses for both of the root entities as the internal table dyn\_tab was specified accordingly. Upon committing, the validation method in the respective ABP is called. The methods ensure that the response structures are filled with information on those instances for which the validation failed. Due to the fact that invalid entries exist, these instances are not saved to database as well as those instances with valid entries. All instances of the whole RAP transaction are not saved. All data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations. Consequently, there are no data sets to be displayed because of the failed saving. Two internal tables are created to display parts of the accumulated FAILED responses for all root entities specified in dyn\_tab and parts of the accumulated REPORTED responses.
    
    Note: No further data changes are possible as long as the invalid instances are not corrected. An invalid entity instance must either be corrected using an UPDATE operation, or it must be deleted using the ROLLBACK ENTITIES statement. Otherwise, no further data changes are possible.