  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP - Dictionary \(DDIC\), ABENABAP_DICTIONARY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP - Dictionary (DDIC)

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_object_glosry.htm "Glossary Entry") visible in all [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry"), particularly in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") objects and in ABAP programs, and usable as part of the package concept. As in the [ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glosry.htm "Glossary Entry") programming language, the definable data types in the ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The structures of the ABAP Dictionary have the important task of describing DDIC database tables and DDIC views in the database, while also being visible in all other repository objects. This makes it possible to define type-friendly interface parameters and data objects for handling DDIC database tables and DDIC views. In addition to the data types, lock objects and search helps, among other things, are also managed in the ABAP Dictionary. All objects (definitions) in the ABAP Dictionary are themselves transportable repository objects.

The main objects in the ABAP Dictionary are as follows:

-   [Data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm)
    
    ABAP Dictionary supports the following standalone data types:
    
    -   [Data elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements.htm) for elementary data types and reference types.
    -   [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) that can consist of any other number of data types.
    -   [DDIC table types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_table_types.htm) with any line type (not to be confused with DDIC database tables that describe the tables on the database).
    
    The data types in the ABAP Dictionary are used within AS ABAP as reference objects for interface parameters and data objects. All repository objects working with these can refer directly to the data types in the ABAP Dictionary
    
-   [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm)
    
    A DDIC database table (not to be confused with a table type) is an object in the ABAP Dictionary that describes a database table. According to its data type, a DDIC database table is a non-nested structure in which further technical properties of the DDIC database table can be defined alongside the type properties. The physical database table on the database is created when a DDIC database table is activated. An ABAP program handles a DDIC database table both as a DDIC structure and as a database table. This means that the DDIC database table can be used as a template for structured data objects and also accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry").
    
-   [DDIC views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm)
    
    A DDIC view is a grouping of columns in one or more DDIC database tables as an application-specific view. When multiple tables are joined, a view usually implements a join with statically defined join conditions. The columns of a view make a non-nested structure that can be used as a data type. ABAP Dictionary supports the following DDIC views:
    
    -   [DDIC table views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_table_views.htm) for views on database tables in the ABAP Dictionary.
    -   [DDIC external views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_external_views.htm) (obsolete) for views on [SAP HANA views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_view_glosry.htm "Glossary Entry").
    
    In ABAP SQL, a DDIC view can usually be used like a DDIC database table. An exception to this are the special [DDIC maintenance views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmaintenance_view_glosry.htm "Glossary Entry") and [DDIC help views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhelp_view_glosry.htm "Glossary Entry").
    
-   [Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_enhancements.htm)
    
    ABAP Dictionary makes it possible to enhance [DDIC structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_views.htm), or [domains](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_domains.htm), without making modifications.
    
-   [Replacement objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_replacement_objects.htm)
    
    [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) and [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_views.htm) in the ABAP Dictionary can be assigned to [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") as replacement objects, which are then used as replacement objects in certain accesses.
    
-   [DDIC tuning objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm)
    
    [DDIC tuning objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_object_glosry.htm "Glossary Entry") can be created for DDIC objects to define technical settings and tunings that can be transported separately.
    

ABAP Dictionary has the following built-in data types and functions:

-   A set of [built-in ABAP Dictionary data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_intro.htm), which are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") is also based on these elementary data types.
-   ABAP Dictionary provides a set of [built-in database functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) that can be used in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and/or in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry").

For common usage in ABAP Dictionary objects, ABAP CDS and ABAP programs, there is a set of

-   [predefined types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_predef_types.htm)

The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Like ABAP programs, dictionary objects must be activated before they can be used. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it continue to work with the previous active version until the modified dictionary object is activated successfully. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_activation.htm)

For an overview of the tools for dictionary objects, see the following:

-   [Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tools.htm)

Hints

-   Further dictionary objects are as follows:
    
    -   [Lock objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlock_object_glosry.htm "Glossary Entry")
        
        A lock object is used as a basis for [SAP locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock_glosry.htm "Glossary Entry"). Lock objects specify DDIC database tables linked using foreign key relationships and to which a shared lock is to be applied. When a lock object is created, two [lock function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlock_function_module_glosry.htm "Glossary Entry") are generated automatically for use in ABAP programs.
        
    -   [Search helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensearch_help_glosry.htm "Glossary Entry")
        
        A search help can search for values using a combination of structure components, data elements, and check tables using assigned data without needing to know the exact spelling of a value.
        
    
    This documentation describes the type definitions in the ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about lock objects and search helps can be found in the ABAP Dictionary documentation in the SAP Help Portal.
    
-   GUI technologies such as classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenweb_dynpro_glosry.htm "Glossary Entry") are closely linked with ABAP Dictionary. This applies more specifically to [input checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_checks_auto.htm) as well as [field helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_help_glosry.htm "Glossary Entry") and [input helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_glosry.htm "Glossary Entry") of input fields (see [Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm)). If the data type of an input field is declared using a type from the ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. The valid input values can be fixed using the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they can no longer be executed.
-   Database objects managed by the ABAP Dictionary, such as DDIC database tables or DDIC views defined in the dictionary, should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_recomm.htm)).

Continue
[DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm)
[DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm)
[DDIC - Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm)
[DDIC - Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_enhancements.htm)
[DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_replacement_objects.htm)
[DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm)
[DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_intro.htm)
[DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm)
[DDIC - Predefined Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_predef_types.htm)
[DDIC - Activating ABAP Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_activation.htm)
[DDIC - Tools for Dictionary Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tools.htm)
[Obsolete Dictionary Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_obsolete.htm)