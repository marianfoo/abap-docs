  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Keys%2C%20ABENDDIC_DATABASE_TABLES_FORKEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Foreign Keys

A foreign key consists of one or more [foreign key fields](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") of a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"). The foreign key fields form the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry"). A DDIC database table can have multiple foreign keys. A [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") exists between a foreign key table and its check tables. A foreign key table usually only contains entries where the content of the foreign key also occurs exactly once as content of the primary key in the check table. The developer must consider this in [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) made using ABAP SQL, since there is no automatic check.

Foreign keys can have the following properties:

-   Input check
    
    In the definition of the foreign key, input checks for dynpros or Web Dynpros by means of foreign key dependencies can be switched on or off. Furthermore, the standard message can be replaced by a custom [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry"). Any placeholders in the message are filled as follows when the message is sent: The first three placeholders are filled with the content of the foreign key fields that are assigned to the first three key fields of the check table after the client field. The fourth placeholder is filled with the name of the check table.
    
-   Generic foreign key fields
    
    Foreign key fields can be flagged as generic in the definition of a foreign key. Generic foreign key fields are not checked against their check table in dynpro input checks.
    
-   Constant values
    
    Foreign key fields can be given constant values in the definition of a foreign key. In dynpro input checks, the field of the check table assigned to a foreign key field with a constant value must have this constant value in the row determined by the remaining foreign key fields.
    
-   Inheritance
    
    The fields of included include structures can be foreign key fields and are part of the foreign key of the DDIC database table. An inheritance relationship with the included structure exists by default and any changes to the definition of the foreign key in the included structure affect the foreign key of the including DDIC database table. This inheritance relationship can be removed. When removed, any changes to the definition of the foreign key in the included structure are not applied to the DDIC database table.
    
-   Cardinality
    
    A [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") n:m can be defined for each foreign key. This cardinality mainly serves a documentation purpose, except in the definition of [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\)) and [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\)).
    
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