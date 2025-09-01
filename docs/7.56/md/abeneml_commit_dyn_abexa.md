---
title: "ABAP EML - COMMIT ENTITIES, Dynamic Form"
description: |
  This example demonstrates the dynamic form of the COMMIT ENTITIES statement. Data model The CDS data model consists of two simple root entities: -   DEMO_MANAGED_ROOT_2 -   DEMO_MANAGED_ASSOC_CUSTOM They are not related to each other and are only used to have responses for more than one root e
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_commit_dyn_abexa.htm"
abapFile: "abeneml_commit_dyn_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abeneml", "commit", "dyn", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) →  [Examples for ABAP EML COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencommit_entities_abexas.htm) → 

ABAP EML - COMMIT ENTITIES, Dynamic Form

This example demonstrates the dynamic form of the COMMIT ENTITIES statement.
Data model

The CDS data model consists of two simple root entities:

-   DEMO\_MANAGED\_ROOT\_2
-   DEMO\_MANAGED\_ASSOC\_CUSTOM

They are not related to each other and are only used to have responses for more than one root entity in the example. Associations and child entities are of no relevance in this example.

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of entity DEMO\_MANAGED\_ROOT\_2 contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_root; }

Likewise, the entity DEMO\_MANAGED\_ASSOC\_CUSTOM contains the following notation for the validation validate\_field in the body:

validation validate\_field on save { field data\_field4\_assoc; }

Behavior implementation

