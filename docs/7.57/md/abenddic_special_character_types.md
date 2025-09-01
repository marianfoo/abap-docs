  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Special Character-Like Types, ABENDDIC_SPECIAL_CHARACTER_TYPES, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_text_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numeric texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_character.htm) and the associated rules apply.
    
-   [CLNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_column_glosry.htm "Glossary Entry")
    
    From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_client.htm).
    
-   [LANG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_language_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. The [primary key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_table_glosry.htm "Glossary Entry") consists of the [foreign key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG. Furthermore, a component of structures or DDIC database tables that has the data type LANG can be flagged as a text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry"). Furthermore, the text language can affect which lines of a database table are transported by the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencts_glosry.htm "Glossary Entry"). Depending on settings in the CTS, only entries in the original language of the database table can be transported.
    

Hint

When the statements [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).