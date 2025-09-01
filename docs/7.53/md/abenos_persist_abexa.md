---
title: "Persistence Service"
description: |
  This example demonstrates how a persistent object is created. Source Code REPORT demo_create_persistent. SELECTION-SCREEN BEGIN OF SCREEN 400 TITLE text-400. PARAMETERS delete AS CHECKBOX. SELECTION-SCREEN END OF SCREEN 400. SELECTION-SCREEN BEGIN OF SCREEN 500 TITLE text-500. PARAMETERS commit AS
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_persist_abexa.htm"
abapFile: "abenos_persist_abexa.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenos", "persist", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services.htm) →  [Persistence Service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_persist.htm) → 

Persistence Service

This example demonstrates how a persistent object is created.

Source Code

REPORT demo\_create\_persistent.
SELECTION-SCREEN BEGIN OF SCREEN 400 TITLE text-400.
PARAMETERS delete AS CHECKBOX.
SELECTION-SCREEN END OF SCREEN 400.
SELECTION-SCREEN BEGIN OF SCREEN 500 TITLE text-500.
PARAMETERS commit AS CHECKBOX.
SELECTION-SCREEN END OF SCREEN 500.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(wa\_spfli) = VALUE spfli(
      carrid     = 'LH'
      connid     = '123'
      countryfr  = 'DE'
      cityfrom   = 'FRANKFURT'
      airpfrom   = 'FRA'
      countryto  = 'SG'
      cityto     = 'SINGAPORE'
      airpto     = 'SIN'
      fltime     = '740'
      deptime    = '234500'
      arrtime    = '180000'
      distance   = '10000'
      distid     = 'KM'
      fltype     = ' '
      period     = '1' ).
    DATA(agent) = ca\_spfli\_persistent=>agent.
    TRY.
        DATA(connection) =
          agent->get\_persistent( i\_carrid = wa\_spfli-carrid
                                 i\_connid = wa\_spfli-connid ).
        MESSAGE 'Connection already exists' TYPE 'I'.
        CALL SELECTION-SCREEN 400 STARTING AT 10 10.
        IF delete = 'X'.
          TRY.
              agent->delete\_persistent( i\_carrid = wa\_spfli-carrid
                                        i\_connid = wa\_spfli-connid ).
              COMMIT WORK.
            CATCH cx\_root INTO DATA(exc).
              MESSAGE exc->get\_text( ) TYPE 'I'.
          ENDTRY.
        ENDIF.
      CATCH cx\_root INTO exc.
        MESSAGE exc->get\_text( ) TYPE 'I'.
        TRY.
            connection = agent->create\_persistent(
                           i\_carrid = wa\_spfli-carrid
                           i\_connid = wa\_spfli-connid
                           i\_countryfr = wa\_spfli-countryfr
                           i\_cityfrom = wa\_spfli-cityfrom
                           i\_airpfrom = wa\_spfli-airpfrom
                           i\_countryto = wa\_spfli-countryto
                           i\_cityto = wa\_spfli-cityto
                           i\_airpto = wa\_spfli-airpto
                           i\_fltime = wa\_spfli-fltime
                           i\_deptime = wa\_spfli-deptime
                           i\_arrtime = wa\_spfli-arrtime
                           i\_distance = wa\_spfli-distance
                           i\_distid = wa\_spfli-distid
                           i\_fltype = wa\_spfli-fltype
                           i\_period = wa\_spfli-period            ).
            MESSAGE 'Connection created' TYPE 'I'.
            CALL SELECTION-SCREEN 500 STARTING AT 10 10.
            IF commit = 'X'.
              COMMIT WORK.
            ENDIF.
          CATCH cx\_root INTO exc.
            MESSAGE exc->get\_text( ) TYPE 'I'.
        ENDTRY.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A reference to the class agent of the persistent class CL\_SPFLI\_PERSISTENT is assigned to the reference variable agent. It is created once by the static constructor of the CA\_SPFLI\_PERSISTENT class. Using the method GET\_PERSISTENT, a check is made to establish whether there is already a persistent object with the required key in the database. If an object already exists, it can be deleted using DELETE\_PERSISTENT. If no object exists, the exception CX\_OS\_OBJECT\_NOT\_FOUND is raised and caught. In the corresponding CATCH block, an attempt is made to create the object using CREATE\_PERSISTENT. Note that the object is only created on the database when the statement COMMIT WORK is used. Without an explicit COMMIT WORK, it exists only as an administered object in the program and it is deleted without affecting the database at the end of the program.