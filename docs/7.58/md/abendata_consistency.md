---
title: "Data Consistency"
description: |
  When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is processed in the database. The time span in which a consistent data state is transferred to another consisten
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm"
abapFile: "abendata_consistency.htm"
keywords: ["do", "if", "try", "data", "types", "abendata", "consistency"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Consistency%2C%20ABENDATA_CONSISTENCY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Consistency

When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is processed in the database. The time span in which a consistent data state is transferred to another consistent state is known as a Logical Unit of Work (LUW). If an error occurs in an LUW, it is possible to undo all changes made up to this point and restore the data to its original consistent state (rollback). When a new consistent state has been reached, this new state can be committed and a new LUW can be opened.

For an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") two types of LUWs play a role:

-   [Database LUWs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_transaction.htm) realized by the database system
-   [SAP LUWs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm) realized using special ABAP programming techniques

Accordingly, there are two lock types that are of significance:

-   [Database locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_lock.htm) set by the system
-   [SAP locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_lock.htm) set using special ABAP programming techniques

Hint

The [authorizations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm) of a user when accessing data are also relevant for data consistency. The statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm) is used for explicit authorization checks in ABAP programs. [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") also offers its own [access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") based on implicit evaluations of [access conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry").

Continue
[Database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_transaction.htm)
[SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm)
[Database Locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_lock.htm)
[SAP Locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_lock.htm)