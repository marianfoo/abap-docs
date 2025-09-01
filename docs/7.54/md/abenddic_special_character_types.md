  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_special.htm) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_text_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) and the associated rules apply.

-   [CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_client.htm).

-   [LANG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_language_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_table_glosry.htm "Glossary Entry") is still made up of the [foreign key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).