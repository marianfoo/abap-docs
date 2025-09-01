  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Use%20of%20the%20Built-In%20Dictionary%20Types%2C%20ABENDDIC_BUILTIN_TYPE_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

DDIC - Use of the Built-In Dictionary Types

The [built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in ABAP Dictionary are used for the definition of the elementary parts of all data types, including reference types in ABAP Dictionary, and for specifying some types in ABAP SQL and ABAP CDS. The built-in types in ABAP Dictionary can be specified in the places specified below. No other places are possible.

-   [Data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm)
    
    A data element for an elementary data type has either a directly specified built-in type or a type specified using a [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm). If a data element is used for typing in an ABAP program, the data element's dictionary type is mapped to a [built-in ABAP type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in accordance with the last column of the [tables of built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
    
-   [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), and [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm)
    
    The elementary components of a DDIC structure have either a directly specified built-in type or a type specified using a [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm). In references to structures in an ABAP program, the structures are mapped to a [structured type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry"), where the elementary components are mapped to [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") in accordance with the last column of the [tables of built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The same applies to the table fields of DDIC database tables and view fields of DDIC views.
    
-   [DDIC table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm)
    
    The line types of a table type are defined using existing data types from ABAP Dictionary, whose elementary components have a built-in type as explained above. When a reference is made to a table type in an ABAP program, the type is mapped to a matching ABAP type. Here, the elementary components are mapped to [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") in accordance with the [tables of built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
    
-   Reference types
    
    Data elements, components of structures, or line types of table types can all be reference types. Reference types for data reference variables with an elementary static data type are defined by specifying a built-in type directly or by using a data element.
    
-   Types specified in SQL
    -   [Typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) of elements and input parameters of [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") in ABAP CDS.
    -   Cast expression [cast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) in the CDS DDL in ABAP CDS.
    -   [Typed literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typed_literal_v2.htm) in ABAP CDS.
    -   SQL expression [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) in ABAP SQL.
    -   [Typed literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_typed_literals.htm) in ABAP SQL.

The data type of all elementary components in a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), such as view fields, literals, parameters, and other operands is based indirectly on the built-in data types in ABAP Dictionary.

In ABAP programs, TYPE references to the built-in data types in ABAP Dictionary are possible only by using the DDIC data types above. No other TYPE reference to a built-in DDIC type is supported from an ABAP program. Alongside their role in defining data types, these built-in types in ABAP Dictionary must also be considered in [ABAP SQL statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") and when working with [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"):

-   ABAP SQL statements work with DDIC database tables whose columns have external data types to which the actual platform-dependent types of the databases are mapped.
-   In [Screen Painter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_painter_glosry.htm "Glossary Entry"), [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") are also declared with reference to external data types. In a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry"), the special semantic properties of its data type are usually significant and are evaluated for input masks and for checking input.

Hints

-   In ABAP CDS, a built-in dictionary type type is specified by ABAP.type, which is in fact a bit misleading.
-   In ABAP development, only mappings from the built-in dictionary types to the built-in ABAP types are relevant. In database accesses using ABAP SQL, the actual database type, such as NVARCHAR, is hidden by the dictionary type (in this case CHAR).
-   When referring to built-in dictionary types in ABAP programs, the [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry") of elementary data types is not the initial value assigned to the [built-in dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) but the initial value of the mapped [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm).
-   For some built-in dictionary types, there are [predefined data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_predef_types.htm) of the same name for common usage.

Example

The following type reference in an ABAP program does not use the built-in type INT2 directly. Instead, it used the identically named data element INT2 whose type is itself defined using the identically named domain INT2. The domain finally uses the built-in type INT2:

DATA num TYPE int2.