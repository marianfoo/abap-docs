  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

DDIC - Semantic Attributes of Structures

Structures in the ABAP Dictionary can be given the following semantic attributes:

-   Short text of the structure
    
    Each structure is assigned a short descriptive text that must be specified when it is created.
    
-   Documentation
    
    A structure can be assigned documentation that can be read as required.
    
-   Short text of components
    
    Each component is assigned a short descriptive text that is inherited in any references to an existing type. A custom text can be specified if the type is defined directly.
    
-   Output style of components
    
    A component with the directly specified type of a decimal floating point number can be assigned an [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) for dynpros .
    
-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN
    
    A component of the same or a different structure (or DDIC database table or view) must be defined as a reference field (with the built-in data type CUKY or UNIT) for each [currency field](javascript:call_link\('abenddic_currency_field.htm'\)) with the type CURR and for each [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)) with the type QUAN. This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") or [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.
    
-   Check table
    
    Like table fields of DDIC database tables, structure components can be assigned [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)). This is useful for structures included in DDIC database tables and which become part of their [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).
    
-   Spatial reference system
    
    Structure components with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB must be assigned [spatial reference systems](javascript:call_link\('abenddic_database_tables_sptlrf.htm'\)), just like table fields of DDIC database tables. This is relevant for structures that are included in DDIC database tables.
    
-   Search help
    
    Structure components whose data type is specified by a data element with an elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). This is only useful, however, for components used for input fields on UIs.
    
-   Key field
    
    Like table fields of DDIC database tables, structure components can be defined as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). Components of structures used as lock parameters in a [lock object](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry") must be defined as key fields. When a structure with key fields is [included in DDIC database tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)), however, they are not used as key fields of the DDIC database table. Either all or no fields of an included structure can become key fields when included.
    
-   Flag for initial values
    
    Like table fields of DDIC database tables, structure components can be assigned a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)). When a structure with such components is [included in DDIC database tables](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)), the table fields can inherit these attributes.
    

Hint

Structure components whose type is defined using [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) and not by being defined directly have the additional semantic attributes of the data elements.