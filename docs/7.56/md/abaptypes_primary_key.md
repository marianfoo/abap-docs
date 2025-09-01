  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm) →  [TYPES, TABLE OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) →  [TYPES, tabkeys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_keydef.htm) → 

TYPES, key

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_shortref.htm)

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

Definition of the [primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a table type by specifying components or by specifying it as a standard key.

Name of the Primary Key

Like [secondary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_secondary_key.htm), the primary key also has a name with which it can be addressed. This name cannot be freely selected and is specified as primary\_key instead. It does not have to be explicitly specified when the table is defined since it is always set implicitly. However, it can also be specified before the addition COMPONENTS.

Key Fields

The key fields of the primary key can be defined in the following ways, whereby the order is significant:

-   Individual components comp1 comp2 ... of the line type are listed after KEY. The line type must be structured, and the components cannot be table types, nor can they contain table types as components. For elementary line types, table\_line is the only component that can be specified.
-   If the whole table line is to be defined as a key, the [pseudo component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as the only component comp after KEY. This is possible for all line types that are not table types or that do not contain table types as components. For structured line types, table\_line works like a listing of each individual component.
-   Specification of the [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry") DEFAULT KEY. The standard key fields of a structured line type are all fields with a non-numeric elementary data type. The standard key for non-structured line types is the entire table line if the line type itself is not a table type. If there is no corresponding component or if the line type is itself a table type, the standard key is [empty](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm), which is only possible for standard tables.

The key fields of the primary table key are generally read-only in all operations that change the content of individual lines of a sorted table or hashed table.

Uniqueness of the Primary Key

The specifications UNIQUE or NON-UNIQUE determine the uniqueness of the primary table key. In the case of a primary table key specified with UNIQUE, a line with specific content of the key fields can occur only once in an internal table of this type. Only NON-UNIQUE can be used for [standard tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry"). UNIQUE must be used for [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry") and both can be specified for [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry").

Uniqueness does not have to be specified, which makes the table type partially generic with respect to the entry of the primary key. The table type can then only be used for [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_glosry.htm "Glossary Entry") of formal parameters or field symbols. The table categories differ as follows:

-   The addition NON-UNIQUE is added implicitly for types for standard tables. A standard table is never generic with respect to uniqueness.
-   Types for sorted tables can be completely generic with respect to uniqueness.
-   Types for hashed tables can be completely generic with respect to uniqueness, but a concrete hashed table always has a unique primary key.
-   Uniqueness cannot be specified for the generic table categories ANY TABLE or INDEX TABLE.

Hints

-   The declaration of the primary table key as a [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry") can be [critical](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_standard_key.htm) for various reasons. Instead, key fields should be specified explicitly.
-   Structured components can be explicitly specified when specifying key fields, provided that the components meet the other requirements. When a structured key field is evaluated, the rules for [structure comparisons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands_struc.htm) apply.
-   Key fields can also have [reference types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreference_type_glosry.htm "Glossary Entry"). However, this is not recommended particularly for sorted keys, since sorting reference variables is questionable. For non-initial invalid references, no order is defined. A runtime error occurs if such a reference must be compared in the context of a key access.
-   The addition DEFAULT KEY must not be confused with the addition EMPTY KEY. A standard key declared using the addition DEFAULT KEY can be [empty](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm) unexpectedly in a standard table, whereas EMPTY KEY declares explicitly empty primary table keys explicitly for tables with any line types.
-   [Static boxes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_box_glosry.htm "Glossary Entry") and their components can be key fields of internal tables.

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

An alias name alias\_name can be defined for the primary key in sorted tables and hashed tables, for as long as the primary key is not generic. The alias name is in the namespace of the secondary key, must comply with the [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm), and must be unique. It cannot be one of the predefined names primary\_key or loop\_key. It enables the primary key to be addressed like a secondary key by means of a self-defined name. The syntax requires the name primary\_key to be specified explicitly when defining an alias name.

An alias name is part of the technical type attributes of a table type. Two table types with otherwise identical technical attributes, but different alias names, are not [compatible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompatible_glosry.htm "Glossary Entry").

Hint

A primary key with an alias name can be addressed by the alias name alias\_name as well as by the predefined name primary\_key.

Example

Definition of a primary key with an explicit name specification and its use in a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry").

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

Definition of an [empty primary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm) of a table type. This variant is only possible for standard tables. An empty table key does not contain any key fields.

Hints

-   When an empty table key is defined explicitly, this means that the internal table is to be handled like an array in which there is no order specified by key values.
-   The order of a standard table with an empty primary key is determined primarily by the [primary index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). There are no restrictions on related index accesses and loop processing.
-   In statements that evaluate the primary table key to identify lines to be processed, an empty table key generally produces unexpected behavior and therefore a syntax check warning. For a list of these statements, see [Empty Table Key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm).
-   A table key where EMPTY KEY is used to declare an empty table key explicitly is not generic with respect to its primary key. This means that the addition EMPTY KEY can be used to prevent a table type from being too generic with respect to its primary key.
-   The explicit declaration of an empty table key using EMPTY KEY is independent of the line type.
-   A standard table with an empty primary key can have non-empty [secondary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_key_glosry.htm "Glossary Entry").
-   Empty table keys can also be created implicitly when the [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_standard_key.htm) is used for standard tables. If an empty table key is required, it is preferable to declare it explicitly using EMPTY KEY.

Example

The table in the example below is only intended for loop processing in which all lines of the table are processed in a random order.

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