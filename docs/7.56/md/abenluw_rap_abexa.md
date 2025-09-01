  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) →  [SAP LUW, Examples](javascript:call_link\('abensap_luw_abexas.htm'\)) → 

SAP LUW, RAP

This example demonstrates how [SAP LUWs](javascript:call_link\('abensap_luw.htm'\)) are bundled in the context of [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry").

The RAP artifacts are as follows:

-   Data model: The CDS data model consists of the root entity DEMO\_CDS\_UPDATE.
-   [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"): DEMO\_CDS\_UPDATE defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry").
-   Behavior implementation: For the above CDS behavior definitions, there is an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") available: BP\_DEMO\_CDS\_UPDATE. The actual implementation takes place in the CCIMP include. The implementation is not relevant for this example.

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
       CREATE SET FIELDS WITH VALUE #(
        ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
        ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
        ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 )
          ).
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE SET FIELDS WITH VALUE #(
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
       CREATE SET FIELDS WITH VALUE #(
        ( id = 'Y' col1 = 1100 col2 = 2100 col3 = 3100 col4 = 4100 )
        ( id = 'Z' col1 = 1200 col2 = 2200 col3 = 3200 col4 = 4200 )
          ).
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE SET FIELDS WITH VALUE #(
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

The example shows a program divided into segments by switching the work process. An implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is performed at the end of each segment. Here, the work process is switched using the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)). In real programs, a switch of this kind can have [many different causes](javascript:call_link\('abendb_commit.htm'\)).

The program covers several ABAP EML MODIFY statements that create and update [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) statements trigger the saving of those RAP BO instances on the database. This entails closing an SAP LUW and opening another.