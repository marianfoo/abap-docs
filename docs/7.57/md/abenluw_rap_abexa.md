  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw.htm) →  [SAP LUW, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SAP LUW, RAP, ABENLUW_RAP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

SAP LUW, RAP

This example demonstrates how [SAP LUWs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw.htm) are bundled in the context of [RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glosry.htm "Glossary Entry").

The RAP artifacts are as follows:

-   Data model: The CDS data model consists of the root entity DEMO\_CDS\_UPDATE.
-   [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"): DEMO\_CDS\_UPDATE defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry").
-   Behavior implementation: For the above CDS behavior definitions, there is an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available: BP\_DEMO\_CDS\_UPDATE. The actual implementation takes place in the CCIMP include. The implementation is not relevant for this example.

Source Code   

REPORT demo\_sap\_luw\_rap.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM DEMO\_UPDATE.
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       CREATE FIELDS ( Id Col1 Col2 Col3 Col4 )
       AUTO FILL CID WITH VALUE #(
        ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
        ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
        ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 )
          ).
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE FIELDS ( Col1 ) WITH VALUE #(
        ( id = 'X' col1 = 900 )
        ( id = 'Y' col1 = 910 )
        ( id = 'Z' col1 = 920 )
          ).
    COMMIT WORK AND WAIT. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @DATA(result).
    cl\_demo\_output=>write( result ).
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       DELETE FROM VALUE #( ( id = 'Y'  ) ( id = 'Z'  ) ).
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       CREATE FIELDS ( Id Col1 Col2 Col3 Col4 )
       AUTO FILL CID WITH VALUE #(
        ( id = 'Y' col1 = 1100 col2 = 2100 col3 = 3100 col4 = 4100 )
        ( id = 'Z' col1 = 1200 col2 = 2200 col3 = 3200 col4 = 4200 )
          ).
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE FIELDS ( Col1 Col2 Col3 Col4 ) WITH VALUE #(
        ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 )
          ).
    COMMIT WORK. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @result.
    cl\_demo\_output=>write( result ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example shows a program divided into segments by switching the work process. An implicit [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed at the end of each segment. Here, the work process is switched using the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm). In real programs, a switch of this kind can have [many different causes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm).

The program covers several ABAP EML MODIFY statements that create and update [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) statements trigger the saving of those RAP BO instances on the database. This entails closing an SAP LUW and opening another.