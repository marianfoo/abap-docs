  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) →  [TYPES, tabkeys](javascript:call_link\('abaptypes_keydef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20key%2C%20ABAPTYPES_PRIMARY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, key

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *{* *\[*UNIQUE *|* NON-UNIQUE*\]*
      *{* *{*KEY *\[*primary\_key *\[*ALIAS alias\_name*\]* COMPONENTS*\]* comp1 comp2 ...*}*
      *|* *{*DEFAULT KEY*}* *}*  *}*
  *|* *{* EMPTY KEY *}* ...

Alternatives:

[1\. ... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... EMPTY KEY](#!ABAP_ALTERNATIVE_2@2@)

Alternative 1   

... *\[*UNIQUE*|*NON-UNIQUE*\]* *{*KEY ...*}**|**{*DEFAULT KEY*}*

Additions:

[1\. ... primary\_key COMPONENTS](#!ABAP_ADDITION_1@1@)
[2\. ... ALIAS alias\_name](#!ABAP_ADDITION_2@2@)

Effect

Definition of the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a table type by specifying components or by specifying it as a standard key.

Name of the Primary Key

Like [secondary keys](javascript:call_link\('abaptypes_secondary_key.htm'\)), the primary key also has a name with which it can be addressed. This name cannot be freely selected and is specified as primary\_key instead. It does not have to be explicitly specified when the table is defined since it is always set implicitly. However, it can also be specified before the addition COMPONENTS.

Key Fields

The key fields of the primary key can be defined in the following ways, whereby the order is significant:

-   Individual components comp1 comp2 ... of the line type are listed after KEY. The line type must be structured, and the components cannot be table types, nor can they contain table types as components. For elementary line types, table\_line is the only component that can be specified.
-   If the whole table line is to be defined as a key, the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line can be specified as the only component comp after KEY. This is possible for all line types that are not table types or that do not contain table types as components. For structured line types, table\_line works like a listing of each individual component.
-   Specification of the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") DEFAULT KEY. The standard key fields of a structured line type are all fields with a non-numeric elementary data type. The standard key for non-structured line types is the entire table line if the line type itself is not a table type. If there is no corresponding component or if the line type is itself a table type, the standard key is [empty](javascript:call_link\('abenitab_empty_key.htm'\)), which is only possible for standard tables.

The key fields of the primary table key are generally read-only in all operations that change the content of individual lines of a sorted table or hashed table.

Uniqueness of the Primary Key

The specifications UNIQUE or NON-UNIQUE determine the uniqueness of the primary table key. In the case of a primary table key specified with UNIQUE, a line with specific content of the key fields can occur only once in an internal table of this type. Only NON-UNIQUE can be used for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). UNIQUE must be used for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") and both can be specified for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry").

Uniqueness does not have to be specified, which makes the table type partially generic with respect to the entry of the primary key. The table type can then only be used for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of formal parameters or field symbols. The table categories differ as follows:

-   The addition NON-UNIQUE is added implicitly for types for standard tables. A standard table is never generic with respect to uniqueness.
-   Types for sorted tables can be completely generic with respect to uniqueness.
-   Types for hashed tables can be completely generic with respect to uniqueness, but a concrete hashed table always has a unique primary key.
-   Uniqueness cannot be specified for the generic table categories ANY TABLE or INDEX TABLE.

Hints

-   The declaration of the primary table key as a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") can be [critical](javascript:call_link\('abenitab_standard_key.htm'\)) for various reasons. Instead, key fields should be specified explicitly.
-   Structured components can be explicitly specified when specifying key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) apply.
-   Key fields can also have [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"). However, this is not recommended particularly for sorted keys, since sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference must be compared in the context of a key access.
-   The addition DEFAULT KEY must not be confused with the addition EMPTY KEY. A standard key declared using the addition DEFAULT KEY can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)) unexpectedly in a standard table, whereas EMPTY KEY declares explicitly empty primary table keys explicitly for tables with any line types.
-   [Static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") and their components can be key fields of internal tables.

Example

Definition of a primary key without explicit name specification. The statement has the same meaning as in the following example.

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY carrid connid fldate bookid.

Addition 1   

... primary\_key COMPONENTS

Effect

If the key fields are defined by specifying components, the name of the primary key can be specified explicitly in the statement TYPES. However, the predefined name primary\_key must be specified for primary\_key. The addition COMPONENTS must then also be specified before the component is specified.

Hint

Explicitly specifying the name primary\_key does not enable the predefined name primary\_key to be changed but enables an alias name to be specified using the addition ALIAS.

Example

Definition of a primary key with explicit name specification. The statement has the same meaning as in the previous example.

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY primary\_key
           COMPONENTS carrid connid fldate bookid.

Addition 2   

... ALIAS alias\_name

Effect

An alias name alias\_name can be defined for the primary key in sorted tables and hashed tables, for as long as the primary key is not generic. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)), and must be unique. It cannot be one of the predefined names primary\_key or loop\_key. It enables the primary key to be addressed like a secondary key by means of a user-defined name. The syntax requires the name primary\_key to be specified explicitly when defining an alias name.

