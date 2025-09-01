  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Special%20Character-Like%20Types%2C%20ABENDDIC_SPECIAL_CHARACTER_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

DDIC - Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for [numeric texts](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")
    
    From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numeric texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the associated rules apply.
    
-   [CLNT](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for [client columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry")
    
    From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](javascript:call_link\('abenddic_database_tables_client.htm'\)).
    
-   [LANG](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for language keys
    
    From a technical perspective, the built-in data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") consists of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") and a field of type LANG. Furthermore, a component of a a DDIC database table or a structure that has the data type LANG can be flagged as a [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry").
    

Hint

When the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) are used to represent a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry") ISOLA (and back).