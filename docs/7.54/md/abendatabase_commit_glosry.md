---
title: "database_commit_glosry"
description: |
  database_commit_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm"
abapFile: "abendatabase_commit_glosry.htm"
keywords: ["do", "try", "data", "abendatabase", "commit", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

database commit

End of a [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), in which changed data records are committed to the [database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_glosry.htm "Glossary Entry"). All changes are temporary until they have been written using a database commit. Changes are always directly visible to the executing program. The [database system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_system_glosry.htm "Glossary Entry") that is used determines whether other users can see the database changes immediately or only after the database commit. In [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), database commits are triggered implicitly, as well as by being requested explicitly.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit.htm)