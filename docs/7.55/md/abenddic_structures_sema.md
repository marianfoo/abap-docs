  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm) → 

DDIC - Semantic Attributes of Structures

Structures in ABAP Dictionary can be given the following semantic attributes:

-   Short text of the structure

Each structure has a short description specified when it is created.

-   Documentation

A structure can be given (optional) documentation.

-   Short text of components

Each component is assigned a short text description used in any references to an existing type. A custom text can be specified if the type is defined directly.

-   Output style of components

A component with the directly specified type of a decimal floating point number can be assigned an [output style](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm) for dynpros .

-   Reference field for components of the [built-in data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) CURR and QUAN

A component of the same or a different structure (or DDIC database table or view) must be defined as a reference field (with the built-in data type CUKY or UNIT) for each [currency field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_currency_field.htm) with the type CURR and for each [quantity field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_quantity_field.htm) with the type QUAN. This field is the [currency key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_key_glosry.htm "Glossary Entry") or [unit key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunit_glosry.htm "Glossary Entry") that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.

-   Check table

Like table fields of DDIC database tables, structure components can be assigned [check tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_checktab.htm). This is useful for structures included in DDIC database tables and which become part of the their [foreign keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkey.htm).

-   Spatial reference system

Structure components with the [geodata type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB must be assigned [spatial reference systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_sptlrf.htm), just like table fields of DDIC database tables. This is relevant for structures that are bound to DDIC database tables.

-   Search help

Structure components whose data type is specified by a data element with elementary data type can be assigned a [search help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_help_glosry.htm "Glossary Entry"). This is only useful, however, for components used for input fields on UIs.

-   Key field

Like table fields of DDIC database tables, structure components can be defined as [key fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_key.htm). Components of structures used as lock parameters in a [lock object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlock_object_glosry.htm "Glossary Entry") must be defined as key fields. But when a structure with key fields is [included in DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techstruc.htm). they are not used as key fields of the DDIC database table. Either all or no fields of an included structure can become key fields when included.

-   Flag for initial values

Like table fields of DDIC database tables, structure components can be assigned a [flag for initial values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_init.htm). When a structure with such components is [included in DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techstruc.htm), the table fields can take over these attributes.

Hint

Structure components whose type is defined using [data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) and not by being defined directly have the additional semantic attributes of the data elements.