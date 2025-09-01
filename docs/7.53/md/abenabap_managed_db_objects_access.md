  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) → 

Access to ABAP-Managed Database Objects

[ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") can be accessed as follows:

-   [ABAP SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))

-   [AMDP access to ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))

-   [Native SQL access to ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

These access methods each have their own attributes and restrictions, which are described in the corresponding section. The following table summarizes the most important aspects supported by each access method:

\-

[Dependency Rules](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") Respected

[Data Aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") Respected

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

[ABAP SQL](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))

Yes

Yes

Yes

Yes

Yes

Yes

[AMDP](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))

Yes

Yes

Yes

Restricted

Yes

No

[ABAP-Managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

Yes

Yes

Restricted

Yes

No

No

[Non-ABAP-Managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))

Yes

No

No

No

No

No

Note

These access methods can be used separately from each other, but there are some mutual dependencies. One example are AS ABAP [database connections](javascript:call_link\('abenopensql_multiconnect.htm'\)) and their transaction contexts, which are shared by ABAP SQL, Native SQL, and AMDP.

Continue
[ABAP SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_osql.htm'\))
[AMDP Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\))
[Native SQL Access to ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\))