---
title: "Access to ABAP-Managed Database Objects"
description: |
  ABAP-managed database objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_object_glosry.htm 'Glossary Entry') can be accessed as follows: -   ABAP SQL Access to ABAP managed Database Objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ma
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_access.htm"
abapFile: "abenabap_managed_db_objects_access.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenabap", "managed", "objects", "access"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Access to ABAP-Managed Database Objects, ABENABAP_MANAGED_DB_OBJECTS_ACCESS, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Access to ABAP-Managed Database Objects

[ABAP-managed database objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") can be accessed as follows:

-   [ABAP SQL Access to ABAP managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_asql.htm)
-   [AMDP access to ABAP managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_amdp.htm)
-   [Native SQL access to ABAP managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_nsql.htm)

These access methods each have their own properties and restrictions, which are described in the corresponding sections. The following table summarizes the most important aspects supported by each access method:

\-

[Dependency Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendependency_rule_glosry.htm "Glossary Entry") Respected

[Data Aging](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_aging_glosry.htm "Glossary Entry") Respected

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

[ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_asql.htm)

Yes

Yes

Yes

Yes

Yes

Yes

[AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_amdp.htm)

Yes

Yes

Yes

Restricted

Yes

No

[ABAP-Managed Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_nsql.htm)

Yes

Yes

Restricted

Yes

No

No

[Non-ABAP-Managed Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_nsql.htm)

Yes

No

No

No

No

No

Hint

These access methods can be used separately from each other, but there are some mutual dependencies. One example are AS ABAP [database connections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_connections.htm) and their transaction contexts, which are shared by ABAP SQL, Native SQL, and AMDP.

Continue
[ABAP SQL Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_asql.htm)
[AMDP Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_amdp.htm)
[Native SQL Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_objects_nsql.htm)