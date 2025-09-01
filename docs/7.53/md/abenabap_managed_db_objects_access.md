---
title: "Access to ABAP-Managed Database Objects"
description: |
  ABAP-managed database objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_object_glosry.htm 'Glossary Entry') can be accessed as follows: -   ABAP SQL Access to ABAP-Managed Database Objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ma
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_access.htm"
abapFile: "abenabap_managed_db_objects_access.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenabap", "managed", "objects", "access"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects.htm) → 

Access to ABAP-Managed Database Objects

[ABAP-managed database objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") can be accessed as follows:

-   [ABAP SQL Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_osql.htm)

-   [AMDP access to ABAP-managed database objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_amdp.htm)

-   [Native SQL access to ABAP-managed database objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_nsql.htm)

These access methods each have their own attributes and restrictions, which are described in the corresponding section. The following table summarizes the most important aspects supported by each access method:

\-

[Dependency Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendependency_rule_glosry.htm "Glossary Entry") Respected

[Data Aging](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_aging_glosry.htm "Glossary Entry") Respected

Mapping Between ABAP Types and Database Types,
Existence of the Database Objects,
ABAP-Specific Environment Information,
Where-Used List

ABAP-Managed Database Connections

Field Order,
DDL Forbidden

Client Handling,
Table Buffering,
Table Logging, ...,
CDS Entities

[ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_osql.htm)

Yes

Yes

Yes

Yes

Yes

Yes

[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_amdp.htm)

Yes

Yes

Yes

Restricted

Yes

No

[ABAP-Managed Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_nsql.htm)

Yes

Yes

Restricted

Yes

No

No

[Non-ABAP-Managed Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_nsql.htm)

Yes

No

No

No

No

No

Note

These access methods can be used separately from each other, but there are some mutual dependencies. One example are AS ABAP [database connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_multiconnect.htm) and their transaction contexts, which are shared by ABAP SQL, Native SQL, and AMDP.

Continue
[ABAP SQL Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_osql.htm)
[AMDP Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_amdp.htm)
[Native SQL Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_managed_db_objects_nsql.htm)