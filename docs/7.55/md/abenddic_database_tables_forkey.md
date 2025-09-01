  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkeyrel.htm) → 

DDIC - Foreign Keys

A foreign key consists of one or more [foreign key fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") of a [foreign key table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") that is itself the [primary key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [check table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencheck_table_glosry.htm "Glossary Entry"). A DDIC database table can have more than one foreign key. A [foreign key dependency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") joins a foreign key table and its check tables. A foreign key table usually only contains entries where the content of the foreign key also occurs exactly once as content of the primary key in the check table. This must also be respected in [writes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_writing.htm) performed using ABAP SQL.

Foreign keys can have the following attributes:

-   Input check

In the definition of the foreign key, it is possible to use a foreign key dependency to activate an input check for dynpros or Web Dynpros . Furthermore, the standard message here can be replaced by a custom [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry"). Any placeholders in the message are filled as follows when the message is sent: The first three placeholders are filled with the content of the foreign key fields that are assigned to the first three key fields of the check table after the client field. The fourth placeholder is filled with the name of the check table.

-   Generic foreign key fields

Foreign key fields can be flagged as generic in the definition of a foreign key. Generic foreign key fields are not checked against their check table in dynpro input checks.

-   Constant values

Foreign key fields can be given constant values in the definition of a foreign key. In dynpro input checks, the field of the check table assigned to a foreign key field of this type must have this value in the row determined by the remaining foreign key fields.

-   Inheritance

The fields of included include structures can be foreign key fields and are part of the foreign key of the DDIC database table. An inheritance relationship with the included structure exists by default and any changes to the definition of the foreign key in the included structure are applied to the foreign key of the DDIC database table in question. This inheritance relationship can be broken, and any changes to the definition of the foreign key in the included structure are not then applied to the DDIC database table.

-   Cardinality

An n:m [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") can be defined for each foreign key. This cardinality has only a logging purpose , except in the definition of [DDIC maintenance views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_maintenance_views.htm) and [DDIC help views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_help_views.htm) .

Possible values for n:

-   1
    Precisely one assigned row of the check table must exist for each record of the foreign key table.

-   C
    No assigned rows must exist in the check table for a record of the foreign key table.

Possible values for m:

-   1
    Precisely one assigned row in the foreign key table must exist for each row of the check table.

-   C
    There can be no more than one assigned row in the foreign key table for each row of the check table.

-   N
    There must be at least one assigned row in the foreign key table for each row of the check table.

-   CN
    There can be any number of assigned rows in the foreign key table for each row of the check table.

Defining a generic foreign key turns the cardinalities 1:m or C:m into CN:m. There can be multiple rows in the check table for each dependent row. This cardinality cannot, however, be specified explicitly.

-   Type of the foreign key fields

The type of the foreign key fields can be defined to describe the meaning of the foreign key fields in the foreign key table. The possible values are as follows (with the first two only having a logging purpose):

-   No key fields/key candidates
    The foreign key fields are not primary key fields of the foreign key table and do not identify a record of the foreign key table uniquely.

-   Key fields/key candidates
    The foreign key fields are either primary key fields of the foreign key table or they identify a record of the foreign key table uniquely as a key candidate.
    

-   Key fields of a text table
    If this type of foreign key field is defined, the foreign key table is handled as a text table of the check table. The primary key of the foreign key table must match the check table, plus a language key field with the type LANG. There can be only one text table for each check table (otherwise an activation warning occurs). The texts in a text table are used, for example, to explain input helps on dynpros and Web Dynpros.