  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) →  [TYPES - tabkeys](javascript:call_link\('abaptypes_keydef.htm'\)) → 

TYPES - key

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *{* *\[*UNIQUE *|* NON-UNIQUE*\]*
      *{* *{*KEY *\[*primary\_key *\[*ALIAS key\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}*
      *|* *{*DEFAULT KEY*}* *}*  *}*
  *|* *{* EMPTY KEY *}* ...

Alternatives:

[1\. ... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... EMPTY KEY](#!ABAP_ALTERNATIVE_2@2@)

Alternative 1

... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*

Extras:

[1\. ... primary\_key COMPONENTS](#!ABAP_ADDITION_1@1@)
[2\. ... ALIAS key\_name](#!ABAP_ADDITION_2@2@)

Effect

Defines the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a table type by specifying components or by specifying it as a standard key.

Name of the Primary Key

Like [secondary keys](javascript:call_link\('abaptypes_secondary_key.htm'\)), the primary key also has a name with which it is addressed. This name cannot be freely selected and is predefined as "primary\_key". It does not have to be specified explicitly when the table is defined since it is always set implicitly. However, it can also be specified before the addition COMPONENTS.

Key Fields

The key fields of the primary key can be defined in the following ways. The order is significant:

-   Individual components comp1 comp2 ... of the row type are specified after KEY. The row type must be structured and the components cannot be table types and cannot contain table types as components. For elementary row types, table\_line is the only component that can be specified.
    
-   If the whole table row is to be defined as a key, the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line can be specified as the only component comp after KEY. This is possible for all row types that are not table types or that do not contain table types as components. For structured row types, table\_line operates like a listing of each individual component.
    
-   By specifying the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") DEFAULT KEY. The standard key fields of a structured row type are all fields with a non-numeric elementary data type. The standard key for non-structured row types is the entire table row, if the row type itself is not a table type. If there is no corresponding component or if the row type is itself a table type, the standard key is [empty](javascript:call_link\('abenitab_empty_key.htm'\)) (this applies to standard tables only).
    

The key fields of the primary table key are generally read-only in all operations that change the content of individual rows of a sorted table or hashed table.

Uniqueness of the Primary Key

If specified, UNIQUE or NON-UNIQUE specify the uniqueness of the primary table key. In the case of a primary table key specified with UNIQUE, a row with specific content of the key fields can appear only once in an internal table of this type. Only NON-UNIQUE can be used for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). UNIQUE must be used for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") and both can be specified for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry").

Uniqueness does not have to be specified, which makes the table type partially generic with respect to the primary key (if specified). The table type can then only be used for [typings](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of formal parameters or field symbols. The differences between the table categories are as follows:

-   The addition NON-UNIQUE is expanded implicitly in the case of types for standard tables. A standard table is never generic with respect to uniqueness.
    
-   Types for sorted tables can be fully generic with respect to uniqueness.
    
-   Types for hashed tables can be fully generic with respect to uniqueness. A fixed hashed table, however, always has a unique primary key.
    
-   Uniqueness cannot be specified for the generic table categories ANY TABLE or INDEX TABLE.
    

Notes

-   The declaration of the primary table key as a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") can be [critical](javascript:call_link\('abenitab_standard_key.htm'\)) for various reasons. It is best to specify key fields explicitly instead.
    
-   Structured components in particular can be explicitly specified as key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) apply.
    
-   Key fields can also have [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"). However, particularly for sorted keys this is not recommended, as sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference has to be compared within the framework of a key access.
    
-   The addition DEFAULT KEY must not be confused with the addition EMPTY KEY. A standard key declared using the addition DEFAULT KEY can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)) unexpectedly in a standard table, whereas EMPTY KEY declares empty primary table keys explicitly for tables with any row types.
    
-   [Static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") and their components can be key fields of internal tables.
    

Example

Defines a primary key without an explicitly specified name. The statement has the same meaning as in the following example.

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY carrid connid fldate bookid.

Addition 1

... primary\_key COMPONENTS

Effect

If the key fields are defined by specifying components, the name of the primary key can be specified explicitly in the statement TYPES. However, the predefined name "primary\_key" must be specified for primary\_key. The addition COMPONENTS must then also be specified before the component is specified.

Note

Explicitly specifying the name primary\_key does not enable the predefined name "primary\_key" to be changed, but does enable an alias name to be specified using the addition ALIAS.

Example

Defines a primary key with an explicitly specified name. The statement has the same meaning as in the previous example.

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY primary\_key
           COMPONENTS carrid connid fldate bookid.

Addition 2

... ALIAS key\_name

Effect

An alias name key\_name can be defined for the primary key when using sorted tables and hashed tables, as long as the primary key is not generic. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)), and must be unique. It enables the primary key to be addressed like a secondary key using a self-defined name.

The syntax requires the name primary\_key to be specified explicitly in the definition of the alias name too.

Example

Defines a primary key with an explicitly specified name and its use in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY primary\_key ALIAS full\_table\_key
           COMPONENTS carrid connid fldate bookid.
DATA bookings TYPE sbook\_tab.
DATA(customid) = bookings\[ KEY full\_table\_key COMPONENTS
                               carrid = '...'
                               connid = '...'
                               fldate = '...'
                               bookid = '...'  \]-customid.

Alternative 2

... EMPTY KEY

Effect

Defines an [empty primary key](javascript:call_link\('abenitab_empty_key.htm'\)) of a table type. This variant is possible for standard tables only. An empty table key does not contain any key fields.

Notes

-   When an empty table key is defined explicitly, this means that the internal table is to be handled like an array that is not subject to being ordered by key values.
    
-   The ordering of a standard table with an empty primary key is determined for the most part by the [primary index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). There are no restrictions on related index accesses and loop processing.
    
-   In statements that evaluate the primary table key to identify rows, an empty table key generally produces unexpected behavior and a syntax check warning. For a list of these statements, see [Empty Table Key](javascript:call_link\('abenitab_empty_key.htm'\)).
    
-   A table key where EMPTY KEY is used to declare an empty table key explicitly is not generic with respect to its primary key. This means that the addition EMPTY KEY can be used to prevent a table type from being too generic with respect to its primary key.
    
-   The explicit declaration of an empty table key using EMPTY KEY is independent of the row type.
    
-   A standard table with an empty primary key can have non-empty [secondary keys](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry").
    
-   Empty table keys can also be created implicitly when the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) is used for standard tables. If an empty table key is to be used, however, it is better to declare it explicitly using EMPTY KEY.
    

Example

The table in the example below is only intended for a loop in which all rows of the table are processed in a random order.

TYPES addresses TYPE STANDARD TABLE OF scustom-email WITH EMPTY KEY.
DATA  email\_tab TYPE addresses.
FIELD-SYMBOLS <email> LIKE LINE OF email\_tab.
...
SELECT email
       FROM scustom
       INTO TABLE @email\_tab.
...
LOOP AT email\_tab ASSIGNING <email> USING KEY primary\_key.
  mail\_manager->send( address = <email> text = ... ).
ENDLOOP.