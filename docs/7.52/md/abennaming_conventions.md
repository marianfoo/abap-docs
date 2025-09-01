  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) → 

Naming Conventions and Namespaces

-   [Naming Conventions](#abennaming-conventions-1--------namespaces---@ITOC@@ABENNAMING_CONVENTIONS_2)

-   [Reserved Names](#@@ITOC@@ABENNAMING_CONVENTIONS_3)

Naming Conventions

The following conventions apply to the names of all definable objects within ABAP programs, such as data types, data objects, classes, macros, or [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"):

-   A name can be up to 30 characters in length.

-   Permitted characters are letters from "A" to "Z", digits from "0" to "9", and underscores (\_).

-   The name must start with a letter or an underscore (\_). Only outside of ABAP objects can the name also start with a different character.

-   The name can have a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"). A namespace prefix consists of at least three characters that are enclosed by two forward slashes (/.../). The entire length of prefix and name cannot exceed 30 characters.

-   The names of predefined ABAP types or predefined data objects cannot be used for data types or data objects.

-   The use of IDs that are reserved for [ABAP words](javascript:call_link\('abenabap_words.htm'\)) and so on for custom definitions is not actually forbidden, but is strongly advised against.

-   Field symbols are special because their names have to be enclosed in angle brackets (<...>). The angle brackets are a part of the name, which means that a field symbol could potentially be called <> (but this is not recommended).

Programming Guideline

[Program-Internal Names](javascript:call_link\('abenprog_intern_names_guidl.htm'\) "Guideline")

Notes

-   All types possible in ABAP are in a namespace. Data types and object types do not have separate namespaces. A global class, for example, cannot be created with a name that is already being used for a data type in ABAP Dictionary.

-   The naming conventions presented here must be followed. They are not checked in full by the syntax check, but they must not be broken more than absolutely necessary.

-   The program DEMO\_CHARACTERS\_IN\_ABAP\_NAMES demonstrates how these checks run in the current system.

Namespaces

Outside of class declarations, different objects have separate namespaces, so it is possible that data types, data objects or procedures can have the same name. Classes and interfaces thus lie within the same namespace as data types. The namespace is valid for the respective context. Within a context, the names of the same objects must be unique. For example, there can only be one subroutine with the same name in an ABAP program and only one function module with the same name in the entire [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry").

Within a class declaration, the name of every class component (data type, attribute, method, event, or alias name) must be unique.

Reserved Names

The following names are reserved and cannot be used in any other declarations:

-   Self-defined data types cannot have the name of a [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). This applies to type definitions in the ABAP language and in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

-   The name of a structure component cannot be the name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line. This applies to type definitions in ABAP and in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") as well as to data declarations and when creating data objects in ABAP.

-   A [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") of an internal table cannot have the predefined names primary\_key or loop\_key.

-   The name of the [built-in data object](javascript:call_link\('abenbuilt_in_objects.htm'\)) [space](javascript:call_link\('abenspace.htm'\)) cannot be used in any positions for other declarations or data objects, except in the case of [anonymous components](javascript:call_link\('abenanonymous_components.htm'\)).

-   The name of the[built-in data object](javascript:call_link\('abenbuilt_in_objects.htm'\)) [me](javascript:call_link\('abenme.htm'\)) cannot be used in classes for attributes, formal parameters, and local data objects.

Note

The names of the following built-in data objects are not reserved and are obscured by any declarations with the same name:

-   The structures of the [ABAP system fields](javascript:call_link\('abensystem_fields.htm'\)) sy and syst, plus the system fields themselves.

-   The [obsolete built-in data object](javascript:call_link\('abenbuilt_in_obsolete.htm'\)) [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)).

It is strongly advised not to create any data objects with the names of these built-in data objects