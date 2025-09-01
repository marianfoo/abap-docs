  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

Semantic Attributes of Structures

Structures in ABAP Dictionary can be given the following semantic attributes:

-   Short text of the structure

Each structure has a short description specified when it is created.

-   Documentation

A structure can be given (optional) documentation.

-   Short text of components

Each component is assigned a short text description used in any references to an existing type. A custom text can be specified if the type is defined directly.

-   Output style of components

A component with the directly specified type of a decimal floating point number can be assigned an [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) for dynpros .

-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN

A component of the same or a different structure (or database table or view) must be defined as a reference field (with the built-in data type CUKY or UNIT) for each [currency field](javascript:call_link\('abenddic_currency_field.htm'\)) with the type CURR and for each [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)) with the type QUAN. This field is the [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry") or [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that specifies the currency or the unit. A table in which a reference field is defined is called a reference table.

-   Check table

Like table fields of database tables, structure components can be assigned [check tables](javascript:call_link\('abenddic_database_tables_checktab.htm'\)). This is useful for structures included in database tables and which become part of the their [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)).

-   Search help

Structure components whose data type is specified by a data element with elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). This is only useful, however, for components used for input fields on UIs.

-   Key field and flag for initial values

Like table fields of database tables, structure components can be defined as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) and can be assigned a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)). This is relevant for structures that are included in database tables. The table fields are then given these attributes. Components of structures used as lock parameters in a [lock object](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry") must continue to be defined as key fields.

Note

Structure components whose type is defined using [data elements](javascript:call_link\('abenddic_data_elements.htm'\)) and not by being defined directly have the additional semantic attributes of the data elements.