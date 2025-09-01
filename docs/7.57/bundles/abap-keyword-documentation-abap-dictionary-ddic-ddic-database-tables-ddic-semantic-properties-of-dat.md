# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Semantic Properties of Database Tables / DDIC - Table-Specific Semantic Properties of Database Tables / DDIC - Foreign Key Dependencies

Included pages: 6


### abenddic_database_tables_forkeyrel.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Foreign Key Dependencies, ABENDDIC_DATABASE_TABLES_FORKEYREL, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry").

A foreign key dependency is defined in the foreign key table. Check tables are assigned to table fields and these fields become [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

-   [Check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
-   [Foreign Key](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

Among other things, foreign key dependencies are evaluated for input checks, for input help on dynpros and in Web Dynpro, when creating [views](javascript:call_link\('abenddic_views.htm'\)), and in [lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry"). Foreign keys are not used in the ABAP programming language or in ABAP SQL.

In a check table, [obsolete data can be identified](javascript:call_link\('abenddic_deprecation.htm'\)), which has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
[DDIC - Foreign Keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
[DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\))


### abenddic_database_tables_checktab.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Check Table, ABENDDIC_DATABASE_TABLES_CHECKTAB, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") can be assigned a check table. Here, the [value table](javascript:call_link\('abenvalue_table_glosry.htm'\) "Glossary Entry") of any [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") and becomes a part of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. Here, the corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded later only by appending new key fields to its end. The existing foreign keys then automatically become generic with respect to the new key fields.
-   A client field cannot be inserted later into an existing check table.
-   A special column can be used to [flag obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)) in check tables.


### abenddic_database_tables_forkey.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Foreign Keys, ABENDDIC_DATABASE_TABLES_FORKEY, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Foreign Keys

A foreign key consists of one or more [foreign key fields](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") of a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") that is itself the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry"). A DDIC database table can have multiple foreign keys. A [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") exists between a foreign key table and its check tables. A foreign key table usually only contains entries where the content of the foreign key also occurs exactly once as content of the primary key in the check table. This must also be respected in [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) made using ABAP SQL.

Foreign keys can have the following properties:

-   Input check
    
    In the definition of the foreign key, it is possible to use a foreign key dependency to activate an input check for dynpros or Web Dynpros. Furthermore, the standard message here can be replaced by a custom [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry"). Any placeholders in the message are filled as follows when the message is sent: The first three placeholders are filled with the content of the foreign key fields that are assigned to the first three key fields of the check table after the client field. The fourth placeholder is filled with the name of the check table.
    
-   Generic foreign key fields
    
    Foreign key fields can be flagged as generic in the definition of a foreign key. Generic foreign key fields are not checked against their check table in dynpro input checks.
    
-   Constant values
    
    Foreign key fields can be given constant values in the definition of a foreign key. In dynpro input checks, the field of the check table assigned to a foreign key field of this type must have this value in the row determined by the remaining foreign key fields.
    
-   Inheritance
    
    The fields of included include structures can be foreign key fields and are part of the foreign key of the DDIC database table. An inheritance relationship with the included structure exists by default and any changes to the definition of the foreign key in the included structure affect the foreign key of the including DDIC database table. This inheritance relationship can be removed, and any changes to the definition of the foreign key in the included structure are not then applied to the DDIC database table.
    
-   Cardinality
    
    An n:m [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") can be defined for each foreign key. This cardinality has only a logging purpose, except in the definition of [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\)) and [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\)).
    
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
    
    The type of the foreign key fields can be defined to describe the meaning of the foreign key fields in the foreign key table. The possible values are as follows, whereby the first two are only for logging purposes:
    
    -   No key fields/key candidates
        
        The foreign key fields are neither primary key fields of the foreign key table nor do they identify a record of the foreign key table uniquely.
        
    -   Key fields/key candidates
        
        The foreign key fields are either primary key fields of the foreign key table or they identify a record of the foreign key table uniquely as a key candidate.
        
    -   Key fields of a text table
        
        If this type of foreign key field is defined, the foreign key table is handled as a text table of the check table the primary key of the foreign key table must match the check table, plus a language key field with the type LANG. There can be only one text table for each check table, otherwise an activation warning occurs. The texts in a text table are used, for example, to explain input helps on dynpros and Web Dynpros.


### abenddic_deprecation.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Flagging of Deprecated Data in Check Tables, ABENDDIC_DEPRECATION, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Lines in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid data. If the associated check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGURATIONDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and can no longer be used.

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGURATIONDEPRECATIONCODE as follows:

-   The input check creates the following:
    -   A warning if a deprecated value is entered
    -   An error message if an invalid value is entered
-   The input help displays the following:
    -   Only the valid data and the deprecated data
    -   No invalid data

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") linked with check tables, the deprecated data check runs accordingly.
-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGURATIONDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), which is applied to each access using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))


### abenddic_deprecation_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) →  [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Flagging of Deprecated Data in Check Tables, ABENDDIC_DEPRECATION_ABEXA, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

This example demonstrates [how deprecated data is flagged in check tables](javascript:call_link\('abenddic_deprecation.htm'\)).

Source Code   

REPORT demo\_dynpro\_deprecation.
TABLES demo\_depr\_struc.
DATA depr\_flag TYPE abap\_bool VALUE 'X'.
START-OF-SELECTION.
  CALL SCREEN 100.
LOAD-OF-PROGRAM.
  depr\_flag = cl\_configuration\_deprecation=>deprecation\_is\_active( ).
  DATA ls\_target TYPE demo\_depr\_check.
  SELECT planetype
         FROM saplane
         ORDER BY planetype
         INTO TABLE @FINAL(planetypes).
  DELETE FROM demo\_depr\_check.
  INSERT demo\_depr\_check FROM TABLE @( VALUE #(
      FOR wa IN planetypes INDEX INTO idx
      ( planetype = wa-planetype
        configurationdeprecationcode =
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

This example uses the check table DEMO\_DEPR\_CHECK for the flagging of deprecated entries and the first three table entries are flagged as deprecated. The next three table entries are flagged as invalid.

This example makes it possible to define how deprecated data is checked. The [checkbox](javascript:call_link\('abencheckbox_glosry.htm'\) "Glossary Entry") Check deprecated data enables or disables checks on deprecated data and hence defines the input check and input help.

If checks on deprecated data are enabled, the following takes place:

-   A warning occurs if one of the deprecated values is entered. If one of the invalid values is entered, an error message occurs and the entered value is not accepted.
-   The input help displays valid values and deprecated values only and no invalid values.

If the checkbox Check deprecated data is not selected, no warnings or error messages are produced and the input help displays all entries from the check table DEMO\_DEPR\_CHECK.


### abenddic_deprecation.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Flagging of Deprecated Data in Check Tables, ABENDDIC_DEPRECATION, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Lines in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid data. If the associated check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

-   The parameter I\_RESPECT\_OBSOLETE\_VALUES of the method SET\_DEPRECATION\_ACTIVE can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method DEPRECATION\_IS\_ACTIVE has the value of abap\_true.

A column with the predefined name CONFIGURATIONDEPRECATIONCODE is used to flag deprecated data in check tables. The data type of this column must be defined using the data element CONFIG\_DEPRECATION\_CODE. The following values are valid for this column:

Value

Meaning

Blank

The entry is valid.

W

The entry is deprecated and should no longer be used.

E

The entry is invalid and can no longer be used.

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGURATIONDEPRECATIONCODE as follows:

-   The input check creates the following:
    -   A warning if a deprecated value is entered
    -   An error message if an invalid value is entered
-   The input help displays the following:
    -   Only the valid data and the deprecated data
    -   No invalid data

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") linked with check tables, the deprecated data check runs accordingly.
-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGURATIONDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), which is applied to each access using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))
