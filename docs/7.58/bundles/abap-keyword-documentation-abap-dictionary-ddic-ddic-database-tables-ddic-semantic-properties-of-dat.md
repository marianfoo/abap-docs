# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Semantic Properties of Database Tables / DDIC - Table-Specific Semantic Properties of Database Tables / DDIC - Foreign Key Dependencies

Included pages: 6


### abenddic_database_tables_forkeyrel.htm

---
title: "DDIC - Foreign Key Dependencies"
description: |
  A foreign key dependency is a semantic dependency between two DDIC database tables, namely a foreign key table(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_table_glosry.htm 'Glossary Entry') and a check table(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-U
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm"
abapFile: "abenddic_database_tables_forkeyrel.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "forkeyrel"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Key%20Dependencies%2C%20ABENDDIC_DATABASE_TABLES_FORKEYREL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") and a [check table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheck_table_glosry.htm "Glossary Entry").

The definition of a foreign key dependency is done in the foreign key table. By assigning check tables to table fields, the table fields become [foreign keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_glosry.htm "Glossary Entry").

-   [Check table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)
-   [Foreign Key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)

Foreign key dependencies are evaluated during input checks, for input help on dynpros and in Web Dynpros, when creating [views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_views.htm), and in [lock objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlock_object_glosry.htm "Glossary Entry"). In the ABAP programming language or in ABAP SQL, foreign keys are not evaluated.

In a check table, [obsolete data can be flagged as obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm). This has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)
[DDIC - Foreign Keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)
[DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)


### abenddic_database_tables_checktab.htm

