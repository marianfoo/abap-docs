  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-4.htm) →  [News for ABAP Release 4.6A](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-46a.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Named%20Includes%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-INCLUDES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Named Includes in ABAP Release 4.6A

The statements [INCLUDE STRUCTURE rec.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinclude_type.htm) and [INCLUDE TYPE type.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinclude_type.htm) were enhanced so that symbolic accesses to groups of fields in structures are possible.

Variants

-   The addition AS name causes the components of a type or structure included using INCLUDE to be accessed as a whole under the alias name.
-   The addition RENAMING WITH SUFFIX suff renames the component names by appending the ID suff. The structure type can then be included more than once.

Advantages

-   [Flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structures and hierarchy views can be defined simultaneously.
-   There are no problems in [alignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment_glosry.htm "Glossary Entry") because the flat structure is aligned automatically so that it can carry the hierarchical structure.
-   Flat and hierarchical views use the same memory, so that no exchange between the different memory areas is necessary.
-   Existing structures can be enhanced compatibly and are integrated in full into ABAP Dictionary.