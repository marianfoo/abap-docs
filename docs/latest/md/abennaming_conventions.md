---
title: "Naming Conventions and Namespaces"
description: |
  -   Naming Conventions(#abennaming-conventions-1-------namespaces---@ITOC@@ABENNAMING_CONVENTIONS_2) -   Reserved Names(#@@ITOC@@ABENNAMING_CONVENTIONS_3) Naming Conventions The following conventions apply to the names of all definable objects within ABAP programs, such as data types, data objec
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm"
abapFile: "abennaming_conventions.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abennaming", "conventions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Naming%20Conventions%20and%20Namespaces%2C%20ABENNAMING_CONVENTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Naming Conventions and Namespaces

-   [Naming Conventions](#abennaming-conventions-1-------namespaces---@ITOC@@ABENNAMING_CONVENTIONS_2)
-   [Reserved Names](#@@ITOC@@ABENNAMING_CONVENTIONS_3)

Naming Conventions   

The following conventions apply to the names of all definable objects within ABAP programs, such as data types, data objects, classes, macros, and [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"):

-   A name can be up to 30 characters long.
-   Permitted are letters from A to Z, digits from 0 to 9, and underscores (\_).
-   The name must start with a letter or an underscore (\_). Only outside of ABAP objects can the name also start with a different character.
-   The name can have a [namespace prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"). A namespace prefix consists of at least three characters that are enclosed by two forward slashes (/.../). The entire length of prefix and name must not exceed 30 characters.
-   The names of predefined ABAP types or predefined data objects must not be used for data types or data objects.
-   The use of names that are reserved for [ABAP words](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_words.htm) and so on for custom definitions is not actually forbidden, but is strongly advised against.
-   Field symbols are special in that their names have to be enclosed in angle brackets (<...>). The angle brackets are part of the name, which means that a field symbol could be called <>, but this is not recommended.

Since ABAP is not case-sensitive, the names of program-internal objects are not case-sensitive either.

Programming Guideline

[Program-Internal Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprog_intern_names_guidl.htm "Guideline")

Hints

-   All types possible in ABAP are in a namespace. In particular, data types and object types do not have separate namespaces. A global class, for example, cannot be created with a name that is already assigned to a data type in the ABAP Dictionary.
-   The naming conventions presented here must be followed. The syntax check does not check them completely, but this should not be exploited unnecessarily.
-   The program DEMO\_CHARACTERS\_IN\_ABAP\_NAMES demonstrates how these checks run in the current system.

Namespaces   

Outside of class declarations, different objects have separate namespaces, so that it is possible that data types, data objects or procedures can have the same name. Classes and interfaces thereby lie within the same namespace as data types. The namespace is valid for the respective context. Within a context, the names of the same objects must be unique. For example, there can only be one subroutine with the same name in an ABAP program and only one function module with the same name in the entire AS ABAP.

Within a class declaration, the name of every class component - data type, attribute, method, event, or alias name - must be unique.

Reserved Names   

The following names are reserved and must not be used in personal declarations:

-   User-defined data types must not have the name of a [built-in ABAP type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm). This applies to type definitions in the ABAP language and in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
-   The name of a structure component must not have the name of the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line. This applies to type definitions in ABAP and in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") as well as to data declarations and when creating data objects in ABAP.
-   A [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of an internal table must not have the predefined names primary\_key or loop\_key.
-   The name of the [built-in data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_objects.htm) [space](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspace.htm) must not be used in any positions for other declarations or data objects, except in the case of the obsolete [anonymous components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_components.htm).
-   The name of the [built-in data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_objects.htm) [me](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenme.htm) must not be used in classes for attributes, formal parameters, and local data objects.

Hint

The names of the following built-in data objects are not reserved and are hidden by any identically named declarations. It is strongly advised to not create any data objects with the names of these built-in data objects:

-   The structures of the [ABAP system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm) sy and syst and the system fields themselves.
-   The [obsolete built-in data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_obsolete.htm) [screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_structure_obsolete.htm).