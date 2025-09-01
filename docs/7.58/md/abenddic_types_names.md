  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Naming%20Rules%20for%20Data%20Types%2C%20ABENDDIC_TYPES_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Naming Rules for Data Types

The name of a DDIC data type must stick to the following rules:

-   It can have a maximum of 30 characters.
-   It can consist of letters, digits, and underscores.
-   It must start with a letter.
-   It can be introduced using a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") (/.../) of a [prefix namespace](javascript:call_link\('abenprefix_name_space_glosry.htm'\) "Glossary Entry")
-   It is in the same namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.
-   It must not be the name of a [built-in data type](javascript:call_link\('abenbuilt_in_types.htm'\)) in ABAP.

All DDIC data types, alongside [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC views](javascript:call_link\('abenddic_views.htm'\)), are located in the same namespace which includes all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry"), on the other hand, are in a separate namespace, and can therefore have the same name as, for example, a data element.

Hints

-   DDIC types are stored in uppercase letters, as all [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") of the [ABAP repository](javascript:call_link\('abenabap_repository_glosry.htm'\) "Glossary Entry"). Names that are entered in lowercase or mixed case letters in the [tools for dictionary objects](javascript:call_link\('abenddic_tools.htm'\)) are converted to upper case internally.
-   In addition to the above rules, there are special
    -   [naming rules for DDIC structures](javascript:call_link\('abenddic_structures_names.htm'\))
    -   [naming rules for DDIC database tables](javascript:call_link\('abenddic_dbtab_names.htm'\))
    -   [naming rules for DDIC views](javascript:call_link\('abenddic_view_names.htm'\))