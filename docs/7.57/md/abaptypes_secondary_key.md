  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) →  [TYPES, tabkeys](javascript:call_link\('abaptypes_keydef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPES, secondary_key, ABAPTYPES_SECONDARY_KEY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

TYPES, secondary\_key

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *{*UNIQUE HASHED*}**|**{*UNIQUE SORTED*}**|**{*NON-UNIQUE SORTED*}*
    KEY key\_name *\[*ALIAS alias\_name*\]* COMPONENTS comp1 comp2 ...

Addition:

[... ALIAS alias\_name](#!ABAP_ONE_ADD@1@)

Effect

Definition of a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with an internal table type. An internal table can have up to 15 secondary keys.

Types of Secondary Keys

There are three types of secondary keys that are distinguished by the type of access and their uniqueness:

-   Unique secondary [hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") defined using UNIQUE HASHED that are linked to table lines using a [hash algorithm](javascript:call_link\('abenhash_algorithm_glosry.htm'\) "Glossary Entry").
-   Unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") defined using UNIQUE SORTED that are linked to table lines using a [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") in which the key fields are sorted in ascending order.
-   Non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") defined using NON-UNIQUE SORTED that are linked to table lines using a [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") in which the key fields are sorted in ascending order.

Names of Secondary Keys

Each secondary key has a unique name with which it can be addressed. The name must be specified directly as key\_name and must comply with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)). The name specified cannot be one of the predefined names primary\_key or loop\_key. In addition, the names of secondary keys and any alias name for the [primary key](javascript:call_link\('abaptypes_primary_key.htm'\)) must be unique.

Key Fields

The key fields of the secondary key can be defined in the following ways, whereby the order is significant:

-   Individual components comp1 comp2 ... of the line type are listed after KEY. The line type must be structured, and the components cannot be table types nor can they contain table types as components.
-   If the whole table line is to be defined as a key, the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line can be specified as the only component comp after KEY. This is possible for all line types that are not table types or that do not contain table types as components.

In an operation that changes the content of individual lines of an internal table, the key fields of a secondary table key are read-only only if the secondary key is used during this operation.

Programming Guideline

[Use secondary keys in a way that benefits the table.](javascript:call_link\('abensecondary_key_guidl.htm'\) "Guideline")

Hints

-   When internal tables are accessed using the statements [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)), [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)), [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)), and [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) or in reads using [table expressions](javascript:call_link\('abentable_expressions.htm'\)) and in [mesh types](javascript:call_link\('abaptypes_mesh.htm'\)) and [mesh paths](javascript:call_link\('abenmesh_pathes.htm'\)), a secondary key can be used to determine the lines to be processed or the processing order. To do this, the additions WITH *\[*TABLE*\]* KEY ... COMPONENTS or USING KEY must be specified. A secondary key is never used implicitly.
-   The statement [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) determines the insert position exclusively using the primary key and primary index only. A secondary key can only be specified for the source table from which multiple lines are copied. The latter also applies to the statement [APPEND](javascript:call_link\('abapappend.htm'\)).
-   A secondary key is never generic. When it is defined, all key fields and the uniqueness must be specified completely. An internal table type can, however, be generic with respect to its number of secondary keys.
-   [DEFAULT KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) cannot be specified for secondary keys.
-   Structured components can be specified as key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) apply.
-   If different table keys for an internal table contain the same components, a syntax check warning occurs, which can be hidden using a pragma.
-   Apart from the restrictions described above, the names of secondary keys can be freely selected, but they should not use the component names of the internal table. The name loop\_key is reserved for the explicitly specifying the key used for [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) processing.
-   Key fields can also have [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"). However, particularly for sorted keys this is not recommended, as sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference must be compared in the context of a key access.
-   The internal management of secondary keys in an internal table can involve significant [memory consumption](javascript:call_link\('abenitab_key_memory.htm'\)) and [updates](javascript:call_link\('abenitab_key_secondary_update.htm'\)). For this reason, secondary keys should be used sparingly and only be implemented if their benefits outweigh the costs. See, for example, the executable example [Deleting Lines Using Keys](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\)).

Example

Definition of a table type with a primary key and two secondary keys hash\_key and sort\_key. The primary key in a standard table must not be unique. The secondary key hash\_key has the same components as the primary key and must be a unique hash key. The sorted key sort\_key could also be defined as unique, but this is not beneficial in the example shown here, since a customer ID can appear more than once in the reservation table. The two syntax forms shown here differ in the specification of the name primary\_key for the primary key, but they have the same meaning.

Syntax form without the name primary\_key specified:

TYPES sbook\_tab
      TYPE STANDARD TABLE
      OF sbook
      WITH NON-UNIQUE KEY carrid connid fldate bookid
      WITH UNIQUE HASHED KEY hash\_key
           COMPONENTS carrid connid fldate bookid
      WITH NON-UNIQUE SORTED KEY sort\_key
           COMPONENTS customid.

Syntax form with the name primary\_key specified:

TYPES sbook\_tab
      TYPE STANDARD TABLE
      OF sbook
      WITH NON-UNIQUE KEY primary\_key
           COMPONENTS carrid connid fldate bookid
      WITH UNIQUE HASHED KEY hash\_key
           COMPONENTS carrid connid fldate bookid
      WITH NON-UNIQUE SORTED KEY sort\_key
           COMPONENTS customid.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates the declaration and use of a secondary table key and the resulting performance gains.

Addition   

... ALIAS alias\_name

Effect

An alias name alias\_name can be defined for each secondary key of an internal table. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)), and must be unique. It cannot be one of the predefined names primary\_key or loop\_key. It enables the secondary key to be addressed by means of an additional self-defined name.

An alias name is part of the technical type properties of a table type. Two table types with otherwise identical technical properties, but different alias names, are not [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry").

Hints

-   A secondary key with an alias name can be addressed by the alias name alias\_name as well as by its name key\_name.
-   An alias name can be used when changing the secondary keys of an existing table type in order to avoid the invalidation of existing users.

Example

Definition of a secondary key carrname with an alias name carriername. Both names can be used in the USING KEY addition of a LOOP statement.

TYPES scarr\_tab
      TYPE HASHED TABLE OF scarr
      WITH UNIQUE KEY carrid
      WITH UNIQUE SORTED KEY
        carrname ALIAS carrier\_name COMPONENTS carrname.
DATA carriers TYPE scarr\_tab.
...
LOOP AT carriers ASSIGNING FIELD-SYMBOL(<carrier>)
                 USING KEY carrname.
  ...
ENDLOOP.
LOOP AT carriers ASSIGNING <carrier>
                 USING KEY carrier\_name.
  ...
ENDLOOP.