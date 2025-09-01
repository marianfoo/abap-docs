---
title: "ABAP EML - COMMIT ENTITIES, Short and Long Form"
description: |
  This example demonstrates two variants of the COMMIT ENTITIES statement: the short version (without responses) and long form (with responses). It covers several MODIFY operations for creating instances for two root entities in a simplified managed scenario. The saving of these instances is triggered
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_sh_lo_abexa.htm"
abapFile: "abencommit_entities_sh_lo_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abencommit", "entities", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) →  [Examples for ABAP EML COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - COMMIT ENTITIES, Short and Long Form, ABENCOMMIT_ENTITIES_SH_LO_ABEXA, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - COMMIT ENTITIES, Short and Long Form

This example demonstrates two variants of the COMMIT ENTITIES statement: the short version (without responses) and long form (with responses). It covers several MODIFY operations for creating instances for two root entities in a simplified managed scenario. The saving of these instances is triggered by COMMIT ENTITIES statements.

For the purpose of showing entries in the FAILED and REPORTED structures in the context of the long version, a validation is implemented in the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") that causes the saving of certain entries to fail and fills the response structures.
Data model

The CDS data model consists of two simple root entities:

-   DEMO\_MANAGED\_ROOT\_2
-   DEMO\_MANAGED\_ASSOC\_CUSTOM

They are not related to each other and are only used to have responses for more than one root entity in the example. Associations and child entities are of no relevance in this example.

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of entity DEMO\_MANAGED\_ROOT\_2 contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_root; }

Likewise, the entity DEMO\_MANAGED\_ASSOC\_CUSTOM contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_assoc; }

Behavior implementation