An alias name is part of the technical type properties of a table type. Two table types with otherwise identical technical properties, but different alias names, are not [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry").

Hint

A primary key with an alias name can be addressed by the alias name alias\_name as well as by the predefined name primary\_key.

Example

Definition of a primary key with an explicit name specification and its use in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

TYPES sbook\_tab
      TYPE SORTED TABLE
      OF sbook
      WITH UNIQUE KEY primary\_key ALIAS full\_table\_key
           COMPONENTS carrid connid fldate bookid.
DATA bookings TYPE sbook\_tab.
FINAL(customid) = bookings\[ KEY full\_table\_key COMPONENTS
                               carrid = '...'
                               connid = '...'
                               fldate = '...'
                               bookid = '...'  \]-customid.

Alternative 2   

... EMPTY KEY

Effect

Definition of an [empty primary key](javascript:call_link\('abenitab_empty_key.htm'\)) of a table type. This variant is only possible for standard tables. An empty table key does not contain any key fields.

Hints

-   When an empty table key is defined explicitly, this means that the internal table is to be handled like an array in which there is no order specified by key values.
-   The order of a standard table with an empty primary key is determined primarily by the [primary index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). There are no restrictions on related index accesses and loop processing.
-   In statements that evaluate the primary table key to identify lines to be processed, an empty table key generally produces unexpected behavior and therefore a syntax check warning. For a list of these statements, see [Empty Table Key](javascript:call_link\('abenitab_empty_key.htm'\)).
-   A table key where EMPTY KEY is used to declare an empty table key explicitly is not generic with respect to its primary key. This means that the addition EMPTY KEY can be used to prevent a table type from being too generic with respect to its primary key.
-   The explicit declaration of an empty table key using EMPTY KEY is independent of the line type.
-   A standard table with an empty primary key can have non-empty [secondary keys](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry").
-   Empty table keys can also be created implicitly when the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) is used for standard tables. If an empty table key is required, it is preferable to declare it explicitly using EMPTY KEY.

Example

The table in the example below is only intended for loop processing in which all lines of the table are processed in a random order.

CLASS mail\_manager DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS send
      IMPORTING
        address TYPE s\_email
        text    TYPE string.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS mail\_manager IMPLEMENTATION.
  METHOD send.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    TYPES addresses TYPE STANDARD TABLE OF scustom-email WITH EMPTY KEY.
    DATA  email\_tab TYPE addresses.
    FIELD-SYMBOLS <email> LIKE LINE OF email\_tab.
    ...
    SELECT email
           FROM scustom
           INTO TABLE @email\_tab.
    ...
    LOOP AT email\_tab ASSIGNING <email> USING KEY primary\_key.
      mail\_manager=>send( address = <email> text = \`text\` ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.