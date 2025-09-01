  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) → 

DDIC - Naming Rules for Data Types

The name of a data type defined in the ABAP Dictionary must meet the following rules:

-   It can have a maximum of 30 characters.
-   I can consist of letters, digits and underscores.
-   It must start with a letter.
-   It can be introduced using a [namespace prefix](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprefix_name_space_glosry.htm "Glossary Entry")
-   It is in the same namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   It must not be the name of a [built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types.htm) in ABAP.

All types created in the ABAP Dictionary, including [DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) and [DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_views.htm), are located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. [DDIC domains](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendomain_glosry.htm "Glossary Entry"), on the other hand, are in a separate namespace, which enables them to have the same name as, for example, a data element.

Hints

-   As all [repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") of the [ABAP repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_repository_glosry.htm "Glossary Entry"), DDIC types are stored in uppercase letters. Names that are entered in lowercase or mixed case letters in the [tools for dictionary objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm) are converted to upper case internally.
-   In addition to the above rules, there are special
    -   [naming rules for DDIC structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures_names.htm)
    -   [naming rules for DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_dbtab_names.htm)
    -   [naming rules for DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_names.htm)