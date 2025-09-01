  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

DDIC - Naming Rules for Data Types

The name of a data type defined in the ABAP Dictionary must comply to the following rules:

-   It can have a maximum of 30 characters.

-   I can consist of letters, digits and underscores.

-   It must start with a letter.

-   It can be introduced using a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") (/.../) of a [prefix namespace](javascript:call_link\('abenprefix_name_space_glosry.htm'\) "Glossary Entry")

-   It is in the same namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

-   It must not be the name of a [built-in data type](javascript:call_link\('abenbuilt_in_types.htm'\)) in ABAP.

All types created in ABAP Dictionary, including [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC views](javascript:call_link\('abenddic_views.htm'\)), are located in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. [Domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry"), on the other hand, are in a separate namespace, which enables them to have the same name as, for example, a data element.

Hints

-   As all [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") of the [ABAP repository](javascript:call_link\('abenabap_repository_glosry.htm'\) "Glossary Entry"), DDIC types are stored in upper case. Names that are entered in lower or mixed case in the [tools for dictionary objects](javascript:call_link\('abenddic_tools.htm'\)) are converted to upper case internally.

-   Besides the above rules, there are special

-   [naming rules for DDIC structures](javascript:call_link\('abenddic_structures_names.htm'\))

-   [naming rules for DDIC database tables](javascript:call_link\('abenddic_dbtab_names.htm'\))

-   [naming rules for DDIC views](javascript:call_link\('abenddic_view_names.htm'\))