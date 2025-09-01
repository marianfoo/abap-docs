  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) →  [Examples for ABAP EML COMMIT ENTITIES](javascript:call_link\('abencommit_entities_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - COMMIT ENTITIES IN SIMULATION MODE, ABENCOMMIT_ENTITIES_SIM_MOD_ABEXA, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - COMMIT ENTITIES IN SIMULATION MODE

This example demonstrates the COMMIT ENTITIES IN SIMULATION MODE statement.

Data model

The CDS data model consists of the root entity DEMO\_CDS\_UPDATE.

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_UPDATE is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_update unique;
strict;
define behavior for DEMO\_CDS\_UPDATE
persistent table DEMO\_UPDATE
lock master
authorization master (global)
{
  create;
  update;
  delete;
  validation ValidateCol1 on save { field Col1; }
}

Behavior implementation

For the above CDS behavior definitions, there is an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") available: BP\_DEMO\_CDS\_UPDATE. The actual implementation takes place in the CCIMP include. The following method is relevant for the example:

-   validatecol1
    
    The validation checks the consistency of RAP business object instances based on the condition that the field col1 should not have a value greater than 5000. If it is larger, the REPORTED structure is filled with an error message.
    

Source Code   

REPORT demo\_rap\_eml\_commit\_simul\_save.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
    class\_constructor,
    main.
  PRIVATE SECTION.
    CLASS-DATA:
        out TYPE REF TO if\_demo\_output,
        ls\_report TYPE RESPONSE FOR REPORTED LATE DEMO\_CDS\_UPDATE.
    CLASS-METHODS:
        display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for simulate save\`
      )->write\_html( \`<b>Data creation via function module</b>\` ).
    "Database table is cleared via a function module.
    CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    DATA(values) = VALUE demo\_update\_tab(
      ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
      ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
      ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
    "Data is created via a function module.
    CALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK
      EXPORTING
        values = values.
    COMMIT WORK AND WAIT. "<---- End SAP LUW and start a new one
       SELECT \*
           FROM demo\_update
           INTO TABLE @FINAL(result).
        out->write( result ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    SET UPDATE TASK LOCAL.
    DELETE TABLE values WITH TABLE KEY id = 'X'.
    CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK
      EXPORTING
        values = values.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col2 = 2100 col3 = 3100 col4 = 4100 )
      ( id = 'Z' col2 = 2200 col3 = 3200 col4 = 4200 ) ).
    "Selected data sets is updated via a function module.
    CALL FUNCTION 'DEMO\_UPDATE\_MODIFY' IN UPDATE TASK
      EXPORTING
        values = values.
    "Data is updated via an EML modify request.
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE FIELDS ( Col1 ) WITH VALUE #(
        ( id = 'X' col1 = 111  )
        ( id = 'Y' col1 = 5001  ) "Validation fails for this instance.
        ( id = 'Z' col1 = 5002  ) "Validation fails for this instance.
          ).
    COMMIT ENTITIES IN SIMULATION MODE RESPONSE OF DEMO\_CDS\_UPDATE
    REPORTED ls\_report.
    IF ls\_report IS INITIAL.
      COMMIT WORK AND WAIT. "<---- End SAP LUW and start a new one
       SELECT \*
           FROM demo\_update
           INTO TABLE @FINAL(result2).
        out->line(
          )->write\_html( \`<b>Successful data update via function \` &&
                         \`module and EML modify request</b>\`
          )->write( result2 ).
    ELSE.
      ROLLBACK WORK.
      out->line(
        )->write\_html( \`<b>Failed data update via function \` &&
                       \`module and EML modify request</b>\`
        )->write( \`The validation of RAP BO instances failed. \` &&
                  \`COMMIT WORK does not get executed.\` ).
      display\_responses( ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    SET UPDATE TASK LOCAL.
    DELETE TABLE values WITH TABLE KEY id = 'X'.
    CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK
      EXPORTING
        values = values.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col2 = 2100 col3 = 3100 col4 = 4100 )
      ( id = 'Z' col2 = 2200 col3 = 3200 col4 = 4200 ) ).
    "Selected data sets are updated via a function module.
    CALL FUNCTION 'DEMO\_UPDATE\_MODIFY' IN UPDATE TASK
      EXPORTING
        values = values.
    "Data is updated via an EML modify request.
    MODIFY ENTITY DEMO\_CDS\_UPDATE
       UPDATE FIELDS ( Col1 ) WITH VALUE #(
        ( id = 'X' col1 = 222  )
        ( id = 'Y' col1 = 333  )
        ( id = 'Z' col1 = 444  )
          ).
    COMMIT ENTITIES IN SIMULATION MODE RESPONSE OF DEMO\_CDS\_UPDATE
    REPORTED ls\_report.
    IF ls\_report IS INITIAL.
      COMMIT WORK AND WAIT. "<---- End SAP LUW and start a new one
       SELECT \*
           FROM demo\_update
           INTO TABLE @FINAL(result3).
        out->line(
          )->write\_html( \`<b>Successful data update via function \` &&
                         \`module and EML modify request</b>\`
          )->write( result3 ).
    ELSE.
      ROLLBACK WORK.
      out->line(
        )->write\_html( \`<b>Failed data update via function \` &&
                       \`module and EML modify request</b>\`
        )->write( \`The validation of RAP BO instances failed. \` &&
                  \`COMMIT WORK is not executed.\` ).
      display\_responses( ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD display\_responses.
     IF ls\_report IS NOT INITIAL.
         out->write\_doc( \`REPORTED response:\`
           )->write( ls\_report ).
     ENDIF.
  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example shows a program divided into segments by switching the work process. It reuses elements of the example [SAP LUW, UPDATE TASK](javascript:call_link\('abensap_luw_update_task_abexa.htm'\)). See more details and descriptions there.

In this example here, the mixing of data modification via update function modules and ABAP EML modify requests in SAP LUWs can be considered as a non-RAP application modifying data while including another RAP implementation. To ensure that the overall SAP LUW is consistent with regards to saving which is finally triggered by a [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) statement, the ABAP EML modify requests are followed by a COMMIT ENTITIES statement with the addition IN SIMULATION MODE that omits the actual saving but includes validating the data before it can be saved.

The program shows the following aspects:

-   The database table is cleared and new data is created.
    
    First, the database table for which data is created and updated, is cleared using a function module. Then, data is created using another function module. Following a COMMIT WORK statement, the data is persisted to the database table.
    
-   ABAP EML modify request is included in the SAP LUW, COMMIT WORK is not executed.
    
    Further data modification is done using function modules followed by an EML modify request. The ABAP EML modify request includes an UPDATE operation with which a particular field (col1) is to be updated. The ABAP EML MODIFY ENTITY statement is succeeded by COMMIT ENTITIES IN SIMULATION MODE that checks the consistency before actually finishing the LUW with a COMMIT WORK statement and, thus, a final saving. The validation ValidateCol1 that is implemented for the RAP BO fails and fills the REPORTED response parameter. As a consequence, the program is implemented in a way that the saving of all the data, i. e. the data modifications done via RAP and non-RAP implementations, is prevented.
    
-   ABAP EML modify request is included in the SAP LUW, COMMIT WORK is executed.
    
    The same data manipulation is carried out as above using function modules and an ABAP EML modify request. However, the request includes values for the field col1 so that the validation does not fail. Hence, all the data modifications done via RAP and non-RAP implementations is committed and persisted to the database.
    

The output window shows tables that contain the database entries. In the case in which COMMIT WORK is not triggered, the REPORTED response from the RAP BO implementation is displayed.