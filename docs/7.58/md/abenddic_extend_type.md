  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_append_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Structure%20Extensions%2C%20ABENDDIC_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Dictionary DDL for Structure Extensions

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_extend_type.htm)