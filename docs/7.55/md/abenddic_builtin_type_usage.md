  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types_intro.htm) → 

DDIC - Use of the Built-In Dictionary Types

The [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary are used for the definition of the elementary parts of all data types, including reference types in ABAP Dictionary, and for specifying some types in ABAP SQL and ABAP CDS. The built-in types in ABAP Dictionary cannot be specified directly in any places other those specified below:

-   [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm)

A data element for an elementary data type has either a directly specified built-in type or a type specified using a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm). In references to data elements in an ABAP program, this type is mapped to a [built-in ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in accordance with the last column of the [tables of built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry").

-   [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm), and [DDIC views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)

The elementary components of a DDIC structure have either a directly specified built-in type or a type specified using a [data element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm). In references to structures in an ABAP program, the structures are mapped to a [structured type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry"), where the elementary components are mapped to [built-in ABAP types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in accordance with the last column of the [tables of built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry"). The same applies to the table fields of DDIC database tables and view fields of dictionary views .

-   [DDIC table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm)

The line types of a table type are defined using existing data types from ABAP Dictionary, whose elementary components have a built-in type (as shown above). When a reference is made to a table type in an ABAP program, the type is mapped to a matching ABAP type. Here, the elementary components are mapped to [built-in ABAP types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") in accordance with the [tables of built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   Reference types

Data elements, components of structures, or line types of table types can all be reference types. Reference types for data reference variables with an elementary static data type are defined by specifying a built-in type directly or by using a data element.

-   Types specified in SQL

-   [Typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_typing.htm) of elements and input parameters of [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") in ABAP CDS.

-   Cast expression [cast](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm) in the CDS DDL in ABAP CDS

-   SQL expression [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) in ABAP SQL

-   [Typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) in ABAP SQL

The data type of all elementary components in a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"), such as view fields, literals, parameters, and other operands is based indirectly on the built-in data types in ABAP Dictionary.

Unlike when using the data types above, TYPE references to the built-in data types in ABAP Dictionary are not possible in ABAP programs. Alongside their role in defining data types, these built-in types in ABAP Dictionary must also be considered in [ABAP SQL statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") and when working with [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") :

-   ABAP SQL statements work with DDIC database tables defined in ABAP Dictionary whose columns have external data types to which the actual platform-dependent types of the databases are mapped.

-   In [Screen Painter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_painter_glosry.htm "Glossary Entry"), [dynpro fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") are also declared with reference to external data types. In a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry"), the special semantic attributes of its data type are usually significant and are evaluated for input masks and for checking input.

Hints

-   In ABAP development, only mappings from the built-in dictionary types to the built-in ABAP types are relevant. In database accesses using ABAP SQL, the actual database type, such as NVARCHAR, is hidden by the dictionary type (in this case CHAR).

-   When referring in ABAP programs to data types defined in the ABAP Dictionary, the [initial value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_glosry.htm "Glossary Entry") of elementary data types is not the initial value assigned to the [built-in dictionary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) but the initial value of the mapped [built-in ABAP types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm).

Example

The following type reference in an ABAP program does not use the built-in type INT2 directly. Instead, it used the identically named data element INT2 whose type is itself defined using the identically named domain INT2. Here, the built-in type INT2 is specified:

DATA num TYPE int2.