For both of the above CDS behavior definitions, there are [ABAP behavior pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The actual implementation takes place in the CCIMP include of ABP BP\_DEMO\_MANAGED\_ROOT\_2 and CCIMP include of ABP BP\_DEMO\_MANAGED\_ASSOC\_CUSTOM respectively.

The method validate\_field has the following logic:

-   First, all instances of the entities with the provided keys are read into an internal table using the keyword READ ENTITIES.
-   It is then checked whether the number of a certain data field is higher than the value that is allowed. In case of entity DEMO\_MANAGED\_ROOT\_2, the data field data\_field4\_root should not be higher than 50. In case of entity DEMO\_MANAGED\_ASSOC\_CUSTOM, the data field data\_field4\_assoc should not be higher than 10000. If the values are higher, the FAILED and REPORTED structures are filled with information for the respective failed entry.

Source Code

REPORT demo\_rap\_eml\_commit\_2.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out        TYPE REF TO if\_demo\_output,
      fail       TYPE abp\_behv\_response\_tab,
      report     TYPE abp\_behv\_response\_tab,
      failed\_tab   TYPE TABLE FOR FAILED LATE demo\_managed\_root,
      reported\_tab TYPE TABLE FOR REPORTED LATE demo\_managed\_root,
      root\_name1 TYPE abp\_root\_entity\_name
                      VALUE 'DEMO\_MANAGED\_ASSOC\_CUSTOM',
      root\_name2 TYPE abp\_root\_entity\_name
                      VALUE 'DEMO\_MANAGED\_ROOT\_2'.
    CLASS-METHODS:
      initialize\_dbtabs,
      output\_failed\_tab IMPORTING f\_tab LIKE fail,
      output\_reported\_tab IMPORTING r\_tab LIKE report.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
                    \`COMMIT Variant: COMMIT ENTITIES RESPONSE OF\`
                   ).
    "Fill table dyn\_tab with those root entity names from which
    "responses should be retrieved.
    DATA(dyn\_tab) = VALUE abp\_entity\_name\_tab( ( root\_name1 )
                                               ( root\_name2 ) ).
    "First round of modify operations with valid entries.
    "Entries are created for two root entities.
    MODIFY ENTITIES OF demo\_managed\_root\_2
      ENTITY demo\_managed\_root\_2
        CREATE SET FIELDS WITH VALUE #(
          ( %cid = 'cid1' key\_field = 1
            data\_field1\_root = 'aaa' data\_field2\_root = 'bbb'
            data\_field3\_root = 10 data\_field4\_root = 11 )
          ( %cid = 'cid2' key\_field = 2
            data\_field1\_root = 'ccc' data\_field2\_root = 'ddd'
            data\_field3\_root = 12 data\_field4\_root = 13 )
              ).
    MODIFY ENTITIES OF demo\_managed\_assoc\_custom
      ENTITY demo\_managed\_assoc\_custom
        CREATE SET FIELDS WITH VALUE #(
          ( %cid = 'cid3' key\_field = 3
            data\_field1\_assoc = 'eee' data\_field2\_assoc = 'fff'
            data\_field3\_assoc = 14 data\_field4\_assoc = 15 )
          ( %cid = 'cid4' key\_field = 4
            data\_field1\_assoc = 'ggg' data\_field2\_assoc = 'hhh'
            data\_field3\_assoc = 16 data\_field4\_assoc = 17 )
              ).
    COMMIT ENTITIES
     RESPONSES OF dyn\_tab
      FAILED   DATA(failed1)
      REPORTED DATA(reported1).
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @DATA(lt\_com\_responses\_of).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @DATA(lt\_com\_responses\_of2).
    out->write\_text(
    \`1st modify operation for entity 1: Result with valid entries:\`
               )->write( lt\_com\_responses\_of
               )->write\_text(
    \`1st modify operation for entity 2: Result with valid entries:\`
               )->write( lt\_com\_responses\_of2
               ).
    out->write\_text( \`Commit responses:\` ).
    output\_failed\_tab( f\_tab = failed1 ).
    output\_reported\_tab( r\_tab = reported1 ).
    initialize\_dbtabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    "Second round of modify operations with invalid entries.
    MODIFY ENTITIES OF demo\_managed\_root\_2
          ENTITY demo\_managed\_root\_2
            CREATE SET FIELDS WITH VALUE #(
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
            CREATE SET FIELDS WITH VALUE #(
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
      FAILED   DATA(failed2)
      REPORTED DATA(reported2).
    SELECT \* FROM demo\_tab\_root\_2
      INTO TABLE @DATA(lt\_com\_responses\_inval).
    SELECT \* FROM demo\_tab\_assoc\_2
      INTO TABLE @DATA(lt\_com\_responses\_inval2).
    out->write\_text(
    \`2nd modify operation for entity 1 - \` &&
    \`no saved entries due to invalid entries:\`
               )->write( lt\_com\_responses\_inval
               )->write\_text(
    \`2nd modify operation for entity 2 - \` &&
    \`no saved entries due to invalid entries:\`
               )->write( lt\_com\_responses\_inval2
               ).
    out->write\_text( \`Commit responses:\` ).
    output\_failed\_tab( f\_tab = failed2 ).
    output\_reported\_tab( r\_tab = reported2 ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_assoc\_2.
  ENDMETHOD.
  METHOD output\_failed\_tab.
    TYPES:
      BEGIN OF ls\_failed\_log,
        root\_name   TYPE abp\_root\_entity\_name,
        entity\_name TYPE abp\_entity\_name,
        key\_field   TYPE i,
        fail\_cause  TYPE if\_abap\_behv=>t\_fail\_cause,
      END OF ls\_failed\_log.
    DATA:
      lt\_failed\_log TYPE STANDARD TABLE OF ls\_failed\_log
        WITH EMPTY KEY.
    LOOP AT f\_tab ASSIGNING FIELD-SYMBOL(<fail>).
     FIELD-SYMBOLS <lt\_failed\_data> TYPE STANDARD TABLE.
     ASSIGN <fail>-entries->\* TO <lt\_failed\_data>.
     failed\_tab = CORRESPONDING #( DEEP <lt\_failed\_data>  ).
      LOOP AT failed\_tab ASSIGNING FIELD-SYMBOL(<failed\_tab>).
        APPEND VALUE #(   root\_name   = <fail>-root\_name
                          entity\_name = <fail>-entity\_name
                          key\_field   = <failed\_tab>-key\_field
                          fail\_cause  = <failed\_tab>-%fail-cause
                      ) TO  lt\_failed\_log.
        ENDLOOP.
    ENDLOOP.
    IF lt\_failed\_log IS NOT INITIAL.
      out->write\_text(
             \`FAILED response:\`
             )->write( lt\_failed\_log ).
     ELSE.
      out->write\_text( \`No FAILED response.\` ).
     ENDIF.
  ENDMETHOD.
  METHOD output\_reported\_tab.
    TYPES:
      BEGIN OF ls\_reported\_log,
        root\_name   TYPE abp\_root\_entity\_name,
        entity\_name TYPE abp\_entity\_name,
        key\_field   TYPE i,
        severity    TYPE if\_abap\_behv\_message=>t\_severity,
        message     TYPE string,
      END OF ls\_reported\_log.
    DATA:
      lt\_reported\_log TYPE STANDARD TABLE OF
          ls\_reported\_log WITH EMPTY KEY.
    LOOP AT r\_tab ASSIGNING FIELD-SYMBOL(<report>).
      FIELD-SYMBOLS <lt\_reported\_data> TYPE STANDARD TABLE.
      ASSIGN <report>-entries->\* TO <lt\_reported\_data>.
      reported\_tab = CORRESPONDING #( DEEP <lt\_reported\_data> ).
    LOOP AT reported\_tab ASSIGNING FIELD-SYMBOL(<reported\_tab>).
        APPEND VALUE #(
          root\_name   = <report>-root\_name
          entity\_name = <report>-entity\_name
          key\_field   = <reported\_tab>-key\_field
          message     = <reported\_tab>-%msg->if\_message~get\_text( )
          severity    = <reported\_tab>-%msg->m\_severity
                      ) TO  lt\_reported\_log.
        ENDLOOP.
    ENDLOOP.
    IF lt\_reported\_log IS NOT INITIAL.
      out->write\_text(
             \`REPORTED response:\`
             )->write( lt\_reported\_log ).
     ELSE.
      out->write\_text( \`No REPORTED response.\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two MODIFY operations for two different root entities are carried out within one [RAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_luw_glosry.htm "Glossary Entry") to create several instances using the keyword CREATE.
-   For these newly created instances, the validations are successful and they are saved to the database using COMMIT ENTITIES. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database tables are emptied using the method initiliaze\_dbtabs( ).
-   COMMIT ENTITIES RESPONSE OF ...

Two rounds of MODIFY operations are carried out on two different entities, one round with valid entries, the other containing invalid entries. Validations always accept or reject data changes per RAP LUW. Therefore, if the validation fails only for one instance, the complete content of the transactional buffer is rejected. In case of a failed validation, the FAILED and REPORTED structures are filled with information on the failed instances.

-   The internal table dyn\_tab is set up to hold those root entities for which responses should be retrieved.
-   First round: MODIFY operations are carried out on two root entities using the keyword CREATE to create new instances. The COMMIT ENTITIES RESPONSES OF ... statement includes the FAILED and REPORTED responses for both of the root entities since dyn\_tab was specified accordingly. Upon committing, the validation method in the ABP is called. Since all instances are valid, all of them are saved to the database table. There are no FAILED and REPORTED responses. The saved data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations and the successful saving to the database. Afterwards, the database is emptied.
-   Second round: Same as before, MODIFY operations are carried out on the two root entities using the keyword CREATE to create new instances, yet with entries for which the validation will fail (the number of the fourth data field is higher than the allowed value in the validation method).
    
    For each entity, there is one valid entry and two invalid entries. Also here, the COMMIT ENTITIES RESPONSES OF ... statement includes the FAILED and REPORTED responses for both of the root entities as the internal table dyn\_tab was specified accordingly. Upon committing, the validation method in the respective ABP is called. The methods ensure that the response structures are filled with information on those instances for which the validation failed. Due to the fact that invalid entries exist, these instances are not saved to database as well as those instances with valid entries. All instances of the whole RAP LUW are not saved. All data sets are then read from the database tables into internal tables to display the outcome of the MODIFY operations. Consequently, there are no data sets to be displayed because of the failed saving. Two internal tables are created to display parts of the accumulated FAILED responses for all root entities specified in dyn\_tab and parts of the accumulated REPORTED responses.
    
    Note: No further data changes are possible as long as the invalid instances are not corrected. An invalid entity instance must either be corrected using an UPDATE operation, or it must be deleted using the ROLLBACK ENTITIES statement. Otherwise, no further data changes are possible.