---
title: "DDIC - Check Table"
description: |
  Table fields of a DDIC database table whose data type is determined by a DDIC data element(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm 'Glossary Entry') can be assigned a check table. The value table(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm"
abapFile: "abenddic_database_tables_checktab.htm"
keywords: ["insert", "delete", "do", "if", "try", "data", "abenddic", "database", "tables", "checktab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Check%20Table%2C%20ABENDDIC_DATABASE_TABLES_CHECKTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry") can be assigned a check table. The [value table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_table_glosry.htm "Glossary Entry") of any [DDIC domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") and becomes a part of the [foreign key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. The corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly (not by using a DDIC data element) cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded only by appending new key fields to its end. The existing foreign keys then automatically become generic regarding the new key fields.
-   A client field cannot be inserted later into an existing check table.
-   A special column can be used to [flag obsolete data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm) in check tables.


### abenddic_database_tables_forkey.htm

---
title: "DDIC - Foreign Keys"
description: |
  A foreign key consists of one or more foreign key fields(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_field_glosry.htm 'Glossary Entry') of a foreign key table(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_table_glosry.htm 'Glossary Entr
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm"
abapFile: "abenddic_database_tables_forkey.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "forkey"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Keys%2C%20ABENDDIC_DATABASE_TABLES_FORKEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Foreign Keys

A foreign key consists of one or more [foreign key fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") of a [foreign key table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"). The foreign key fields form the [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [check table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheck_table_glosry.htm "Glossary Entry"). A DDIC database table can have multiple foreign keys. A [foreign key dependency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") exists between a foreign key table and its check tables. A foreign key table usually only contains entries where the content of the foreign key also occurs exactly once as content of the primary key in the check table. The developer must consider this in [writes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) made using ABAP SQL, since there is no automatic check.

Foreign keys can have the following properties:

-   Input check
    
    In the definition of the foreign key, input checks for dynpros or Web Dynpros by means of foreign key dependencies can be switched on or off. Furthermore, the standard message can be replaced by a custom [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry"). Any placeholders in the message are filled as follows when the message is sent: The first three placeholders are filled with the content of the foreign key fields that are assigned to the first three key fields of the check table after the client field. The fourth placeholder is filled with the name of the check table.
    
-   Generic foreign key fields
    
    Foreign key fields can be flagged as generic in the definition of a foreign key. Generic foreign key fields are not checked against their check table in dynpro input checks.
    
-   Constant values
    
    Foreign key fields can be given constant values in the definition of a foreign key. In dynpro input checks, the field of the check table assigned to a foreign key field with a constant value must have this constant value in the row determined by the remaining foreign key fields.
    
-   Inheritance
    
    The fields of included include structures can be foreign key fields and are part of the foreign key of the DDIC database table. An inheritance relationship with the included structure exists by default and any changes to the definition of the foreign key in the included structure affect the foreign key of the including DDIC database table. This inheritance relationship can be removed. When removed, any changes to the definition of the foreign key in the included structure are not applied to the DDIC database table.
    
-   Cardinality
    
    A [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") n:m can be defined for each foreign key. This cardinality mainly serves a documentation purpose, except in the definition of [DDIC maintenance views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_maintenance_views.htm) and [DDIC help views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_help_views.htm).
    
    Possible values for n:
    
    -   1
        
        Precisely one row of the check table must exist for each record of the foreign key table.
        
    -   C
        
        No rows must exist in the check table for a record of the foreign key table.
        
    
    Possible values for m:
    
    -   1
        
        Precisely one row in the foreign key table must exist for each row of the check table.
        
    -   C
        
        There can be no more than one assigned row in the foreign key table for each row of the check table.
        
    -   N
        
        There must be at least one row in the foreign key table for each row of the check table.
        
    -   CN
        
        There can be any number of rows in the foreign key table for each row of the check table.
        
    
    Defining a generic foreign key turns the cardinalities 1:m or C:m into CN:m. There can be multiple rows in the check table for each dependent row. This cardinality cannot, however, be specified explicitly.
    
-   Type of the foreign key fields
    
    The type of the foreign key fields can be defined to describe the meaning of the foreign key fields in the foreign key table. The possible values are as follows, whereby the first two are only for documentation purposes:
    
    -   No key fields/key candidates
        
        The foreign key fields are neither primary key fields of the foreign key table nor do they identify a record of the foreign key table uniquely.
        
    -   Key fields/key candidates
        
        The foreign key fields are either primary key fields of the foreign key table or they identify a record of the foreign key table uniquely as a key candidate.
        
    -   Key fields of a text table
        
        If this type of foreign key field is defined, the foreign key table is handled as a text table of the check table. The primary key of the foreign key table must match the check table and it must have one additional language key field with the type LANG. There can be only one text table for each check table, otherwise an activation warning occurs. The texts in a text table are used, for example, to explain input helps on dynpros and Web Dynpros.


### abenddic_deprecation.htm

---
title: "DDIC - Flagging of Deprecated Data in Check Tables"
description: |
  Rows in check tables(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the input check(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm"
abapFile: "abenddic_deprecation.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenddic", "deprecation"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_checks.htm) and [input help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help.htm) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and must not be used.

If the deprecated data check is enabled, the implicit [input checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_checks.htm) and [input helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help.htm) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGDEPRECATIONCODE as follows:

-   Input check:
    -   If a deprecated value is entered, a warning occurs.
    -   If an invalid value is entered, an error message occurs.
-   Input help:
    -   Valid data and the deprecated data is displayed. Invalid data is not displayed.

Hints

-   If input helps are based on [search helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm "Glossary Entry") linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") module, the column CONFIGDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") use the more universal concept of [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry"), which is applied to each access using the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry").
-   Instead of CONFIGDEPRECATIONCODE, also the obsolete name CONFIGURATIONDEPRECATIONCODE can still be used.

Executable Example

[Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)


### abenddic_deprecation_abexa.htm

---
title: "DDIC - Flagging of Deprecated Data in Check Tables"
description: |
  This example demonstrates how deprecated data is flagged in check tables(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm). Source Code REPORT demo_dynpro_deprecation. TABLES demo_depr_struc. DATA depr_flag TYPE abap_bool VALUE 'X'. START-OF-SELECTION. CALL
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm"
abapFile: "abenddic_deprecation_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "data", "types", "abenddic", "deprecation", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm) →  [DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

This example demonstrates [how deprecated data is flagged in check tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm).

Source Code   

REPORT demo\_dynpro\_deprecation.
TABLES demo\_depr\_struc.
DATA depr\_flag TYPE abap\_bool VALUE 'X'.
START-OF-SELECTION.
  CALL SCREEN 100.
LOAD-OF-PROGRAM.
  depr\_flag = cl\_configuration\_deprecation=>deprecation\_is\_active( ).
  DATA ls\_target TYPE demo\_depr\_check1.
  SELECT planetype
         FROM saplane
         ORDER BY planetype
         INTO TABLE @FINAL(planetypes).
  DELETE FROM demo\_depr\_check1.
  INSERT demo\_depr\_check1 FROM TABLE @( VALUE #(
      FOR wa IN planetypes INDEX INTO idx
      ( planetype = wa-planetype
        configdeprecationcode =
          COND #( WHEN idx <= 3 THEN 'W'
                  WHEN idx BETWEEN 4 AND 6 THEN 'E'
                  ELSE ' ' ) ) ) ).
MODULE pbo\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  cl\_configuration\_deprecation=>set\_deprecation\_active(
    i\_respect\_obsolete\_values = depr\_flag ).
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description   

This example uses the check table DEMO\_DEPR\_CHECK for the flagging of deprecated entries. The ABAP program flags the first three table entries as deprecated. The next three table entries are flagged as invalid.

When the ABAP program is executed, the consumer can enable or disable the deprecated data check via the [checkbox](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheckbox_glosry.htm "Glossary Entry") Check deprecated data. This affects the input check and input help.

If checks on deprecated data are enabled, the following takes place:

-   A warning occurs if one of the deprecated values is entered. If one of the invalid values is entered, an error message occurs and the entered value is not accepted.
-   The input help displays valid values and deprecated values only and no invalid values.

If the checkbox Check deprecated data is not selected, no warnings or error messages are produced and the input help displays all entries from the check table DEMO\_DEPR\_CHECK.


### abenddic_deprecation.htm

---
title: "DDIC - Flagging of Deprecated Data in Check Tables"
description: |
  Rows in check tables(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the input check(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm"
abapFile: "abenddic_deprecation.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenddic", "deprecation"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_checks.htm) and [input help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help.htm) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and must not be used.

If the deprecated data check is enabled, the implicit [input checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_checks.htm) and [input helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_value_help.htm) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGDEPRECATIONCODE as follows:

-   Input check:
    -   If a deprecated value is entered, a warning occurs.
    -   If an invalid value is entered, an error message occurs.
-   Input help:
    -   Valid data and the deprecated data is displayed. Invalid data is not displayed.

Hints

-   If input helps are based on [search helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm "Glossary Entry") linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") module, the column CONFIGDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") use the more universal concept of [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry"), which is applied to each access using the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry").
-   Instead of CONFIGDEPRECATIONCODE, also the obsolete name CONFIGURATIONDEPRECATIONCODE can still be used.

Executable Example

[Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)
