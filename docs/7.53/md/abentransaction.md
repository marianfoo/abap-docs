---
title: "Data Consistency"
description: |
  When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is edited in the database. The time span in which a consistent data state is transferred to another consistent s
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction.htm"
abapFile: "abentransaction.htm"
keywords: ["do", "if", "try", "data", "types", "abentransaction"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) → 

Data Consistency

When data in database tables is modified by application programs, it must be ensured that the data is consistent after the changes have been made. This is particularly important when data is edited in the database. The time span in which a consistent data state is transferred to another consistent state is known as an LUW (Logical Unit of Work). If an error occurs in an LUW, it is possible to undo all changes made up to this point and roll the data back to its original consistent state (rollback). When a new consistent state has been reached, this new state can be committed and a new LUW can be opened.

[AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") has two types of LUWs:

-   [Database LUWs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_transaction.htm) realized by the database system

-   [SAP LUWs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw.htm) realized using special ABAP programming techniques

Accordingly, there are two lock types that are of significance:

-   [Database locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_lock.htm) set by the system

-   [SAP locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock.htm) set using special ABAP programming techniques

Note

The [authorizations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbc_authority_check.htm) of a user when accessing data are also relevant for data consistency. The statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm) is used for explicit authorization checks in ABAP programs. Alongside this, the [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") offers its own [access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry") based on implicit evaluations of [access conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccess_condition_glosry.htm "Glossary Entry").

Continue
[Database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_transaction.htm)
[SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw.htm)
[Database Locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_lock.htm)
[SAP Locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock.htm)