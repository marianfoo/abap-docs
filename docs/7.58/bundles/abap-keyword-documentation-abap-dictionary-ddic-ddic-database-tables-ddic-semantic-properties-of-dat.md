# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Database Tables / DDIC - Semantic Properties of Database Tables / DDIC - Table-Specific Semantic Properties of Database Tables / DDIC - Foreign Key Dependencies

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_database_tables_forkeyrel.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm)
- [abenddic_database_tables_checktab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)
- [abenddic_database_tables_forkey.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)
- [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)
- [abenddic_deprecation_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.919Z

---

### abenddic_database_tables_forkeyrel.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_forkeyrel.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_database_tables_forkeyrel.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Key%20Dependencies%2C%20ABENDDIC_DATABASE_TABLES_FORKEYREL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry").

The definition of a foreign key dependency is done in the foreign key table. By assigning check tables to table fields, the table fields become [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

-   [Check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
-   [Foreign Key](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

Foreign key dependencies are evaluated during input checks, for input help on dynpros and in Web Dynpros, when creating [views](javascript:call_link\('abenddic_views.htm'\)), and in [lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry"). In the ABAP programming language or in ABAP SQL, foreign keys are not evaluated.

In a check table, [obsolete data can be flagged as obsolete](javascript:call_link\('abenddic_deprecation.htm'\)). This has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
[DDIC - Foreign Keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
[DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\))



**📖 Source**: [abenddic_database_tables_forkeyrel.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkeyrel.htm)

### abenddic_database_tables_checktab.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_checktab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_database_tables_checktab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Check%20Table%2C%20ABENDDIC_DATABASE_TABLES_CHECKTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") can be assigned a check table. The [value table](javascript:call_link\('abenvalue_table_glosry.htm'\) "Glossary Entry") of any [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") and becomes a part of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. The corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly (not by using a DDIC data element) cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded only by appending new key fields to its end. The existing foreign keys then automatically become generic regarding the new key fields.
-   A client field cannot be inserted later into an existing check table.
-   A special column can be used to [flag obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)) in check tables.



**📖 Source**: [abenddic_database_tables_checktab.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm)

### abenddic_database_tables_forkey.htm

> **📖 Official SAP Documentation**: [abenddic_database_tables_forkey.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_database_tables_forkey.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenddic_database_tables_forkey.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm)

### abenddic_deprecation.htm

> **📖 Official SAP Documentation**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

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

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGDEPRECATIONCODE as follows:

-   Input check:
    -   If a deprecated value is entered, a warning occurs.
    -   If an invalid value is entered, an error message occurs.
-   Input help:
    -   Valid data and the deprecated data is displayed. Invalid data is not displayed.

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), which is applied to each access using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").
-   Instead of CONFIGDEPRECATIONCODE, also the obsolete name CONFIGURATIONDEPRECATIONCODE can still be used.

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))



**📖 Source**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)

### abenddic_deprecation_abexa.htm

> **📖 Official SAP Documentation**: [abenddic_deprecation_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_deprecation_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) →  [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

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

When the ABAP program is executed, the consumer can enable or disable the deprecated data check via the [checkbox](javascript:call_link\('abencheckbox_glosry.htm'\) "Glossary Entry") Check deprecated data. This affects the input check and input help.

If checks on deprecated data are enabled, the following takes place:

-   A warning occurs if one of the deprecated values is entered. If one of the invalid values is entered, an error message occurs and the entered value is not accepted.
-   The input help displays valid values and deprecated values only and no invalid values.

If the checkbox Check deprecated data is not selected, no warnings or error messages are produced and the input help displays all entries from the check table DEMO\_DEPR\_CHECK.



**📖 Source**: [abenddic_deprecation_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation_abexa.htm)

### abenddic_deprecation.htm

> **📖 Official SAP Documentation**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenddic_deprecation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_deprecation.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

Rows in [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created. This setting can be modified and read using methods of the class CL\_CONFIGURATION\_DEPRECATION:

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

If the deprecated data check is enabled, the implicit [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input helps](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and in Web Dynpro that are based on check tables evaluate the column CONFIGDEPRECATIONCODE as follows:

-   Input check:
    -   If a deprecated value is entered, a warning occurs.
    -   If an invalid value is entered, an error message occurs.
-   Input help:
    -   Valid data and the deprecated data is displayed. Invalid data is not displayed.

Hints

-   If input helps are based on [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") module, the column CONFIGDEPRECATIONCODE must be evaluated in the PAI module itself.
-   [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") use the more universal concept of [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry"), which is applied to each access using the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").
-   Instead of CONFIGDEPRECATIONCODE, also the obsolete name CONFIGURATIONDEPRECATIONCODE can still be used.

Executable Example

[Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation_abexa.htm'\))
