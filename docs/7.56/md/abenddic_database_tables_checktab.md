---
title: "DDIC - Check Table"
description: |
  Table fields of a DDIC database table whose data type is determined by a DDIC data element(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_element_glosry.htm 'Glossary Entry') can be assigned a check table. Here, the value table(https://help.sap.com/doc/abapdocu_756_index_htm
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_checktab.htm"
abapFile: "abenddic_database_tables_checktab.htm"
keywords: ["insert", "delete", "do", "if", "try", "data", "abenddic", "database", "tables", "checktab"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Dependent Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_forkeyrel.htm) → 

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_element_glosry.htm "Glossary Entry") can be assigned a check table. Here, the [value table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_table_glosry.htm "Glossary Entry") of any [DDIC domain](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendomain_glosry.htm "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") and becomes a part of the [foreign key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_forkey.htm) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. Here, the corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded later only by appending new key fields to its end. The existing foreign keys then automatically become generic with respect to the new key fields.
-   A client field cannot be inserted later into an existing check table.
-   A special column can be used to [flag obsolete data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_deprecation.htm) in check tables.