---
title: "Restrictions in Transactional Phases"
description: |
  The following restrictions apply to operations and/or statements in the modify and save transactional phases. X means it is allowed. Operations/Statements modify phase save phase Notes Database commits using secondary connections(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/aben
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_tx.htm"
abapFile: "abapinvalid_stmts_in_tx.htm"
keywords: ["update", "do", "if", "try", "method", "data", "abapinvalid", "stmts"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) →  [Controlled SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrolling_sap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Restrictions%20in%20Transactional%20Phases%2C%20ABAPINVALID_STMTS_IN_TX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Restrictions in Transactional Phases

The following restrictions apply to operations and/or statements in the modify and save transactional phases. X means it is allowed.

Operations/Statements

modify phase

save phase

Notes

Database commits using [secondary connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry")

X

X

Secondary connections are allowed for infrastructure purposes, for example. They can be used to store data that is not part of the main transaction, such as application logs, traces, or number ranges.

Database commits using the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry")

X

\-

[sRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrfc_glosry.htm "Glossary Entry") (CALL FUNCTION ... DESTINATION), [aRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarfc_glosry.htm "Glossary Entry") (CALL FUNCTION ... STARTING NEW TASK)

X

\-

Allowed in phases other than the save transactional phase, e.g. for the purpose of parallelization within the application. It is up to the application to ensure consistency, e.g. to ensure read-only access, to handle a potential two-phase commit, or to provide a proper error handling.

Database modifications

\-

X

Only allowed in the late save phase because the data being processed is always potentially inconsistent. Database changes in other phases would result in multiple database transactions instead of one transaction, which would disrupt the SAP LUW.

[Update function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry")
CALL FUNCTION ... IN UPDATE TASK

\-

X

Can be used to ensure that there is only one database transaction. In addition, registering function modules for update tasks at stages other than the save transactional phase would interfere with [RAP draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") scenarios, for example, where data is stored in [draft tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_table_glosry.htm "Glossary Entry"). There is no way to unregister function modules once they have been registered.

[bgRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbgrfc_glosry.htm "Glossary Entry")
CALL FUNCTION ... IN BACKGROUND UNIT

\-

X

[tRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentrfc_2_glosry.htm "Glossary Entry"), [qRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenqrfc_glosry.htm "Glossary Entry")
CALL FUNCTION ... IN BACKGROUND TASK

\-

\-

Obsolete technologies.

PERFORM ON COMMIT, PERFORM ON ROLLBACK

(X)

X

Basically possible in all phases, but should be reserved for the save phase.
Note: Used in RAP, the use of these statements indicates improper integration. It is especially important to check draft scenarios when calling legacy code and using these statements. Instead, ABAP EML or procedure calls that do not include a COMMIT WORK should be used.

Transaction control
COMMIT WORK, ROLLBACK WORK

\-

\-

Not allowed in transactional contexts. In RAP, the use of these statements is always up to the RAP BO consumer, i.e. outside the ABAP behavior implementation.

[Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") processing
For example, SET SCREEN, CALL SCREEN, LEAVE SCREEN, CALL DIALOG, SUPPRESS DIALOG, MESSAGE without INTO, WRITE, STOP

\-

\-

Not allowed in transactional contexts. Results in a runtime error.

Transaction processing
CALL TRANSACTION, LEAVE TRANSACTION

\-

\-

Not allowed, so that the (unwanted) integration of other LUWs is prevented.

Raising an exception using RAISE EXCEPTION

\-

\-

It is not allowed to leave a transaction this way.

Report processing using SUBMIT ...

\-

\-

Not allowed in transactional contexts. Results in a runtime error.
SUBMIT ... AND RETURN does not currently return an error, but it leads to potentially unwanted screen processing, and because of the missing return channel, there is no proper error handling.

Hints

-   In a RAP transaction, the modify transactional phase includes the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and [RAP early save phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"). The save transactional phase includes the [RAP late save phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry").
-   The checks of the controlled SAP LUW are applied if the [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") CC\_STMT is enabled.

Further Information

-   For general information about data consistency and the SAP LUW, see [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm).
-   An integral part of RAP transactions is [database locking](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_lock_glosry.htm "Glossary Entry"). Each RAP BO instance that is processed during a SAP LUW in RAP must be locked to avoid conflicts. See more information in the Development Guide for the ABAP RESTful Application Programming Model, section [Pessimistic Concurrency Control (Locking)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/99d8162b8d7d4a83ae65320d2a03b8ab).
-   [RAP Save Sequence](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap) in the Development Guide for the ABAP RESTful Application Programming Model.
-   [Restrictions in RAP Handler and Saver Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_rap_methods.htm)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)