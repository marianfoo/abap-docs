---
title: "Check Table"
description: |
  Table fields of a database table whose data type is determined using a data element(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_element_glosry.htm 'Glossary Entry') can be assigned a check table. Here, the value table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/e
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_checktab.htm"
abapFile: "abenddic_database_tables_checktab.htm"
keywords: ["insert", "delete", "do", "if", "try", "class", "data", "abenddic", "database", "tables", "checktab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_semasspec.htm) →  [Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkeyrel.htm) → 

Check Table

Table fields of a database table whose data type is determined using a [data element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_element_glosry.htm "Glossary Entry") can be assigned a check table. Here, the [value table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_table_glosry.htm "Glossary Entry") of any [domain](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendomain_glosry.htm "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") and becomes a part of the [foreign key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. Here, the corresponding field pairs must have the same data type.

Notes

-   Fields whose data type is specified directly cannot be assigned a check table.

-   As long as a database table is a check table none of its key fields can be deleted and the order of the key fields cannot be modified.

-   As long as a database table is a check table its primary key can be expanded later only by appending new key fields to its end. The existing foreign keys then automatically become generic with respect to the new key fields.

-   A client field cannot be inserted later in an existing check table.