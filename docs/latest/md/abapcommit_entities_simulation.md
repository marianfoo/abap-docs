---
title: "COMMIT ENTITIES, IN SIMULATION MODE"
description: |
  Syntax COMMIT ENTITIES ... IN SIMULATION MODE ... Effect Optional addition of COMMIT ENTITIES(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statements that allows a RAP transaction to be checked. It processes the RAP early save phase(https://help.sap.co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities_simulation.htm"
abapFile: "abapcommit_entities_simulation.htm"
keywords: ["do", "while", "if", "case", "try", "data", "abapcommit", "entities", "simulation"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20ENTITIES%2C%20IN%20SIMULATION%20MODE%2C%20ABAPCOMMIT_ENTITIES_SIMULATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

COMMIT ENTITIES, IN SIMULATION MODE

Syntax

COMMIT ENTITIES ... IN SIMULATION MODE ...

Effect

Optional addition of [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statements that allows a RAP transaction to be checked. It processes the [RAP early save phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry") only and without actually saving data. A final [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) is not implicitly included with this variant. The consistency of the transaction can be checked by evaluating the value of sy-subrc as a result of executing the commit in simulation mode.

Use Case

A use case of COMMIT ENTITIES statements with the addition IN SIMULATION MODE might be as follows:

-   A non-RAP application modifies data. It needs to persist the data and has its own save logic. Furthermore, it is responsible for the final saving of data from within an [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenluw_glosry.htm "Glossary Entry"), i. e. once the SAP LUW is finalized with [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm).
-   If other RAP implementations are involved and part of the SAP LUW before this COMMIT WORK, for example, due to new features added or due to a redesign or refactoring, it must be ensured that the overall SAP LUW is consistent with regards to saving.
-   RAP implementations whose save sequence is usually triggered with a COMMIT ENTITIES statement, i. e. without the addition IN SIMULATION MODE, process the complete save sequence automatically including the actual saving. This might lead to inconsistencies because of a potentially incomplete execution of COMMIT WORK while the RAP BOs are already saved with a COMMIT ENTITIES statement.
-   Similarly, inconsistencies can occur if data gets saved from a non-RAP application first and then RAP BOs cannot be saved due to issues. A complete checking of all involved data is not possible.
-   To overcome these potential inconsistencies, the addition IN SIMULATION MODE of the COMMIT ENTITIES statement simulates the saving of the RAP BOs to check the consistency and whether issues occur.
-   If there are no issues with saving the RAP BOs (indicated by the value 0 of sy-subrc following the statement), the saving of all involved (RAP and non-RAP) components from within the SAP LUW can be executed using COMMIT WORK that is triggered by the non-RAP application.
-   If problems show up following the consistency check (indicated by a value other than 0 of sy-subrc following the statement), the overall implementation can react and avoid the final saving of data at the end of the SAP LUW with COMMIT WORK.

Executable Example

[ABAP EML - COMMIT ENTITIES IN SIMULATION MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommit_entities_sim_mod_abexa.htm)