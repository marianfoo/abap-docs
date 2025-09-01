  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) → 

TYPES - tabkeys

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

... *\[* WITH [key](javascript:call_link\('abaptypes_primary_key.htm'\)) *\]*
    *\[* WITH [secondary\_key1](javascript:call_link\('abaptypes_secondary_key.htm'\)) *\]* *\[* WITH [secondary\_key2](javascript:call_link\('abaptypes_secondary_key.htm'\)) *\]* ...
    *\[* *{*WITH*|*WITHOUT*}* FURTHER SECONDARY KEYS *\]* ...

Extras:

[1\. ... WITH FURTHER SECONDARY KEYS](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT FURTHER SECONDARY KEYS](#!ABAP_ADDITION_2@2@)

Effect

Defines the table key of a table type. The following can be defined:

-   A [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") using [key](javascript:call_link\('abaptypes_primary_key.htm'\))
    
-   Up to 15 [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") using [secondary\_key1](javascript:call_link\('abaptypes_secondary_key.htm'\)), [secondary\_key2](javascript:call_link\('abaptypes_secondary_key.htm'\)), ...
    

The order in which the components of a table key are defined is significant for the table type. The additions WITH*|*WITHOUT FURTHER SECONDARY KEYS determine the genericness with respect to the secondary table key.

An internal table that has no table key or an incomplete table key is generic with respect to the table key. A table type of this nature can be used only for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") formal parameters or field symbols. For [DATA](javascript:call_link\('abapdata_referring.htm'\)), a standard table type with a generic primary table key can be specified after TYPE. In this case, a bound table type with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") is created.

Primary Key

The genericness of a table type with respect to the primary key is determined as follows:

-   If WITH [key](javascript:call_link\('abaptypes_primary_key.htm'\)) is not specified, a table type is generic with respect to the primary key.
    
-   If a declaration about the uniqueness of the key is not made in [key](javascript:call_link\('abaptypes_primary_key.htm'\)), a table type is partly generic with respect to the key.
    
-   If a key declaration with a uniqueness declaration is made in [key](javascript:call_link\('abaptypes_primary_key.htm'\)), a table type is not generic with respect to the primary key.
    

The non-generic table categories can be split up as follows:

-   If no primary key is declared for standard tables, this primary key is generic with respect to the key fields and defined implicitly as non-unique.
    
-   If no primary key is declared for sorted tables, this primary key is generic with respect to the key fields and uniqueness.
    
-   If no primary key is declared for hashed tables, this primary key is generic with respect to the key fields and uniqueness. It should be noted, however, that fixed hashed tables can have only one unique key.
    

Secondary Key

The genericness of a table type with respect to the secondary key depends (by default) on the genericness of the primary key and can be overridden using the additions WITH*|*WITHOUT FURTHER SECONDARY KEYS.

-   If the primary key is fully or partly generic, the table type is by default generic with respect to the secondary key. The default behavior can be expressed using the addition WITH FURTHER SECONDARY KEYS. However, if the addition WITHOUT FURTHER SECONDARY KEYS is specified, the table type is generic with respect to the primary key but not with respect to the secondary key.
    
-   If the primary key is not generic, the table type is not generic with respect to the secondary key either (by default). The default behavior can be expressed using the addition WITHOUT FURTHER SECONDARY KEYS. If, however, WITH FURTHER SECONDARY KEYS is declared, the table type is generic with respect to the secondary key but not with respect to the primary key.
    

Note

A generic table type cannot be used as a component of a [structured type](javascript:call_link\('abaptypes_struc.htm'\)).

Example

Defines a table type for a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") with a unique primary key plus two non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), cityfrom\_to and airp\_from\_to.

TYPES spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Addition 1

... WITH FURTHER SECONDARY KEYS

Effect

This addition defines the table type explicitly as being generic with respect to the secondary key. This means it includes table types that can have further secondary keys and not just the optional secondary keys declared using WITH [secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\)) ....

If 15 secondary keys are already defined, the addition WITH FURTHER SECONDARY KEYS cannot be specified.

Notes

-   This addition expresses the default behavior in table types with a generic primary key.
    
-   In table types with a non-generic primary key, WITH FURTHER SECONDARY KEYS can be used to override the default behavior make it generic with respect to the secondary keys.
    

Addition 2

... WITHOUT FURTHER SECONDARY KEYS

Effect

This addition defines the table type explicitly as being non-generic with respect to the secondary key. This means it includes only those table types that have those secondary keys specified using WITH [secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\)) ....

Note

This addition expresses the default behavior in table types with a generic primary key.

Example

The addition WITH FURTHER SECONDARY KEYS in the declaration of the tabular type itab makes it possible to pass internal tables with any secondary keys to the parameter p of the method meth. If this addition is not used, the addition WITHOUT FURTHER SECONDARY KEYS is used implicitly and the method call shown is not possible.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid
               WITH FURTHER SECONDARY KEYS.
    CLASS-METHODS meth IMPORTING p TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
  ENDMETHOD.
ENDCLASS.
DATA itab TYPE SORTED TABLE OF scarr
          WITH UNIQUE KEY carrid
          WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
START-OF-SELECTION.
  demo=>meth( itab ).

Continue
[TYPES - key](javascript:call_link\('abaptypes_primary_key.htm'\))
[TYPES - secondary\_key](javascript:call_link\('abaptypes_secondary_key.htm'\))