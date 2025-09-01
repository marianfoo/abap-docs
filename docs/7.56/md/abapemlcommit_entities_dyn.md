---
title: "COMMIT ENTITIES RESPONSES, Dynamic Form"
description: |
  Syntax COMMIT ENTITIES IN SIMULATION MODE RESPONSES OF dyn_tab response_param(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm). Additions: 1. ... IN SIMULATION MODE(#!ABAP_ADDITION_1@1@) 2. ... OF dyn_tab(#!ABAP_ADDITION_2@2@) Effect Trigger
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapemlcommit_entities_dyn.htm"
abapFile: "abapemlcommit_entities_dyn.htm"
keywords: ["do", "while", "if", "case", "try", "method", "data", "internal-table", "abapemlcommit", "entities", "dyn"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) → 

COMMIT ENTITIES RESPONSES, Dynamic Form

Syntax

COMMIT ENTITIES *\[*IN SIMULATION MODE*\]* RESPONSES *\[*OF dyn\_tab*\]* [response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm).

Additions:

[1\. ... IN SIMULATION MODE](#!ABAP_ADDITION_1@1@)
[2\. ... OF dyn\_tab](#!ABAP_ADDITION_2@2@)

Effect

Triggers the RAP save sequence and finishes the [RAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_luw_glosry.htm "Glossary Entry").

All [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") that have been changed within the RAP LUW and that are present in the transactional buffer are persisted to the database. This syntax form of the COMMIT ENTITIES statement includes response parameters ([response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)). The dynamic aspect comes along with using the addition OF dyn\_tab.

[FAILED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) and [REPORTED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) responses can be retrieved for one or multiple RAP BOs that have been modified beforehand. The parameters following the FAILED and REPORTED parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Addition 1   

... IN SIMULATION MODE

Effect

Used to process a save in simulation mode, i. e. the RAP save sequence is executed but without actually saving data. A final COMMIT WORK is not implicitly included with this variant. In the save sequence, the finalize, check\_before\_save and cleanup\_finalize methods are called omitting the adjust\_numbers, save, and cleanup methods.

A use case of COMMIT ENTITIES statements with the addition IN SIMULATION MODE is as follows: A non-RAP application modifies data. It needs to persist the data and has its own save logic. Furthermore, it is responsible for the final saving of data from within an [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry"), i. e. once the SAP LUW is finalized with [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm). If other RAP implementations are involved and part of the SAP LUW before this COMMIT WORK, for example, due to new features added or due to a redesign or refactoring, it must be ensured that the overall SAP LUW is consistent with regards to saving. RAP implementations whose save sequence is usually triggered with a COMMIT ENTITIES statement, i. e. without the addition IN SIMULATION MODE, process the complete save sequence automatically including the actual saving. This might lead to inconsistencies because of a potentially incomplete execution of COMMIT WORK while the RAP BOs are already saved with a COMMIT ENTITIES statement. Similarly, inconsistencies can occur if data gets saved from a non-RAP application first and then RAP BOs cannot be saved due to issues. A complete checking of all involved data is not possible. To overcome these potential inconsistencies, the addition IN SIMULATION MODE of the COMMIT ENTITIES statement simulates the saving of the RAP BOs to check the consistency and whether issues occur. If there are no issues with saving the RAP BOs, the saving of all involved (RAP and non-RAP) components from within the SAP LUW can be executed using COMMIT WORK that is triggered by the non-RAP application. If problems show up following the consistency check, the overall implementation can react and avoid the final saving of data at the end of the SAP LUW with COMMIT WORK.

Addition 2   

... OF dyn\_tab

Effect

When using the dynamic form of the COMMIT ENTITIES statement, the table dyn\_tab specifies from which root entities the response information should be retrieved. dyn\_tab must be of type ABP\_ENTITY\_NAME\_TAB. The components are the names of the root entities. They must be typed with ABP\_ROOT\_ENTITY\_NAME.

Example

The following source code section taken from DEMO\_RAP\_EML\_COMMIT\_2 demonstrates the dynamic form of the COMMIT ENTITIES statement.

DATA: root\_name1 TYPE abp\_root\_entity\_name
                 VALUE 'DEMO\_MANAGED\_ASSOC\_CUSTOM',
      root\_name2 TYPE abp\_root\_entity\_name
                 VALUE 'DEMO\_MANAGED\_ROOT\_2'.
DATA(dyn\_tab) = VALUE abp\_entity\_name\_tab( ( root\_name1 )
                                           ( root\_name2 ) ).
COMMIT ENTITIES
RESPONSES OF dyn\_tab
  FAILED   DATA(failed)
  REPORTED DATA(reported).

Executable Example

The example [COMMIT ENTITIES, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_commit_dyn_abexa.htm) demonstrates the use of the dynamic form of the COMMIT ENTITIES statement.