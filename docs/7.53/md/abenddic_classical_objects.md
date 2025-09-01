  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) → 

Classic Objects in ABAP Dictionary

The most important classic objects in ABAP Dictionary are:

-   [Data types](javascript:call_link\('abenddic_data_types.htm'\))

ABAP Dictionary can handle the following standalone data types:

-   [Data elements](javascript:call_link\('abenddic_data_elements.htm'\))
    Elementary data types or reference types with semantic attributes (such as documentation or descriptions). The type attributes of a data element are defined either directly or using a domain.
    A [domain](javascript:call_link\('abenddic_domains.htm'\)) describes the attributes of data elements, such as the actual data type or the value range. A domain can be used by any number of data elements, but a data element does not itself need to use a domain. In other repository objects, most specifically ABAP programs, it is not possible to make a direct reference to a domain.

-   [Structures](javascript:call_link\('abenddic_structures.htm'\))
    Complex types that can comprise any other number of data types.

-   [Table types](javascript:call_link\('abenddic_table_types.htm'\))
    Complex types that describe [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") in ABAP. These should not be confused with database tables that describe tables in the database.

The data types in ABAP Dictionary are used in ABAP as reference objects for interface parameters and data objects which can be referenced in common by all repository objects.

-   [Database tables](javascript:call_link\('abenddic_database_tables.htm'\))

A table (not to be confused with a table type) is an object in ABAP Dictionary that designates a database table. As far as its data type is concerned, a database table is a flat structure for which further technical attributes of the database table can be defined alongside the type attributes. The physical database table is created when a table is activated on the database. An ABAP program handles a database table both as a structure and as a database table. This means that the table can be used as a template for structured data objects and also accessed using [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") .

-   [Views](javascript:call_link\('abenddic_views.htm'\))

A view is a grouping of columns in one or more database tables in accordance with an application-specific view. When multiple tables are joined, a view usually implements a join with statically defined join conditions. The columns of a view make a flat structure that can be used as a data type. In ABAP SQL, a view can usually be used as a database table. An exception to this are the special [maintenance views](javascript:call_link\('abenmaintenance_view_glosry.htm'\) "Glossary Entry") and [help views](javascript:call_link\('abenhelp_view_glosry.htm'\) "Glossary Entry").

-   [Lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry")

A lock object is used as a basis for [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry"). Lock objects specify database tables associated using foreign key relationships and to which a shared lock applies. When a lock object is created, two [lock function modules](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") are generated automatically for use in ABAP programs.

-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry")

A search help uses a combination of structure components, data elements, and check tables plus assigned data to find values without the user needing to enter the exact value in question.

This documentation describes the classic type definitions in ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about lock objects and search helps can be found in the ABAP Dictionary documentation in SAP Help Portal. The following provides an overview of tools for the classic objects in ABAP Dictionary:

-   [Tools for Classic ABAP Dictionary](javascript:call_link\('abenddic_tools.htm'\))

Notes

-   The data types in ABAP Dictionary can only be used by AS ABAP and instances of these types are not created as types of the database system.

-   If existing dictionary objects used to define database tables are changed, it may be necessary to [convert](javascript:call_link\('abenddic_database_tables_conv.htm'\)) these tables. This can be a very lengthy process for tables with a large number of rows. Furthermore, [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") in the converted tables can become inconsistent. A where-used list should be created before dictionary objects such as data elements or domains are changed.

-   GUI technologies such as classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry") are closely integrated with ABAP Dictionary. This has special relevance for input checks and for [field helps](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") and [input helps](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") on input fields. If the data type of an input field is declared using a type from ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. The valid input values can be fixed using the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they become unusable.

-   Database objects managed by ABAP Dictionary (such as database tables or views defined in the dictionary) should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Continue
[Data Types](javascript:call_link\('abenddic_data_types.htm'\))
[Database Tables](javascript:call_link\('abenddic_database_tables.htm'\))
[Views](javascript:call_link\('abenddic_views.htm'\))
[Enhancements](javascript:call_link\('abenddic_enhancements.htm'\))
[Replacement Objects](javascript:call_link\('abenddic_replacement_objects.htm'\))
[Tools for Classic ABAP Dictionary](javascript:call_link\('abenddic_tools.htm'\))