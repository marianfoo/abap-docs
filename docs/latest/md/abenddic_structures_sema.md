  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Structures%2C%20ABENDDIC_STRUCTURES_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

DDIC - Semantic Properties of Structures

Structures in the ABAP Dictionary can have the following semantic properties:

-   Short text of the structure
    
    Each structure is assigned a short descriptive text that must be specified when it is created.
    
-   Documentation
    
    A structure can be assigned documentation that can be read as required.
    
-   Short text of components
    
    Each component is assigned a short descriptive text that is inherited in any references to an existing type. A custom text can be specified if the type is defined directly.
    
-   Output style of components
    
    A component with the directly specified type of a decimal floating point number can be assigned an [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) for dynpros.
    
-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN
    
    For each [currency field](javascript:call_link\('abenddic_currency_field.htm'\)) with the type CURR and for each [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)) with the type QUAN, a component of the same or a different structure (or DDIC database table or view) must be defined as a reference field with the built-in data type CUKY or UNIT. This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") or [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.
    
-   Check table
    
    Like table fields of DDIC database tables, structure components can be assigned [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)). This is useful for structures included in DDIC database tables which are part of the database table's [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).
    
-   Spatial reference system
    
    Structure components with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB must be assigned [spatial reference systems](javascript:call_link\('abenddic_database_tables_sptlrf.htm'\)), just like table fields of DDIC database tables. This is relevant for structures that are included in DDIC database tables.
    
-   Search help
    
    Structure components whose data type is specified by a data element with an elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). This is only useful, however, for components used for input fields on UIs.
    
-   Key field
    
    Like table fields of DDIC database tables, structure components can be defined as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). Components of structures used as lock parameters in a [lock object](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry") must be defined as key fields. When a structure with key fields is [included in DDIC database tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)), however, they are not used as key fields of the DDIC database table. Either all or no fields of an included structure can become key fields when included.
    
-   Flag for initial values
    
    Like table fields of DDIC database tables, structure components can be assigned a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)). When a structure with such components is [included in DDIC database tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)), the table fields can inherit these properties.
    
-   Text language
    
    Like table fields of DDIC database tables, one structure component of type [LANG](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) can be labeled as the [text language](javascript:call_link\('abenddic_dbtab_text_language.htm'\)) of the structure and the same rules are applied when transporting data of that structured type between non-Unicode and Unicode Systems.
    

Hint

Structure components whose type is defined using [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) have the additional semantic properties of the data elements.