For both of the above CDS behavior definitions, there are [ABAP behavior pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The actual implementation takes place in the CCIMP include of ABP BP\_DEMO\_MANAGED\_ROOT\_2 and CCIMP include of ABP BP\_DEMO\_MANAGED\_ASSOC\_CUSTOM respectively.

The method validate\_field has the following logic:

-   First, all instances of the entities with the provided keys are read into an internal table using the keyword READ ENTITIES.
-   It is then checked whether the number of a certain data field is higher than the value that is allowed. In case of entity DEMO\_MANAGED\_ROOT\_2, the data field data\_field4\_root should not be higher than 50. In case of entity DEMO\_MANAGED\_ASSOC\_CUSTOM, the data field data\_field4\_assoc should not be higher than 10000. If the values are higher, the FAILED and REPORTED structures are filled with information for the respective failed entry.
-   Consequently, once the validation method is called and the save sequence is triggered upon committing, the saving of all instances to the database table fails including those instances for which the validation did not fail. See more information on validations in the [CDS BDL Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm).

Source Code   

REPORT demo\_rap\_eml\_commit\_1.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
                    \`COMMIT Variants\`
        )->begin\_section(
                    \`COMMIT Variant: COMMIT ENTITIES.\`
                  ).
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
        CREATE FIELDS ( key\_field data\_field1\_assoc data\_field2\_assoc
            data\_field3\_assoc data\_field4\_assoc ) WITH VALUE #(
          ( %cid = 'cid3' key\_field = 3
            data\_field1\_assoc = 'eee' data\_field2\_assoc = 'fff'
            data\_field3\_assoc = 14 data\_field4\_assoc = 15 )
          ( %cid = 'cid4' key\_field = 4
            data\_field1\_assoc = 'ggg' data\_field2\_assoc = 'hhh'
            data\_field3\_assoc = 16 data\_field4\_assoc = 17 )
              ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @FINAL(lt\_entity\_1).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @FINAL(lt\_entity\_2).
    out->write\_doc(
    \`Result of modify operations on two entities:\`
               )->write( lt\_entity\_1
               )->write( lt\_entity\_2
               )->line(
               )->begin\_section(
                  \`COMMIT Variant: COMMIT ENTITIES RESPONSE OF ...\`
               )->write\_text( \`First round of modify operations \` &&
                             \`on two entities with valid entries:\`).
    initialize\_dbtabs( ).
    "COMMIT ENTITIES RESPONSE OF
    "First round of modify operations with valid entries.
    "Entries are created for two root entities.
    MODIFY ENTITIES OF demo\_managed\_root\_2
      ENTITY demo\_managed\_root\_2
        CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
            data\_field3\_root data\_field4\_root ) WITH VALUE #(
          ( %cid = 'cid5' key\_field = 5
            data\_field1\_root = 'iii' data\_field2\_root = 'jjj'
            data\_field3\_root = 18 data\_field4\_root = 19 )
          ( %cid = 'cid6' key\_field = 6
            data\_field1\_root = 'kkk' data\_field2\_root = 'lll'
            data\_field3\_root = 20 data\_field4\_root = 21 )
              ).
    MODIFY ENTITIES OF demo\_managed\_assoc\_custom
      ENTITY demo\_managed\_assoc\_custom
        CREATE FIELDS ( key\_field data\_field1\_assoc data\_field2\_assoc
            data\_field3\_assoc data\_field4\_assoc ) WITH VALUE #(
          ( %cid = 'cid7' key\_field = 7
            data\_field1\_assoc = 'mmm' data\_field2\_assoc = 'nnn'
            data\_field3\_assoc = 22 data\_field4\_assoc = 23 )
          ( %cid = 'cid8' key\_field = 8
            data\_field1\_assoc = 'ooo' data\_field2\_assoc = 'ppp'
            data\_field3\_assoc = 24 data\_field4\_assoc = 25 )
              ).
    "COMMIT ENTITIES statement, long version.
    "Responses are retrieved per root entity.
    COMMIT ENTITIES
      RESPONSE OF demo\_managed\_root\_2
        FAILED   FINAL(failed1a)
        REPORTED FINAL(reported1a)
      RESPONSE OF demo\_managed\_assoc\_custom
        FAILED   FINAL(failed2a)
        REPORTED FINAL(reported2a).
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @FINAL(lt2\_entity\_1).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @FINAL(lt2\_entity\_2).
    out->write\_doc(
    \`1st modify operation for entity 1. Result with valid entries:\`
               )->write( lt2\_entity\_1 ).
     IF failed1a IS NOT INITIAL.
         out->write\_doc( \`FAILED response for entity 1:\`
           )->write( failed1a ).
     ELSE.
         out->write\_doc( \`No FAILED response for entity 1.\` ).
     ENDIF.
     IF reported1a IS NOT INITIAL.
         out->write\_doc( \`REPORTED response for entity 1:\`
           )->write( reported1a ).
     ELSE.
         out->write\_doc( \`No REPORTED response for entity 1.\` ).
     ENDIF.
         out->write\_doc(
    \`1st modify operation for entity 2. Result with valid entries:\`
               )->write( lt2\_entity\_2
               ).
     IF failed2a IS NOT INITIAL.
         out->write\_doc( \`FAILED response for entity 2:\`
           )->write( failed2a ).
     ELSE.
         out->write\_doc( \`No FAILED response for entity 2.\` ).
     ENDIF.
     IF reported2a IS NOT INITIAL.
         out->write\_doc( \`REPORTED response for entity 2:\`
           )->write( reported2a ).
     ELSE.
         out->write\_doc( \`No REPORTED response for entity 2.\` ).
     ENDIF.
    initialize\_dbtabs( ).
    out->line(
    )->write\_text( \`Second round of modify operations \` &&
                   \`on two entities with invalid entries:\`).
    "Second round of modify operations with invalid entries.
    MODIFY ENTITIES OF demo\_managed\_root\_2
          ENTITY demo\_managed\_root\_2
            CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
            data\_field3\_root data\_field4\_root ) WITH VALUE #(
            ( %cid = 'cid9' key\_field = 9
              data\_field1\_root = 'qqq' data\_field2\_root = 'rrr'
              data\_field3\_root = 26 data\_field4\_root = 27 )
            ( %cid = 'cid10' key\_field = 10
              data\_field1\_root = 'sss' data\_field2\_root = 'ttt'
              data\_field3\_root = 28 data\_field4\_root = 51 )
            ( %cid = 'cid11' key\_field = 11
              data\_field1\_root = 'uuu' data\_field2\_root = 'vvv'
              data\_field3\_root = 29 data\_field4\_root = 52 )
                  ).
    MODIFY ENTITIES OF demo\_managed\_assoc\_custom
          ENTITY demo\_managed\_assoc\_custom
            CREATE FIELDS ( key\_field data\_field1\_assoc
            data\_field2\_assoc data\_field3\_assoc data\_field4\_assoc )
            WITH VALUE #(
            (  %cid = 'cid12' key\_field = 12
               data\_field1\_assoc = 'www' data\_field2\_assoc = 'xxx'
               data\_field3\_assoc = 30 data\_field4\_assoc = 31 )
            (  %cid = 'cid13' key\_field = 13
               data\_field1\_assoc = 'yyy' data\_field2\_assoc = 'zzz'
               data\_field3\_assoc = 32 data\_field4\_assoc = 10001 )
            (  %cid = 'cid14' key\_field = 14
               data\_field1\_assoc = 'aaa' data\_field2\_assoc = 'bbb'
               data\_field3\_assoc = 33 data\_field4\_assoc = 10002 )
                  ).
    "COMMIT ENTITIES statement, long version.
    "Responses are retrieved per root entity.
    COMMIT ENTITIES
      RESPONSE OF demo\_managed\_root\_2
        FAILED   FINAL(failed1b)
        REPORTED FINAL(reported1b)
      RESPONSE OF demo\_managed\_assoc\_custom
        FAILED   FINAL(failed2b)
        REPORTED FINAL(reported2b).
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @FINAL(lt3\_entity\_1).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @FINAL(lt3\_entity\_2).
    out->write\_doc(
    \`2nd modify operation for entity 1. \` &&
    \`No saved entries due to invalid entries:\`
               )->write( lt3\_entity\_1 ).
     IF failed1b IS NOT INITIAL.
         out->write\_doc( \`FAILED response for entity 1:\`
           )->write( failed1b ).
     ELSE.
         out->write\_doc( \`No FAILED response for entity 1.\` ).
     ENDIF.
     IF reported1b IS NOT INITIAL.
         out->write\_doc( \`REPORTED response for entity 1:\`
           )->write( reported1b ).
     ELSE.
         out->write\_doc( \`No REPORTED response for entity 1.\` ).
     ENDIF.
         out->write\_doc(
    \`2nd modify operation for entity 2. \` &&
    \`No saved entries due to invalid entries:\`
               )->write( lt3\_entity\_2
               ).
     IF failed2b IS NOT INITIAL.
         out->write\_doc( \`FAILED response for entity 2:\`
           )->write( failed2b ).
     ELSE.
         out->write\_doc( \`No FAILED response for entity 2.\` ).
     ENDIF.
     IF reported2b IS NOT INITIAL.
         out->write\_doc( \`REPORTED response for entity 2:\`
           )->write( reported2b ).
     ELSE.
         out->write\_doc( \`No REPORTED response for entity 2.\` ).
     ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_assoc\_2.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program and shows an example for both, short and long version of the COMMIT ENTITIES statement:

-   COMMIT ENTITIES.
    
    Two MODIFY operations for two different root entities are carried out within one [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry") to create several instances using the keyword CREATE. These newly created instances are saved to the database tables when triggering the save phase with the COMMIT ENTITIES. statement. It is just about saving the created entries, responses are not of interest. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database tables are emptied.
    
-   COMMIT ENTITIES RESPONSE OF ...
    
    Two rounds of MODIFY operations are carried out on two different entities, one round with valid entries, the other containing invalid entries. Due to the implemented validation, it is ensured that no instance from the transactional buffer is saved if the validation fails for one or more of the instances created within the RAP LUW. In case of a failed validation, the FAILED and REPORTED structures are filled with information on the failed instances.
    
    First round: MODIFY operations are carried out on two root entities using the keyword CREATE to create new instances. The COMMIT ENTITIES RESPONSE OF ... statement includes the FAILED and REPORTED responses for both of the root entities. Upon committing, the validation method in the ABP is called. Since all instances are valid, all of them are saved to the database table. There are no FAILED and REPORTED responses. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database is emptied.
    
    Second round: Same as before, MODIFY operations are carried out on the two root entities using the keyword CREATE to create new instances, yet with entries for which the validation will fail (the number of the fourth data field is higher than the allowed value in the validation method). For each entity, there is one valid entry and two invalid entries. Also here, the COMMIT ENTITIES RESPONSE OF ... statement includes the FAILED and REPORTED responses for both of the root entities. Upon committing, the validation method in the respective ABP is called. The methods ensure that the response structures are filled with information on those instances for which the validation failed. Due to the fact that invalid entries exist, these instances are not saved to the database as well as those instances with valid entries. All instances of the whole RAP LUW are not saved. All data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations. Consequently, there are no data sets to be displayed because the saving failed for all instances. Two internal tables are created and displayed per entity that show parts of the FAILED and REPORTED responses returned for those instances for which the validation failed.
    
    Note: No further data changes are possible as long as the invalid instances are not corrected. An invalid entity instance must either be corrected using an UPDATE operation, or it must be deleted using the ROLLBACK ENTITIES statement. Otherwise, no further data changes are possible.