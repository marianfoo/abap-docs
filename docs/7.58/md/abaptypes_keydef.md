  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20tabkeys%2C%20ABAPTYPES_KEYDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, tabkeys

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *\[* WITH [key](javascript:call_link\('abaptypes_primary_key.htm'\)) *\]*
    *\[* WITH [secondary\_key1](javascript:call_link\('abaptypes_secondary_key.htm'\)) *\]* *\[* WITH [secondary\_key2](javascript:call_link\('abaptypes_secondary_key.htm'\)) *\]* ...
    *\[* *{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS *\]* ...

Additions:

[1\. ... WITH FURTHER SECONDARY KEYS](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT FURTHER SECONDARY KEYS](#!ABAP_ADDITION_2@2@)

Effect

Definition of the table key of a table type. The following can be defined:

-   A [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") using [key](javascript:call_link\('abaptypes_primary_key.htm'\))
-   Up to 15 [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") using [secondary\_key1](javascript:call_link\('abaptypes_secondary_key.htm'\)), [secondary\_key2](javascript:call_link\('abaptypes_secondary_key.htm'\)), ...

The order in which the components of a table key are defined is significant for the table type. The additions WITH*|*WITHOUT FURTHER SECONDARY KEYS determine the genericness with respect to the secondary table key.

An internal table type that has no table key or an incomplete table key is generic with respect to the table key. Such a table type can only be used for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") formal parameters or field symbols. A standard table type with a generic primary table key only can be specified for [DATA](javascript:call_link\('abapdata_referring.htm'\)) after TYPE. This creates a bound table type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").

Primary Key

The genericity of a table type with respect to the primary key is determined as follows:

-   If WITH [key](javascript:call_link\('abaptypes_primary_key.htm'\)) is not specified, a table type is fully generic with respect to the primary key.
-   If there is no declaration about the uniqueness of the key in [key](javascript:call_link\('abaptypes_primary_key.htm'\)), a table type is partly generic with respect to the key.
-   If a key declaration with a uniqueness declaration is made in [key](javascript:call_link\('abaptypes_primary_key.htm'\)), a table type is not generic with respect to the primary key.

The non-generic table categories can be split up as follows:

-   If no primary key is declared for standard tables, this primary key is generic with respect to the key fields and defined implicitly as non-unique.
-   If no primary key is declared for sorted tables, this primary key is generic with respect to the key fields and uniqueness.
-   If no primary key is declared for hashed tables, this primary key is generic with respect to the key fields and uniqueness. However, it is important to note that concrete hashed tables can have only one unique key.

Secondary Key

The genericity of a table type with respect to the secondary keys depends on that of the primary key by default and can be overridden using the additions WITH*|*WITHOUT FURTHER SECONDARY KEYS.

-   If the primary key is completely or partially generic, the table type is by default generic with respect to the secondary keys. The default behavior can be expressed using the addition WITH FURTHER SECONDARY KEYS. However, if the addition WITHOUT FURTHER SECONDARY KEYS is specified, the table type is generic with respect to the primary key but not with respect to the secondary key.
-   If the primary key is not generic, then the table type is by default not generic with respect to the secondary key either. The default behavior can be expressed using the addition WITHOUT FURTHER SECONDARY KEYS. However, if the addition WITH FURTHER SECONDARY KEYS is specified, the table type is generic with respect to the secondary key but not with respect to the primary key.

Hint

A generic table type must not be used as a component of a [structured type](javascript:call_link\('abaptypes_struc.htm'\)).

Example

Definition of a table type for a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") with a unique primary key as well as two non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), cityfrom\_to and airp\_from\_to.

TYPES spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY            carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Addition 1   

... WITH FURTHER SECONDARY KEYS

Effect

This addition explicitly specifies that the table type is generic with respect to the secondary key. This means that it includes table types that can have further secondary keys in addition to the optional secondary keys specified using WITH [secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\)) ....

If 15 secondary keys are already defined, the addition WITH FURTHER SECONDARY KEYS cannot be specified.

Hints

-   This addition expresses the default behavior in table types with a generic primary key.
-   In table types with a non-generic primary key, WITH FURTHER SECONDARY KEYS can be used to override the default behavior and make it generic with respect to the secondary keys.

Addition 2   

... WITHOUT FURTHER SECONDARY KEYS

Effect

This addition explicitly specifies that the table type is not generic with respect to the secondary key. This means that it includes only table types that have exactly those secondary keys specified using WITH [secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\)) ....

Hint

This addition expresses the default behavior in table types with a generic primary key.

Example

The addition WITH FURTHER SECONDARY KEYS in the declaration of the tabular type itab enables the passing of internal tables with any secondary keys to the parameter p of the method meth. Without this addition, the addition WITHOUT FURTHER SECONDARY KEYS would be used implicitly and the method call shown would not be possible.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid
               WITH FURTHER SECONDARY KEYS.
    CLASS-METHODS meth IMPORTING p TYPE itab.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE SORTED TABLE OF scarr
              WITH UNIQUE KEY carrid
              WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
    demo=>meth( itab ).
  ENDMETHOD.
ENDCLASS.

Continue
[TYPES, key](javascript:call_link\('abaptypes_primary_key.htm'\))
[TYPES, secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\))